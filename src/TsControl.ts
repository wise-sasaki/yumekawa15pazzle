import { TsPoint } from "./TsPoint";
export class TsControl {
    private _x: number;
    private _y: number;
    private _w: number;
    private _h: number;
    constructor(x: number, y: number, w: number, h: number) {
        this._x = x;
        this._y = y;
        this._w = w;
        this._h = h;
    }
    get x() {
        return this._x;
    }
    set x(x: number) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y: number) {
        this._y = y;
    }
    get w() {
        return this._w;
    }
    set w(w: number) {
        this._w = w;
    }
    get h() {
        return this._h;
    }
    set h(h: number) {
        this._h = h;
    }
    public testHit(point: TsPoint): boolean {
        return (this._x <= point.x && point.x <= this._x + this._w) &&
            (this._y <= point.y && point.y <= this._y + this._h);
    }
}