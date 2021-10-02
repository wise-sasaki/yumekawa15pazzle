export class Asset {
    private assets = [
        { type: 'image', name: 'cursor', src: '../../../img/games/15pazzle/cursor1.png' },
        { type: 'image', name: 'title1', src: '../../../img/games/15pazzle/title_670x500.png' },
        { type: 'image', name: 'title2', src: '../../../img/games/15pazzle/title_400x500.png' },
        { type: 'se', name: 'shakin', src: '../../../se/games/15pazzle/shakin.mp3' },
        { type: 'se', name: 'papa', src: '../../../se/games/15pazzle/papa.mp3' },
        { type: 'se', name: 'pyui', src: '../../../se/games/15pazzle/pyui.mp3' },
        { type: 'se', name: 'zyan', src: '../../../se/games/15pazzle/zyan.mp3' },
        { type: 'se', name: 'popiropan', src: '../../../se/games/15pazzle/popiropan.mp3' },
    ]
    public static images: { [key: string]: HTMLImageElement } = {};
    public static soundEffects: { [key: string]: HTMLAudioElement } = {};
    private totalCount = this.assets.length;
    private loadCount = 0;
    constructor() { }
    public loadAssets(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.assets.forEach((asset) => {
                switch (asset.type) {
                    case 'image':
                        const image = new Image();
                        image.src = asset.src;
                        image.onload = () => {
                            Asset.images[asset.name] = image;
                            if (this.isComplete()) {
                                resolve();
                            }
                        }
                        break;
                    case 'se':
                        const audio = new Audio();
                        audio.src = asset.src;
                        audio.preload = "none";
                        audio.load();
                        audio.oncanplay = () => {
                            Asset.soundEffects[asset.name] = audio;
                            if (this.isComplete()) {
                                resolve();
                            }
                        }
                        break;
                }
            });
        });
    }
    private isComplete(): boolean {
        this.loadCount++;
        if (this.loadCount >= this.totalCount) {
            return true;
        }
        return false;
    }
}