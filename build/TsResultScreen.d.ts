export declare class TsResultScreen {
    private _canvas;
    private _button;
    private _move;
    private readonly _animationCount;
    private _delay;
    private _delayCount;
    constructor(canvas: HTMLCanvasElement);
    reset(): void;
    private _clickEventHandler;
    private _mouseDownEventHandler;
    private _mouseUpEventHandler;
    private _mouseOutEventHandler;
    addEventListener(): void;
    removeEventListener(): void;
    render(ctx: CanvasRenderingContext2D): void;
}
