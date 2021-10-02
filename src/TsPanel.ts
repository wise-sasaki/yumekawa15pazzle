import { TsControl } from "./TsControl";
export class TsPanel extends TsControl {
    private _r: number;
    private _bangou: string = "";
    private _active: boolean;
    private _flashFlg: boolean = false;
    private _repeatCount: number = 0;
    private _color: number = 0;
    private _lapelFlg: boolean = false;
    private _animationCount: number = 2;
    constructor(x: number, y: number, w: number, h: number, r: number) {
        super(x, y, w, h);
        this._r = r;
        this._active = false;
    }

    get bangou() {
        return this._bangou;
    }
    set bangou(num: string) {
        this._bangou = num;
    }

    get flashFlg() {
        return this._flashFlg;
    }
    set flashFlg(flg: boolean) {
        this._flashFlg = flg;
    }

    public draw(ctx: CanvasRenderingContext2D, panel: string, matchFlg: boolean): void {
        if (panel === "") {
            // 空パネルの場合は描画しない
            return;
        }
        // パネルの描画
        const r_color = ctx.createRadialGradient(this.x + this.w / 2, this.y + this.h / 2, 0, this.x + this.w / 2, this.y + this.h / 2, this.h / 2);
        if (this._active) {
            // r_color.addColorStop(0, "#7f7fff");
            // r_color.addColorStop(1, "#ff7fff");
            r_color.addColorStop(0, `hsl(240,100%,${74 + this._color}%)`);
            r_color.addColorStop(1, `hsl(300,100%,${74 + this._color}%)`);
        } else {
            r_color.addColorStop(0, `hsl(300,100%,${74 + this._color}%)`);
            r_color.addColorStop(1, `hsl(240,100%,${74 + this._color}%)`);
        }
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = r_color;
        ctx.fillStyle = r_color;
        ctx.moveTo(this.x, this.y + this._r);
        ctx.arc(this.x + this._r, this.y + this.h - this._r, this._r, Math.PI, Math.PI * 0.5, true);
        ctx.arc(this.x + this.w - this._r, this.y + this.h - this._r, this._r, Math.PI * 0.5, 0, true);
        ctx.arc(this.x + this.w - this._r, this.y + this._r, this._r, 0, Math.PI * 1.5, true);
        ctx.arc(this.x + this._r, this.y + this._r, this._r, Math.PI * 1.5, Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        // パネルの枠
        const x2 = this.x + 3;
        const y2 = this.y + 3;
        const w2 = this.w - 6;
        const h2 = this.h - 6;
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#e0c1ff";
        ctx.moveTo(x2, y2 + this._r);
        ctx.arc(x2 + this._r, y2 + h2 - this._r, this._r, Math.PI, Math.PI * 0.5, true);
        ctx.arc(x2 + w2 - this._r, y2 + h2 - this._r, this._r, Math.PI * 0.5, 0, true);
        ctx.arc(x2 + w2 - this._r, y2 + this._r, this._r, 0, Math.PI * 1.5, true);
        ctx.arc(x2 + this._r, y2 + this._r, this._r, Math.PI * 1.5, Math.PI, true);
        ctx.closePath();
        ctx.stroke();
        // 文字の描画
        ctx.font = `bold ${this.w - 25}px serif`;
        ctx.lineWidth = 1;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (matchFlg) {
            // パネルの位置が正解の場合、文字色を変更する
            ctx.fillStyle = "#fff";
            ctx.fillText(panel, this.x + this.w / 2, this.y + this.h / 2);
        } else {
            ctx.strokeStyle = "#fff";
            ctx.strokeText(panel, this.x + this.w / 2, this.y + this.h / 2);
        }
        // 行が揃ったときに明滅するアニメーションを付加する
        if (this._flashFlg && this._repeatCount < 3) {
            if (this._color > 10) {
                this._lapelFlg = true;
            } else if(this._color < 0) {
                this._lapelFlg = false;
                // 1回の明滅ごとにカウントを増やす
                this._repeatCount++;
            }
            if (this._lapelFlg) {
                this._color -= this._animationCount;
            } else {
                this._color += this._animationCount;      
            }
        } else {
            this._flashFlg = false;
            this._repeatCount = 0;
        }
        // 番号の設定
        this.bangou = panel;
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