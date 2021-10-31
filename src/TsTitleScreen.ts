import { TsButton } from "./TsButton";
import { TsPoint } from "./TsPoint";
import { Asset } from "./Asset";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
/**
 * タイトル画面クラス
 */
export class TsTitleScreen {
    /** canvas */
    private _canvas: HTMLCanvasElement;
    /** 汎用ボタンクラス */
    private _button: TsButton;

    /** コンストラクタ */
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        const center = this._canvas.width / 2;
        this._button = new TsButton(center - 100, 300, 200, 80, 10);
        this._button.flashFlg = true;
    }

    /** clickイベントハンドラー */
    private _clickEventHandler = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            Asset.soundEffects['papa'].volume = TsGameStatus.masterVolume;
            Asset.soundEffects['papa'].play();
            // ゲーム開始
            TsGameStatus.gameMode = TsGameMode.INPLAY;
        }
    };
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

    /** イベントリスナー登録処理 */
    public addEventListener(): void {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    }

    /** イベントリスナー削除処理 */
    public removeEventListener(): void {
        this._canvas.removeEventListener('click', this._clickEventHandler);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventHandler);
    }

    /** 描画処理 */
    public render(ctx: CanvasRenderingContext2D): void {
        if (this._canvas.width < this._canvas.height) {
            // 縦長の場合
            const excess = (Asset.images['title2'].width - this._canvas.width) / 2;
            ctx.drawImage(Asset.images['title2'], -excess, 0);
        } else {
            // それ以外の場合
            const excess = (Asset.images['title1'].width - this._canvas.width) / 2;
            ctx.drawImage(Asset.images['title1'], -excess, 0);
        }

        // ボタンの描画
        this._button.draw("PLAY", ctx);
    }
}