import { TsButton } from "./TsButton";
import { TsPoint } from "./TsPoint";
import { Asset } from "./Asset";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
export class TsStartScreen {
    private _canvas: HTMLCanvasElement;
    private _button: TsButton;
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        const center = this._canvas.width / 2;
        this._button = new TsButton(center - 100, 300, 200, 80, 10);
        this._button.flashFlg = true;
    }

    private _clickEventListener = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            Asset.soundEffects['papa'].volume = TsGameStatus.masterVolume;
            Asset.soundEffects['papa'].play();
            // ゲーム開始
            TsGameStatus.gameMode = TsGameMode.INPLAY;
        }
    };
    private _mouseDownEventListener = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            this._button.onMouseDown();
        }
    };
    private _mouseUpEventListener = (e: MouseEvent) => {
        this._button.onMouseUp();
    };
    private _mouseOutEventListener = (e: MouseEvent) => {
        this._button.onMouseOut();
    };

    public addEventListener(): void {
        this._canvas.addEventListener('click', this._clickEventListener);
        this._canvas.addEventListener('mousedown', this._mouseDownEventListener);
        this._canvas.addEventListener('mouseup', this._mouseUpEventListener);
        this._canvas.addEventListener('mouseout', this._mouseOutEventListener);
    }

    public removeEventListener(): void {
        this._canvas.removeEventListener('click', this._clickEventListener);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventListener);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventListener);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventListener);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        if (this._canvas.width < this._canvas.height) {
            // 縦長の場合
            const excess = (Asset.images['title2'].width - this._canvas.width) / 2;
            ctx.drawImage(Asset.images['title2'], -excess, 0);
        } else {
            const excess = (Asset.images['title1'].width - this._canvas.width) / 2;
            ctx.drawImage(Asset.images['title1'], -excess, 0);
        }

        // ボタンの描画
        this._button.draw("PLAY", ctx);
    }
}