export declare class TsEndScreen {
    private _canvas;
    private _button;
    private _move;
    private _animationCount;
    private _delay;
    private _delayCount;
    constructor(canvas: HTMLCanvasElement);
    reset(): void;
    private _clickEventListener;
    private _mouseDownEventListener;
    private _mouseUpEventListener;
    private _mouseOutEventListener;
    addEventListener(): void;
    removeEventListener(): void;
    render(ctx: CanvasRenderingContext2D): void;
}
