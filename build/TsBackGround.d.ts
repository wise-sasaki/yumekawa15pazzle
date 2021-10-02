import { TsControl } from "./TsControl";
export declare class TsBackGround extends TsControl {
    private _color1;
    private _color2;
    private _color3;
    private _color4;
    private _move;
    private _animationCount;
    constructor(x: number, y: number, w: number, h: number);
    render(ctx: CanvasRenderingContext2D): void;
}
