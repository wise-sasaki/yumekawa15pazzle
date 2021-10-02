export declare class TsCursor {
    private _canvas;
    private _x;
    private _y;
    private _pointer;
    constructor(canvas: HTMLCanvasElement);
    private _addEventListener;
    render(ctx: CanvasRenderingContext2D): void;
}
