# yumekawa15pazzle
ランダムに配置された１５枚のパネルを左上から右下へ番号順に並び変えるパズルゲームです。
HTMLのcanvas要素を使って作成しています。
ゲーム作成のノウハウがなかったので、ほとんど我流でフレームワークを使っていません。そのため、クラス設計がだいぶ荒いです。
仕組みとしては、requestAnimationFrame関数を使ってフレーム単位で画面を再描画しており、その描画に合わせて必要な部品を表示している感じです。
