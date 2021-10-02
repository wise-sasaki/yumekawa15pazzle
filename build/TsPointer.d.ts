export declare class TsPointer {
    private _x;
    private _y;
    private _r1;
    private _r2;
    private _expand;
    private _move;
    private _animationCount;
    constructor();
    onClick(x: number, y: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}
