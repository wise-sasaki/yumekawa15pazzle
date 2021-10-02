export declare class TsStartScreen {
    private _canvas;
    private _button;
    constructor(canvas: HTMLCanvasElement);
    private _clickEventListener;
    private _mouseDownEventListener;
    private _mouseUpEventListener;
    private _mouseOutEventListener;
    addEventListener(): void;
    removeEventListener(): void;
    render(ctx: CanvasRenderingContext2D): void;
}
