import { Asset } from "./Asset";
import { TsPoint } from "./TsPoint";
import { TsPanel } from "./TsPanel";
import { TsTimer } from "./TsTimer";
import { TsGameStatus } from "./TsGameStatus";
import { TsGameMode } from "./TsGameMode";
/**
 * パズル画面クラス
 */
export class TsPazzle {
    /** canvas */
    private _canvas: HTMLCanvasElement;
    /** 正解のパネル順序配列 */
    private readonly _defaultPanels: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", ""];
    /** 現在のパネル順序配列 */
    private _panels: string[] = [];
    /** パネルクラス */
    private _items: TsPanel[] = [];
    /** タイマー表示クラス */
    private _timer: TsTimer;
    /** 空パネル位置 */
    private _blank: number = 15;

    /** コンストラクタ */
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._panels = Array.from(this._defaultPanels);
        this._createPanel();
        this._timer = new TsTimer(canvas.width - 10, 20, 100, 30);
    }

    /** clickイベントハンドラー */
    private _clickEventHandler = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].testHit(point)) {
                if (this._items[i].bangou !== "") {
                    Asset.soundEffects['pyui'].volume = TsGameStatus.masterVolume;
                    Asset.soundEffects['pyui'].play();
                    const toReplaceNum = this._changePanel(i);
                    const target = this._rowChecker(toReplaceNum);
                    for (let j = 0; j < target.length; j++) {
                        // １行揃った場合
                        this._items[target[j]].flashFlg = true;
                    }
                    if (target.length > 0) {
                        // １行揃った場合
                        Asset.soundEffects['popiropan'].volume = TsGameStatus.masterVolume;
                        Asset.soundEffects['popiropan'].play();
                    }
                    if (this._isFinish()) {
                        // パズルが完成した場合
                        TsGameStatus.gameMode = TsGameMode.RESULT;
                        TsGameStatus.totalTime = this._timer.time;
                        break;
                    }
                }
                break;
            }
        }
    };
    /** mousedownイベントハンドラー */
    private _mouseDownEventHandler = (e: MouseEvent) => {
        const rect = this._canvas.getBoundingClientRect();
        const point = new TsPoint(e.clientX - rect.left - 5, e.clientY - rect.top - 5);
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].testHit(point)) {
                if (this._items[i].bangou !== "") {
                    this._items[i].onMouseDown();
                }
            }
        }
    };
    /** mouseupイベントハンドラー */
    private _mouseUpEventHandler = (e: MouseEvent) => {
        for (let i = 0; i < this._items.length; i++) {
            this._items[i].onMouseUp();
        }
    };
    /** mouseupイベントハンドラー */
    private _mouseOutEventHandler = (e: MouseEvent) => {
        for (let i = 0; i < this._items.length; i++) {
            this._items[i].onMouseUp();
        }
    };

    /** イベントハンドラー登録処理 */
    public addEventListener(): void {
        this._canvas.addEventListener('click', this._clickEventHandler);
        this._canvas.addEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.addEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.addEventListener('mouseout', this._mouseOutEventHandler);
    }

    /** イベントハンドラー削除処理 */
    public removeEventListener(): void {
        this._canvas.removeEventListener('click', this._clickEventHandler);
        this._canvas.removeEventListener('mousedown', this._mouseDownEventHandler);
        this._canvas.removeEventListener('mouseup', this._mouseUpEventHandler);
        this._canvas.removeEventListener('mouseout', this._mouseOutEventHandler);
    }

    /**
     * パネル作成処理
     */
    private _createPanel(): void {
        const center = this._canvas.width / 2;
        let panelSize = this._canvas.width / 8;
        if (this._canvas.width < this._canvas.height) {
            panelSize = this._canvas.width / 5;
        }
        const space = 5;
        const x1 = center - (panelSize * 2 + space * 3);
        const x2 = center - (panelSize + space);
        const x3 = center + space;
        const x4 = center + (panelSize + space * 3);
        const marginTop = 50;
        const y1 = marginTop;
        const y2 = marginTop + (panelSize + space * 2);
        const y3 = marginTop + (panelSize + space * 2) * 2;
        const y4 = marginTop + (panelSize + space * 2) * 3;

        const panel1 = new TsPanel(x1, y1, panelSize, panelSize, 10);
        this._items.push(panel1);
        const panel2 = new TsPanel(x2, y1, panelSize, panelSize, 10);
        this._items.push(panel2);
        const panel3 = new TsPanel(x3, y1, panelSize, panelSize, 10);
        this._items.push(panel3);
        const panel4 = new TsPanel(x4, y1, panelSize, panelSize, 10);
        this._items.push(panel4);

        const panel5 = new TsPanel(x1, y2, panelSize, panelSize, 10);
        this._items.push(panel5);
        const panel6 = new TsPanel(x2, y2, panelSize, panelSize, 10);
        this._items.push(panel6);
        const panel7 = new TsPanel(x3, y2, panelSize, panelSize, 10);
        this._items.push(panel7);
        const panel8 = new TsPanel(x4, y2, panelSize, panelSize, 10);
        this._items.push(panel8);

        const panel9 = new TsPanel(x1, y3, panelSize, panelSize, 10);
        this._items.push(panel9);
        const panel10 = new TsPanel(x2, y3, panelSize, panelSize, 10);
        this._items.push(panel10);
        const panel11 = new TsPanel(x3, y3, panelSize, panelSize, 10);
        this._items.push(panel11);
        const panel12 = new TsPanel(x4, y3, panelSize, panelSize, 10);
        this._items.push(panel12);

        const panel13 = new TsPanel(x1, y4, panelSize, panelSize, 10);
        this._items.push(panel13);
        const panel14 = new TsPanel(x2, y4, panelSize, panelSize, 10);
        this._items.push(panel14);
        const panel15 = new TsPanel(x3, y4, panelSize, panelSize, 10);
        this._items.push(panel15);
        const panel16 = new TsPanel(x4, y4, panelSize, panelSize, 10);
        this._items.push(panel16);
    }

    /**
     * 描画処理
     * @param ctx 2D
     */
    public render(ctx: CanvasRenderingContext2D): void {
        this._items.forEach((_, i) => {
            this._items[i].draw(ctx, this._panels[i], this._isMatchPanel(this._defaultPanels[i], this._panels[i]));
        });
        // タイマーの更新
        if (TsGameStatus.gameMode === TsGameMode.INPLAY) {
            const time = (Date.now() - TsGameStatus.startTime.getTime()) / 1000;
            this._timer.draw(time, ctx);
        } else {
            this._timer.draw(this._timer.time, ctx);
        }

    }

    /**
     * パネル変更判定処理
     * @param select 選択パネル
     * @returns 変更したパネル番号
     */
    private _changePanel(select: number): number {
        if (select === 0) {
            if (1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (4 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 1 || select === 2) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 3) {
            if (2 === this._blank) {
                return this._replace(select, this._blank);
            } else if (7 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 4 || select === 8) {
            if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 5 || select === 6 || select === 9 || select === 10) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 7 || select === 11) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 4 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 12) {
            if (8 === this._blank) {
                return this._replace(select, this._blank);
            } else if (13 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 13 || select === 14) {
            if (select - 1 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select - 4 === this._blank) {
                return this._replace(select, this._blank);
            } else if (select + 1 === this._blank) {
                return this._replace(select, this._blank);
            }
        } else if (select === 15) {
            if (14 === this._blank) {
                return this._replace(select, this._blank);
            } else if (11 === this._blank) {
                return this._replace(select, this._blank);
            }
        }
        return -1;
    }

    /**
     * パネル入れ替え処理
     * @param select 選択パネル
     * @param blank 空パネル
     * @returns 
     */
    private _replace(select: number, blank: number): number {
        const tmp = this._panels[select];
        this._panels[select] = "";
        this._blank = select;
        this._panels[blank] = tmp;
        return blank;
    }

    /**
     * パネルのシャッフル処理
     */
    public shufflePanel(): void {
        const difficulty = 1000;
        for (let i = 0; i < difficulty; i++) {
            const random = Math.floor(Math.random() * 15);
            this._changePanel(random);
        }
    }

    /**
     * 行の揃った判定処理
     * @param replaceNum 入れ替えたパネル
     * @returns 
     */
    private _rowChecker(replaceNum: number): number[] {
        if (replaceNum < 0) {
            return [];
        }
        switch (replaceNum) {
            case 0:
            case 1:
            case 2:
            case 3:
                for (let i = 0; i < 4; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [0, 1, 2, 3];
            case 4:
            case 5:
            case 6:
            case 7:
                for (let i = 4; i < 8; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [4, 5, 6, 7];
            case 8:
            case 9:
            case 10:
            case 11:
                for (let i = 8; i < 12; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [8, 9, 10, 11];
            case 12:
            case 13:
            case 14:
            case 15:
                for (let i = 12; i < 16; i++) {
                    if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                        return [];
                    }
                }
                return [12, 13, 14, 15];
        }
        return [];
    }

    /**
     * パズルの完成判定処理
     * @returns true:完成,false:未完成
     */
    private _isFinish(): boolean {
        for (let i = 0; i < this._panels.length; i++) {
            if (!this._isMatchPanel(this._defaultPanels[i], this._panels[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * パネル順序配列の比較処理
     * @param panel1 パネル順序配列
     * @param panel2 パネル順序配列
     * @returns true:一致,false:不一致
     */
    private _isMatchPanel(panel1: string, panel2: string): boolean {
        if (panel1 !== panel2) {
            return false;
        }
        return true;
    }
}