export declare class TsResetButton {
    private _canvas;
    private _button;
    constructor(canvas: HTMLCanvasElement);
    private _clickEventListener;
    private _mouseDownEventListener;
    private _mouseUpEventListener;
    private _mouseOutEventListener;
    private _addEventListener;
    render(ctx: CanvasRenderingContext2D): void;
}
