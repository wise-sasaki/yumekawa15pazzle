import { Asset } from "./Asset";
import { TsPointer } from "./TsPointer";

export class TsCursor {
    private _canvas: HTMLCanvasElement;
    private _x: number;
    private _y: number;
    private _pointer: TsPointer;
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._x = -1;
        this._y = -1;
        this._pointer = new TsPointer();
        this._addEventListener();
    }
    private _addEventListener(): void {
        this._canvas.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = this._canvas.getBoundingClientRect();
            this._x = e.clientX - rect.left - 5;
            this._y = e.clientY - rect.top - 5;
        });
        this._canvas.addEventListener('mouseout', (e: MouseEvent) => {
            this._x = -50;
            this._y = -50;
        });
        this._canvas.addEventListener('click', (e: MouseEvent) => {
            const rect = this._canvas.getBoundingClientRect();
            const x = e.clientX - rect.left - 5;
            const y = e.clientY - rect.top - 5;
            this._pointer = new TsPointer();
            this._pointer.onClick(x, y);
        });
    }
    public render(ctx: CanvasRenderingContext2D) {
        // ポイントアニメーションの描画
        this._pointer.draw(ctx);
        // カーソルの描画
        if (this._canvas.width > this._canvas.height) {
            // 横長の場合
            ctx.drawImage(Asset.images['cursor'], this._x, this._y);
        }
    }
}