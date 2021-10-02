export declare class Asset {
    private assets;
    static images: {
        [key: string]: HTMLImageElement;
    };
    static soundEffects: {
        [key: string]: HTMLAudioElement;
    };
    private totalCount;
    private loadCount;
    constructor();
    loadAssets(): Promise<void>;
    private isComplete;
}
