import { TsControl } from "./TsControl";
export declare class TsPanel extends TsControl {
    private _r;
    private _bangou;
    private _active;
    private _flashFlg;
    private _repeatCount;
    private _color;
    private _lapelFlg;
    private _animationCount;
    constructor(x: number, y: number, w: number, h: number, r: number);
    get bangou(): string;
    set bangou(num: string);
    get flashFlg(): boolean;
    set flashFlg(flg: boolean);
    draw(ctx: CanvasRenderingContext2D, panel: string, matchFlg: boolean): void;
    onMouseDown(): void;
    onMouseUp(): void;
    onMouseOut(): void;
}
