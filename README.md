# はじめに
これはPugではGulp関連をまとめたものです。名前間違えてつけました。

## gulpfile
### Gulpインストール
```
npm init -y
npm instal --save-dev gulp
```

### Package.jsonがある場合の一括インストール
Package.jsonがフォルダにある場合に下記コマンドを実行すると全てインストールされる。
```
npm install 
```
package.jsonの中身を最新にアップデートする
```
npm update
```
## pug
### pugのディレクトリ
```
└── src
    ├── assets
    │   ├── img
    │   │   └── cat.jpg
    │   ├── js
    │   │   └── script.js
    │   └── scss
    │       ├── foundation
    │       │   ├── _index.scss
    │       │   └── _test.scss
    │       └── style.scss
    ├── index.html
    └── pug
        ├── about
        │   ├── bout.pug
        │   └── index.pug
        ├── components
        │   ├── _config.pug
        │   ├── component
        │   │   ├── _accordion.pug
        │   │   └── _scroll-top.pug
        │   ├── gtm
        │   │   ├── _gtmBodyTag.pug
        │   │   └── _gtmHeadTag.pug
        │   ├── head
        │   │   ├── _favicon.pug
        │   │   ├── _meta.pug
        │   │   └── _stylesheet.pug
        │   ├── layout
        │   │   ├── _footer.pug
        │   │   └── _header.pug
        │   ├── mixin
        │   │   └── _picture.pug
        │   ├── page
        │   │   ├── _default.pug
        │   │   └── _news.pug
        │   ├── project
        │   │   ├── _about.pug
        │   │   └── _top.pug
        │   └── script
        │       └── _script.pug
        ├── contact
        │   └── index.pug
        ├── index.pug
        └── news
            └── index.pug
```

## Sass
### Sass役割
#### style.scss
各ファイルを読み込む
```
@use "component";
@use "foundation";
@use "global";
@use "layout";
@use "project";
@use "utility";  
```
#### style.scss
### component 一般的によく使われるパターン
c-class名.scss
_index.scss  @use "";   格納
### foundation 　デフォルトスタイルの初期化や、基本的なスタイルを定義
_index.scss  @use "";   格納
### global　各モジュールでグローバルの変数やmixin
_index.scss  @forward "";   格納
@use "../global" as g; 読み込み
### layout　ページを構成するヘッダーやメインのコンテンツエリア
_index.scss  @use "";   格納
### project　プロジェクト固有のパターン
_index.scss  @use "";   格納
utility　わずかなスタイルの調整のための便利クラスなどを定義
_index.scss  @use "";   格納


```
└── src
    ├── assets
    │   └── scss
    │       ├── component
    │       │   ├── _c-section-title.scss
    │       │   ├── _c-text-link.scss
    │       │   └── _index.scss
    │       ├── foundation
    │       │   ├── _base.scss
    │       │   └── _index.scss
    │       ├── global
    │       │   ├── _index.scss
    │       │   ├── _mixin.scss
    │       │   └── _variables.scss
    │       ├── layout
    │       │   ├── _index.scss
    │       │   ├── _l-container.scss
    │       │   └── _l-section.scss
    │       ├── project
    │       │   ├── _index.scss
    │       ├── style.scss
    │       └── utility
    │           └── _index.scss
```
