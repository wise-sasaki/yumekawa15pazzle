import { TsControl } from "./TsControl";
export class TsTimer extends TsControl {
    public time: number = 0;
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }
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