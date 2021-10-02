export declare class TsPazzle {
    private _canvas;
    private readonly _defaultPanels;
    private _panels;
    private _items;
    private _timer;
    private _blank;
    constructor(canvas: HTMLCanvasElement);
    private _eventListener;
    private _mouseDownEventListener;
    private _mouseUpEventListener;
    private _mouseOutEventListener;
    addEventListener(): void;
    removeEventListener(): void;
    private _createPanel;
    render(ctx: CanvasRenderingContext2D): void;
    private _changePanel;
    private _replace;
    shufflePanel(): void;
    private _rowChecker;
    private _isFinish;
    private _isMatchPanel;
}
