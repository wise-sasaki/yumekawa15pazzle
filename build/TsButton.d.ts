import { TsControl } from "./TsControl";
export declare class TsButton extends TsControl {
    private _r;
    private _active;
    private _flashFlg;
    private _color;
    private _lapelFlg;
    private _animationCount;
    constructor(x: number, y: number, w: number, h: number, r: number);
    get flashFlg(): boolean;
    set flashFlg(flg: boolean);
    draw(str: string, ctx: CanvasRenderingContext2D): void;
    onMouseDown(): void;
    onMouseUp(): void;
    onMouseOut(): void;
}
