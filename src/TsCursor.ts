import { Asset } from "./Asset";
import { TsClickEffect } from "./TsClickEffect";
/**
 * 指先カーソルクラス
 */
export class TsCursor {
    /** canvas */
    private _canvas: HTMLCanvasElement;
    /** x座標 */
    private _x: number;
    /** y座標 */
    private _y: number;
    /** クリックエフェクトクラス */
    private _clickEffect: TsClickEffect;

    /** コンストラクタ */
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._x = -1;
        this._y = -1;
        this._clickEffect = new TsClickEffect();
        this._addEventListener();
    }

    /**
     * イベントハンドラー登録処理
     */
    private _addEventListener(): void {
        this._canvas.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = this._canvas.getBoundingClientRect();
            this._x = e.clientX - rect.left - 5;
            this._y = e.clientY - rect.top - 5;
        });
        this._canvas.addEventListener('mouseout', (e: MouseEvent) => {
            this._x = -50;
            this._y = -50;
        });
        this._canvas.addEventListener('click', (e: MouseEvent) => {
            const rect = this._canvas.getBoundingClientRect();
            const x = e.clientX - rect.left - 5;
            const y = e.clientY - rect.top - 5;
            this._clickEffect = new TsClickEffect();
            this._clickEffect.onClick(x, y);
        });
    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public render(ctx: CanvasRenderingContext2D) {
        // ポイントアニメーションの描画
        this._clickEffect.draw(ctx);
        // カーソルの描画
        if (this._canvas.width > this._canvas.height) {
            // 横長の場合
            ctx.drawImage(Asset.images['cursor'], this._x, this._y);
        }
    }
}