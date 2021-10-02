import { Asset } from "./Asset";
import { TsBackGround } from "./TsBackGround";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
import { TsPazzle } from "./TsPazzle";
import { TsCursor } from "./TsCursor";
import { TsStartScreen } from "./TsStartScreen";
import { TsEndScreen } from "./TsEndScreen";
import { TsVolume } from "./TsVolume";
import { TsResetButton } from "./TsResetButton";
class Main {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private bg: TsBackGround | null = null;
    constructor() {
        this.canvas = document.getElementById("15pazzle") as HTMLCanvasElement;
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }
    public async main(): Promise<void> {
        this.canvas.ondragstart = () => {
            return false;
        };
        this.canvas.oncontextmenu = () => {
            return false;
        };
        const asset = new Asset();
        await asset.loadAssets();
        const loading = document.querySelector('.loading') as HTMLDivElement;
        loading.style.display = 'none';
        this.bg = new TsBackGround(0,0, this.canvas.width, this.canvas.height);
        TsGameStatus.startScreen = new TsStartScreen(this.canvas);
        TsGameStatus.pazzle = new TsPazzle(this.canvas);
        TsGameStatus.pointer = new TsCursor(this.canvas);
        TsGameStatus.endScreen = new TsEndScreen(this.canvas);
        TsGameStatus.volume = new TsVolume(this.canvas);
        TsGameStatus.reset = new TsResetButton(this.canvas);
        TsGameStatus.gameMode = TsGameMode.START;
        requestAnimationFrame(() => this.update());
    }
    public update(): void {
        requestAnimationFrame(() => this.update());
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.bg?.render(this.context);
        switch (TsGameStatus.gameMode) {
            case TsGameMode.START:
                TsGameStatus.endScreen?.reset();
                TsGameStatus.startScreen?.render(this.context);
                break;
            case TsGameMode.INPLAY:
                TsGameStatus.pazzle?.render(this.context);
                break;
            case TsGameMode.RESULT:
                TsGameStatus.pazzle?.render(this.context);
                TsGameStatus.endScreen?.render(this.context);
                break;
        }
        TsGameStatus.volume?.render(this.context);
        TsGameStatus.reset?.render(this.context);
        TsGameStatus.pointer?.render(this.context);
    }
}
window.addEventListener('load', () => {
    new Main().main();
});