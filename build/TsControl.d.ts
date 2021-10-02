import { TsPoint } from "./TsPoint";
export declare class TsControl {
    private _x;
    private _y;
    private _w;
    private _h;
    constructor(x: number, y: number, w: number, h: number);
    get x(): number;
    set x(x: number);
    get y(): number;
    set y(y: number);
    get w(): number;
    set w(w: number);
    get h(): number;
    set h(h: number);
    testHit(point: TsPoint): boolean;
}
