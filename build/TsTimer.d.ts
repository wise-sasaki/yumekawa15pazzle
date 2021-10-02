import { TsControl } from "./TsControl";
export declare class TsTimer extends TsControl {
    time: number;
    constructor(x: number, y: number, w: number, h: number);
    draw(num: number, ctx: CanvasRenderingContext2D): void;
}
