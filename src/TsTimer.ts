import { TsControl } from "./TsControl";
/**
 * タイマー表示クラス
 */
export class TsTimer extends TsControl {
    /** タイマー */
    public time: number = 0;

    /** コンストラクタ */
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }

    /**
     * 描画処理
     * @param num 時間
     * @param ctx 2D
     */
    public draw(num: number, ctx: CanvasRenderingContext2D): void {
        this.time = num;
        ctx.font = `bold 30px serif`;
        ctx.fillStyle = "#ff7fbf";
        ctx.textAlign = "right";
        ctx.fillText(num.toFixed(3), this.x, this.y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ff7fbf";
        ctx.strokeText(num.toFixed(3), this.x, this.y);
    }
}