# snaomix.github.io

webpackを使ってGitHub Pagesへウェブサイトをデプロイするちょっとしたデモ。
webpackの[getting started]チュートリアルにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* webpack v5以降を使用しています
* Node.js v16.0.0以降 ＋dart-sassを使用
* fibersはNode.js v16.0.0以降と互換性がないため使用していません🙅‍

## how to start
gitからソースコードをcloneした後、nodeパッケージをインストール

```bash
npm install
```

ウェブサイトをビルド:
```bash
npm run build
```

ウェブサイトをdevモードで起動:
```bash
npm run start
```

[getting started]: https://webpack.js.org/guides/getting-started/
[Bootstrap]: https://getbootstrap.com/
[unsplash]: https://unsplash.com/