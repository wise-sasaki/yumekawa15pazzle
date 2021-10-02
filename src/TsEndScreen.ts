import { TsButton } from "./TsButton";
import { TsPoint } from "./TsPoint";
import { Asset } from "./Asset";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
export class TsEndScreen {
    private _canvas: HTMLCanvasElement;
    private _button: TsButton;
    private _move: number = 0;
    private _animationCount: number = 30;
    private _delay: boolean = false;
    private _delayCount: number = 0;
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        const center = this._canvas.width / 2;
        this._button = new TsButton(center - 125, 280, 250, 80, 10);
        this._button.flashFlg = true;
        this._delay = true;
    }

    public reset(): void {
        this._move = 0;
        this._delayCount = 0;
        this._delay = true;
    }

    private _clickEventListener = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            Asset.soundEffects['papa'].volume = TsGameStatus.masterVolume;
            Asset.soundEffects['papa'].play();
            TsGameStatus.gameMode = TsGameMode.START;
        }
    }
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
        if (this._delay) {
            if (this._delayCount >= this._animationCount * 100) {
                this._delay = false;
                Asset.soundEffects['zyan'].volume = TsGameStatus.masterVolume;
                Asset.soundEffects['zyan'].play();
            }
            this._delayCount += this._animationCount;
            return;
        }
        // 背景の描画
        ctx.fillStyle = "#99ccff";
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 2, this._move, this._canvas.height / 5 * 2);
        ctx.fillStyle = "#ff7fbf";
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 2 + 10, this._move, 10);
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 4 - 20, this._move, 10);
        if (this._move >= this._canvas.width) {
            // クリアタイムの描画
            ctx.font = `52px Shrikhand`;
            ctx.fillStyle = "#ff7fbf";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("TIME", this._canvas.width / 2, this._canvas.height / 5 * 2);
            ctx.fillText(TsGameStatus.totalTime.toFixed(3), this._canvas.width / 2, this._canvas.height / 2);
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 3;
            ctx.strokeText("TIME", this._canvas.width / 2, this._canvas.height / 5 * 2);
            ctx.strokeText(TsGameStatus.totalTime.toFixed(3), this._canvas.width / 2, this._canvas.height / 2);
            // リトライボタンの描画
            this._button.draw("RETRY", ctx);
        }

        if (this._move <= this._canvas.width) {
            this._move += this._animationCount;
        }
    }
}