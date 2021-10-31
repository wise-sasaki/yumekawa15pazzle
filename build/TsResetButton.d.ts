export declare class TsResetButton {
    private _canvas;
    private _button;
    constructor(canvas: HTMLCanvasElement);
    private _clickEventHandler;
    private _mouseDownEventHandler;
    private _mouseUpEventHandler;
    private _mouseOutEventHandler;
    private _addEventListener;
    render(ctx: CanvasRenderingContext2D): void;
}
