import { TsControl } from "./TsControl";
import { TsGameStatus } from "./TsGameStatus";
export class TsSlider extends TsControl {
    private max: number;
    private min: number;
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.max = x + 30;
        this.min = x - 30;
    }
    public drag(x: number) {
        if (this.min < x && this.max > x) {
            this.x = x;
            const value = (this.max - this.min) / 10;
            const volume = Math.floor(((x - this.min) / value * 0.1) * 100) / 100;
            TsGameStatus.masterVolume = volume;
        }
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ff7fff";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}