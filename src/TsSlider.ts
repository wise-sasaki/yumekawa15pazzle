import { TsControl } from "./TsControl";
import { TsGameStatus } from "./TsGameStatus";
/**
 * サウンドボリュームスライダークラス
 */
export class TsSlider extends TsControl {
    /** スライダーの最大位置 */
    private max: number;
    /** スライダーの最小位置 */
    private min: number;
    /** スライダー可動範囲 */
    private readonly RANGE: number = 30;

    /** コンストラクタ */
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.max = x + this.RANGE;
        this.min = x - this.RANGE;
    }

    /**
     * スライダーのドラッグ処理
     * @param x 移動位置
     */
    public drag(x: number) {
        if (this.min < x && this.max > x) {
            this.x = x;
            const value = (this.max - this.min) / 10;
            const volume = Math.floor(((x - this.min) / value * 0.1) * 100) / 100;
            TsGameStatus.masterVolume = volume;
        }
    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ff7fff";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}