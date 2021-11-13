# snaomix.github.io

webpackを使ってGitHub Pagesへウェブサイトをデプロイするちょっとしたデモ。
webpackの[getting started]チュートリアルにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* webpack v5以降を使用しています
* Node.js v16.0.0以降 ＋dart-sassを使用
* [fibers](https://github.com/laverdet/node-fibers) はNode.js v16.0.0以降と互換性がないため使用していません🙅‍

## how to start

はじめにソースコードをclone:
```bash
git clone git@github.com:snaomix/snaomix.github.io.git
```

nodeパッケージをインストール
```bash
cd snaomix.github.io
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

## more info

* [GitHub Pagesのドキュメンテーション](https://docs.github.com/ja/pages) … docs.github.com
* [GitHub Pages examples](https://github.com/collections/github-pages-examples) … github.com
