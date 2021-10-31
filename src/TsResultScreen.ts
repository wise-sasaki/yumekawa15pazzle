import { TsButton } from "./TsButton";
import { TsPoint } from "./TsPoint";
import { Asset } from "./Asset";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
/**
 * リザルト画面クラス
 */
export class TsResultScreen {
    /** canvas */
    private _canvas: HTMLCanvasElement;
    /** retryボタン */
    private _button: TsButton;
    /** アニメーション可変値 */
    private _move: number = 0;
    /** アニメーション量 */
    private readonly _animationCount: number = 30;
    /** アニメーション遅延フラグ */
    private _delay: boolean = false;
    /** アニメーション遅延時間 */
    private _delayCount: number = 0;

    /** コンストラクタ */
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        const center = this._canvas.width / 2;
        this._button = new TsButton(center - 125, 280, 250, 80, 10);
        this._button.flashFlg = true;
        this._delay = true;
    }

    /**
     * リセット処理
     */
    public reset(): void {
        this._move = 0;
        this._delayCount = 0;
        this._delay = true;
    }

    /** clickイベントハンドラー */
    private _clickEventHandler = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            Asset.soundEffects['papa'].volume = TsGameStatus.masterVolume;
            Asset.soundEffects['papa'].play();
            TsGameStatus.gameMode = TsGameMode.TITLE;
        }
    }
    /** mousedownイベントハンドラー */
    private _mouseDownEventHandler = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            this._button.onMouseDown();
        }
    };
    /** mouseupイベントハンドラー */
    private _mouseUpEventHandler = (e: MouseEvent) => {
        this._button.onMouseUp();
    };
    /** mouseoutイベントハンドラー */
    private _mouseOutEventHandler = (e: MouseEvent) => {
        this._button.onMouseOut();
    };

    /**
     * イベントハンドラー登録処理
     */
    public addEventListener(): void {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    }

    /**
     * イベントハンドラー削除処理
     */
    public removeEventListener(): void {
        this._canvas.removeEventListener('click', this._clickEventHandler);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventHandler);
    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public render(ctx: CanvasRenderingContext2D): void {
        if (this._delay) {
            if (this._delayCount >= this._animationCount * 100) {
                // リザルト画面に切り替わったタイミングでは、クリアタイムの表示を出さないで遅らせたタイミングで表示させるための処理
                this._delay = false;
                Asset.soundEffects['zyan'].volume = TsGameStatus.masterVolume;
                Asset.soundEffects['zyan'].play();
            }
            this._delayCount += this._animationCount;
            return;
        }
        // 帯の描画
        ctx.fillStyle = "#99ccff";
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 2, this._move, this._canvas.height / 5 * 2);
        ctx.fillStyle = "#ff7fbf";
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 2 + 10, this._move, 10);
        ctx.fillRect(this._canvas.width - this._move, this._canvas.height / 5 * 4 - 20, this._move, 10);
        if (this._move >= this._canvas.width) {
            // 帯が全て表示されたタイミングで表示する
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