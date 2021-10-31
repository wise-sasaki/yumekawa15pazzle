import { TsButton } from "./TsButton";
import { TsPoint } from "./TsPoint";
import { Asset } from "./Asset";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
/**
 * リザルトボタンクラス
 */
export class TsResetButton {
    /** canvas */
    private _canvas: HTMLCanvasElement;
    /** 汎用ボタンクラス */
    private _button: TsButton;

    /** コンストラクタ */
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        const center = this._canvas.width / 2;
        this._button = new TsButton(this._canvas.width - 200, 460, 80, 30, 0);
        this._addEventListener();
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

    /** イベントハンドラー登録処理 */
    private _addEventListener(): void {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public render(ctx: CanvasRenderingContext2D): void {
        this._button.draw("RESET", ctx);
    }
}