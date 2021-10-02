import { TsControl } from "./TsControl";
export class TsBackGround extends TsControl {
    private _color1: number = 0.25;
    private _color2: number = 0.5;
    private _color3: number = 0.75;
    private _color4: number = 0.99;
    private _move: number = 0;
    private _animationCount: number = 0.0005;
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }
    public render(ctx: CanvasRenderingContext2D): void {
        // 背景のスクロールアニメーション
        const r_color = ctx.createLinearGradient(this.x, -this.h * 4, this.x, this.h * 4);
        r_color.addColorStop(this._color1, 'hsl(180, 80%, 40%)');
        r_color.addColorStop(this._color2, 'hsl(240, 80%, 60%)');
        r_color.addColorStop(this._color3, 'hsl(300, 80%, 40%)');
        r_color.addColorStop(this._color4, 'hsl(240, 80%, 60%)');
        ctx.fillStyle = r_color;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        // 背景のシャボンアニメーション
        ctx.beginPath();
        ctx.arc(this.w / 7 * 1, this.h + 100 - this._move * 1000, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 1, this.h + 300 - this._move * 500, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 2, this.h + 100 - this._move * 500, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 3, this.h + 200 - this._move * 800, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 4, this.h + 300 - this._move * 700, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 5, this.h + 200 - this._move * 950, 50, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 5, this.h + 300 - this._move * 600, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.w / 7 * 6, this.h + 300 - this._move * 950, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        ctx.strokeStyle = 'hsla(0, 0%, 100%, 30%)';
        ctx.lineWidth = 1;
        ctx.stroke();
        

        // 背景のスクロールアニメーションカウント
        this._color1 += this._animationCount;
        this._color2 += this._animationCount;
        this._color3 += this._animationCount;
        this._color4 += this._animationCount;
        if (this._color1 >= 1) {
            this._color1 = 0;
        }
        if (this._color2 >= 1) {
            this._color2 = 0;
        }
        if (this._color3 >= 1) {
            this._color3 = 0;
        }
        if (this._color4 >= 1) {
            this._color4 = 0;
        }

        // 背景のシャボンアニメーションカウント
        this._move += this._animationCount;
        if (this._move * 1000 >= this.h * 2) {
            this._move = 0;
        }
    }
}