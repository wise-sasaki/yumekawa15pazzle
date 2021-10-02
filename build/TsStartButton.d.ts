import { TsControl } from "./TsControl";
export declare class TsStartButton extends TsControl {
    private _r;
    constructor(x: number, y: number, w: number, h: number, r: number);
    draw(ctx: CanvasRenderingContext2D): void;
    clicked(): void;
}
