import { TsButton } from "./TsButton";
import { TsPoint } from "./TsPoint";
import { Asset } from "./Asset";
import { TsGameMode } from "./TsGameMode";
import { TsGameStatus } from "./TsGameStatus";
export class TsResetButton {
    private _canvas: HTMLCanvasElement;
    private _button: TsButton;
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        const center = this._canvas.width / 2;
        this._button = new TsButton(this._canvas.width - 200, 460, 80, 30, 0);
        this._addEventListener();
    }
    
    private _clickEventListener = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            Asset.soundEffects['papa'].volume = TsGameStatus.masterVolume;
            Asset.soundEffects['papa'].play();
            TsGameStatus.gameMode = TsGameMode.START;
        }
    };
    private _mouseDownEventListener = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        if (this._button.testHit(point)) {
            this._button.onMouseDown();
        }
    };
    private _mouseUpEventListener = (e: MouseEvent) => {
        this._button.onMouseUp();
    };
    private _mouseOutEventListener = (e: MouseEvent) => {
        this._button.onMouseOut();
    };

    private _addEventListener(): void {
        this._canvas.addEventListener('click', this._clickEventListener);
        this._canvas.addEventListener('mousedown', this._mouseDownEventListener);
        this._canvas.addEventListener('mouseup', this._mouseUpEventListener);
        this._canvas.addEventListener('mouseout', this._mouseOutEventListener);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        this._button.draw("RESET", ctx);
    }
}