export declare class TsTitleScreen {
    private _canvas;
    private _button;
    constructor(canvas: HTMLCanvasElement);
    private _clickEventHandler;
    private _mouseDownEventHandler;
    private _mouseUpEventHandler;
    private _mouseOutEventHandler;
    addEventListener(): void;
    removeEventListener(): void;
    render(ctx: CanvasRenderingContext2D): void;
}
