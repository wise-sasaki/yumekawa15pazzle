/**
 * クリックエフェクトクラス
 */
export class TsClickEffect {
    /** x座標 */
    private _x: number = 0;
    /** y座標 */
    private _y: number = 0;
    /** クリック箇所のエフェクト1半径(外側円) */
    private _r1: number = 8;
    /** クリック箇所のエフェクト2半径(内側円) */
    private _r2: number = 0;
    /** エフェクトの拡縮状態 */
    private _expand: boolean = false;
    /** アニメーション可変値 */
    private _move: number = 0;
    /** アニメーション量 */
    private readonly _animationCount: number = 1;

    /** コンストラクタ */
    constructor() {}

    /**
     * クリック時処理
     * @param x x座標
     * @param y y座標
     */
    public onClick(x: number, y: number): void {
        this._x = x;
        this._y = y;
        this._expand = true;
        this._move = 0;
    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        if (this._expand) {
            // 小さい円から大きい円へ拡大するアニメーションなので一度切り大きくする
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r1 + this._move, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r2 + this._move, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
            ctx.lineWidth = 1;
            ctx.stroke();

            this._move += this._animationCount;
            if (this._move >= (this._r1 * 3)) {
                this._expand = false;
            }
        }
    }
}