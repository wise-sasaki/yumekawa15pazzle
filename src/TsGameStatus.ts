import { TsGameMode } from "./TsGameMode";
import { TsPazzle } from "./TsPazzle";
import { TsCursor } from "./TsCursor";
import { TsTitleScreen } from "./TsTitleScreen";
import { TsResultScreen } from "./TsResultScreen";
import { TsVolume } from "./TsVolume";
import { TsResetButton } from "./TsResetButton";
/**
 * ゲームステータスクラス
 */
export class TsGameStatus {
    /** ゲームモード */
    private static _gameMode: TsGameMode | null = null;
    /** クリアタイム開始時間 */
    public static startTime: Date;
    /** クリアタイム */
    public static totalTime: number;
    /** パズルクラス */
    public static pazzle: TsPazzle | null = null;
    /** 指先カーソルクラス */
    public static cursor: TsCursor | null = null;
    /** タイトル画面クラス */
    public static titleScreen: TsTitleScreen | null = null;
    /** リザルト画面クラス */
    public static resultScreen: TsResultScreen | null = null;
    /** ボリュームクラス */
    public static volume: TsVolume | null = null;
    /** リセットボタンクラス */
    public static reset: TsResetButton | null = null;
    /** マスターボリューム(音量) */
    public static masterVolume: number = 0.1;

    static get gameMode(): TsGameMode | null {
        return TsGameStatus._gameMode;
    }
    static set gameMode(gameMode) {
        // ゲームモードの切り替え
        switch (gameMode) {
            case TsGameMode.TITLE:
                // タイトル画面
                TsGameStatus.titleScreen?.addEventListener();
                TsGameStatus.resultScreen?.removeEventListener();
                break;
            case TsGameMode.INPLAY:
                // プレイ中画面
                TsGameStatus.startTime = new Date();
                TsGameStatus.titleScreen?.removeEventListener();
                TsGameStatus.pazzle?.addEventListener();
                TsGameStatus.pazzle?.shufflePanel();
                break;
            case TsGameMode.RESULT:
                // リザルト画面
                TsGameStatus.pazzle?.removeEventListener();
                TsGameStatus.resultScreen?.addEventListener();
                break;
        }
        TsGameStatus._gameMode = gameMode;
    }
}