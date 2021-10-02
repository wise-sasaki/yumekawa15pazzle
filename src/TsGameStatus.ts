import { TsGameMode } from "./TsGameMode";
import { TsPazzle } from "./TsPazzle";
import { TsCursor } from "./TsCursor";
import { TsStartScreen } from "./TsStartScreen";
import { TsEndScreen } from "./TsEndScreen";
import { TsVolume } from "./TsVolume";
import { TsResetButton } from "./TsResetButton";
export class TsGameStatus {
    private static _gameMode: TsGameMode | null = null;
    public static startTime: Date;
    public static totalTime: number;
    public static pazzle: TsPazzle | null = null;
    public static pointer: TsCursor | null = null;
    public static startScreen: TsStartScreen | null = null;
    public static endScreen: TsEndScreen | null = null;
    public static volume: TsVolume | null = null;
    public static reset: TsResetButton | null = null;
    public static masterVolume: number = 0.1;
    static get gameMode(): TsGameMode | null {
        return TsGameStatus._gameMode;
    }
    static set gameMode(gameMode) {
        switch (gameMode) {
            case TsGameMode.START:
                TsGameStatus.startScreen?.addEventListener();
                TsGameStatus.endScreen?.removeEventListener();
                break;
            case TsGameMode.INPLAY:
                TsGameStatus.startTime = new Date();
                TsGameStatus.startScreen?.removeEventListener();
                TsGameStatus.pazzle?.addEventListener();
                TsGameStatus.pazzle?.shufflePanel();
                break;
            case TsGameMode.RESULT:
                TsGameStatus.pazzle?.removeEventListener();
                TsGameStatus.endScreen?.addEventListener();
                break;
        }
        TsGameStatus._gameMode = gameMode;
    }
}