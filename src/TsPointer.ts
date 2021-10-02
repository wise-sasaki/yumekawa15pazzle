export class TsPointer {
    private _x: number = 0;
    private _y: number = 0;
    private _r1: number = 8;
    private _r2: number = 0;
    private _expand: boolean = false;
    private _move: number = 0;
    private _animationCount: number = 1;
    constructor() {}

    public onClick(x: number, y: number): void {
        this._x = x;
        this._y = y;
        this._expand = true;
        this._move = 0;
    }
    public draw(ctx: CanvasRenderingContext2D): void {
        if (this._expand) {
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r1 + this._move, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(this._x, this._y, this._r2 + this._move, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
            ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
            ctx.lineWidth = 1;
            ctx.stroke();

            this._move += this._animationCount;
            if (this._move >= (this._r1 * 3)) {
                this._expand = false;
            }
        }
    }
}