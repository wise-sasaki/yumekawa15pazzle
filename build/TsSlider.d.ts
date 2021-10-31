import { TsControl } from "./TsControl";
export declare class TsSlider extends TsControl {
    private max;
    private min;
    private readonly RANGE;
    constructor(x: number, y: number, w: number, h: number);
    drag(x: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
