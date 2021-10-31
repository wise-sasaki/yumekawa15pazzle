export declare class TsCursor {
    private _canvas;
    private _x;
    private _y;
    private _clickEffect;
    constructor(canvas: HTMLCanvasElement);
    private _addEventListener;
    render(ctx: CanvasRenderingContext2D): void;
}
