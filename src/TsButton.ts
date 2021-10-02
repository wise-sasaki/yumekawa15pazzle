import { TsControl } from "./TsControl";
export class TsButton extends TsControl {
    private _r: number;
    private _active: boolean;
    private _flashFlg: boolean = false;
    private _color: number = 0;
    private _lapelFlg: boolean = false;
    private _animationCount: number = 0.1;
    constructor(x: number, y: number, w: number, h: number, r: number) {
        super(x, y, w, h);
        this._r = r;
        this._active = false;
    }

    get flashFlg() {
        return this._flashFlg;
    }
    set flashFlg(flg: boolean) {
        this._flashFlg = flg;
    }

    public draw(str: string, ctx: CanvasRenderingContext2D): void {
        const r_color = ctx.createLinearGradient(this.x, this.y + this.h, this.x, this.y);
        // マウスダウン時、ボタンの色を変更する
        if (this._active) {
            r_color.addColorStop(0, `hsl(300, 100%, ${74 + this._color}%)`);
            r_color.addColorStop(1, "#7f7fff");
        } else {
            r_color.addColorStop(0, "#7f7fff");
            r_color.addColorStop(1, `hsl(300, 100%, ${74 + this._color}%)`);
        }
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.fillStyle = r_color;
        ctx.strokeStyle = r_color;
        ctx.moveTo(this.x, this.y + this._r);
        ctx.arc(this.x + this._r, this.y + this.h - this._r, this._r, Math.PI, Math.PI * 0.5, true);
        ctx.arc(this.x + this.w - this._r, this.y + this.h - this._r, this._r, Math.PI * 0.5, 0, true);
        ctx.arc(this.x + this.w - this._r, this.y + this._r, this._r, 0, Math.PI * 1.5, true);
        ctx.arc(this.x + this._r, this.y + this._r, this._r, Math.PI * 1.5, Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.font = `bold ${this.h / 5 * 3}px serif`;
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(str, this.x + this.w / 2, this.y + this.h / 2);

        if (this._flashFlg) {
            // 常時ボタンが明滅するアニメーションを付加する
            if (this._color > 10) {
                this._lapelFlg = true;
            } else if (this._color < 0) {
                this._lapelFlg = false;
            }
            if (this._lapelFlg) {
                this._color -= this._animationCount;
            } else {
                this._color += this._animationCount;
            }
        }
    }
    public onMouseDown(): void {
        this._active = true;
    }
    public onMouseUp(): void {
        this._active = false;
    }
    public onMouseOut(): void {
        this._active = false;
    }
}