import { TsSlider } from "./TsSlider";
import { TsPoint } from "./TsPoint";
/**
 * 音量ボリューム表示クラス
 */
export class TsVolume {
    /** canvas */
    private _canvas: HTMLCanvasElement;
    private _slider: TsSlider;

    /** コンストラクタ */
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._slider = new TsSlider(this._canvas.width - 55, this._canvas.height - 35, 10, 20);
        this._addEventListener();
    }

    /** イベントリスナー登録処理 */
    private _addEventListener(): void {
        this._canvas.addEventListener('mousedown', (e: MouseEvent) => {
            const rect = this._canvas.getBoundingClientRect();
            const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
            if (this._slider.testHit(point)) {
                const onMouseMove = (ev: MouseEvent) => {
                    const x = ev.clientX - rect.left - 5;
                    this._slider.drag(x);
                };
                this._canvas.addEventListener('mousemove', onMouseMove);

                const onMouseUp = () => {
                    this._canvas.removeEventListener('mousemove', onMouseMove);
                    this._canvas.removeEventListener('mouseup', onMouseUp);
                };
                this._canvas.addEventListener('mouseup', onMouseUp);

                const onMouseOut = () => {
                    this._canvas.removeEventListener('mousemove', onMouseMove);
                    this._canvas.removeEventListener('mouseup', onMouseUp);
                    this._canvas.removeEventListener('mouseout', onMouseOut);
                }
                this._canvas.addEventListener('mouseout', onMouseOut);
            }
        });

    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public render(ctx: CanvasRenderingContext2D) {
        // 三角形の図形描画
        ctx.fillStyle = "#7f7fff";
        let p1 = {x:this._canvas.width - 25, y:this._canvas.height - 30};   // 上
        let p2 = {x:this._canvas.width - 80,  y:this._canvas.height - 20};  // 左
        let p3 = {x:this._canvas.width - 25, y:this._canvas.height - 20};  // 右
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);      // 始点に移動
        ctx.lineTo(p2.x, p2.y);      // 左側の頂点まで線を描く
        ctx.lineTo(p3.x, p3.y);      // 右側の頂点まで線を描く
        ctx.lineTo(p1.x, p1.y);      // 始点まで線を描く
        ctx.strokeStyle = "#7f7fff";  // 線の色
        ctx.lineWidth = 2;           // 線の太さ
        ctx.stroke();
        ctx.fillStyle = "7f7fff";    // 塗りつぶす色
        ctx.fill();                  // 塗りつぶし
        // つまみ部分の描画
        this._slider.draw(ctx);
        // 音符マークの描画
        ctx.font = `bold 30px serif`;
        ctx.fillStyle = "#7f7fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("♪", p2.x - 10, p1.y + 5);
    }
}