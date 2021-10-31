import { Asset } from "./Asset";
import { TsBackGround } from "./TsBackGround";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
import { TsPazzle } from "./TsPazzle";
import { TsCursor } from "./TsCursor";
import { TsTitleScreen } from "./TsTitleScreen";
import { TsResultScreen } from "./TsResultScreen";
import { TsVolume } from "./TsVolume";
import { TsResetButton } from "./TsResetButton";
class Main {
    /** canvas */
    private canvas: HTMLCanvasElement;
    /** 2D */
    private context: CanvasRenderingContext2D;
    /** 背景アニメーション */
    private bg: TsBackGround | null = null;

    /** コンストラクタ */
    constructor() {
        this.canvas = document.getElementById("15pazzle") as HTMLCanvasElement;
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    /**
     * メイン処理
     */
    public async main(): Promise<void> {
        // canvas上の選択（ドラッグ）操作を無効化
        this.canvas.ondragstart = () => {
            return false;
        };
        // canvas上の右クリックメニュー操作を無効化
        this.canvas.oncontextmenu = () => {
            return false;
        };
        // 資材読込
        const asset = new Asset();
        await asset.loadAssets();
        // 資材読込が完了したらローディングアイコンを非表示にする
        const loading = document.querySelector('.loading') as HTMLDivElement;
        loading.style.display = 'none';
        // 各機能の呼び出し
        this.bg = new TsBackGround(0, 0, this.canvas.width, this.canvas.height);
        TsGameStatus.titleScreen = new TsTitleScreen(this.canvas);
        TsGameStatus.pazzle = new TsPazzle(this.canvas);
        TsGameStatus.cursor = new TsCursor(this.canvas);
        TsGameStatus.resultScreen = new TsResultScreen(this.canvas);
        TsGameStatus.volume = new TsVolume(this.canvas);
        TsGameStatus.reset = new TsResetButton(this.canvas);
        TsGameStatus.gameMode = TsGameMode.TITLE;
        // 描画の更新
        requestAnimationFrame(() => this.update());
    }

    /**
     * 描画アップデート処理
     */
    public update(): void {
        // 再帰的に描画の更新を呼び出し（通常毎秒60回、ディスプレイのフラッシュレートに合わせる）
        requestAnimationFrame(() => this.update());
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // 背景アニメーションを描画
        this.bg?.render(this.context);
        switch (TsGameStatus.gameMode) {
            case TsGameMode.TITLE:
                // タイトル画面
                // リザルト画面のリセット
                TsGameStatus.resultScreen?.reset();
                // タイトル画面を描画
                TsGameStatus.titleScreen?.render(this.context);
                break;
            case TsGameMode.INPLAY:
                // ゲーム中画面
                // パズルを描画
                TsGameStatus.pazzle?.render(this.context);
                break;
            case TsGameMode.RESULT:
                // リザルト画面
                // パズルを描画
                TsGameStatus.pazzle?.render(this.context);
                // リザルト画面を描画
                TsGameStatus.resultScreen?.render(this.context);
                break;
        }
        // 音量ボリューム表示を描画
        TsGameStatus.volume?.render(this.context);
        // リセットボタンを描画
        TsGameStatus.reset?.render(this.context);
        // 指先ポインターを描画
        TsGameStatus.cursor?.render(this.context);
    }
}
window.addEventListener('load', () => {
    new Main().main();
});