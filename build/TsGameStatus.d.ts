import { TsGameMode } from "./TsGameMode";
import { TsPazzle } from "./TsPazzle";
import { TsCursor } from "./TsCursor";
import { TsTitleScreen } from "./TsTitleScreen";
import { TsResultScreen } from "./TsResultScreen";
import { TsVolume } from "./TsVolume";
import { TsResetButton } from "./TsResetButton";
export declare class TsGameStatus {
    private static _gameMode;
    static startTime: Date;
    static totalTime: number;
    static pazzle: TsPazzle | null;
    static cursor: TsCursor | null;
    static titleScreen: TsTitleScreen | null;
    static resultScreen: TsResultScreen | null;
    static volume: TsVolume | null;
    static reset: TsResetButton | null;
    static masterVolume: number;
    static get gameMode(): TsGameMode | null;
    static set gameMode(gameMode: TsGameMode | null);
}
