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
root/
	├ public
	│	 ├ index.html
	│	 ├ about/
	│  ├ index.html
  │  │
	│  ├ assets/
	│     ├ css/
	│     │  ├ style.css
	│		  │	 └ style.min.css
	│			│
	│	    ├ js/ 
	│		  │  ├ scriot.js 
	│		  │  └ script.min.js 
	│			│
  │     └ img/
  │
  ├ src
  │  ├ assets/
  │  │  ├ css/
  │  │  │  ├ style.css
  │  │  │	 └ style.min.css
  │  │	│
  │  │  ├ js/ 
	│  │	│  ├ scriot.js 
  │  │	│  │  └ script.min.js 
	│  │	│
  │  │  └ img/
  │  │
  │  ├ pug
  │     ├ index.pug
  │     ├ about
  │     │  └ _index.pug
  │     │
  │			├ news
  │     │  └ _index.pug
  │     │
	│			├ components 
  │        │
  │        ├ _config.pug 
	│			   │
  │        ├ component
  │        │   ├ _accordion.pug
  │        │   └ _scroll-top.pug
  │        │ 
  │        ├ gtm
  │        │  ├ _gtmBodyTag.pug
  │        │  └ _gtmHeadTag.pug
  │        │ 
  │        ├ head
  │        │  ├ _favicon.pug
  │        │  ├ _meta.pug    
  │        │  └ _stylesheet.pug
  │        │
  │        ├ layout
  │        │  ├ _footer.pug
  │        │  └ _header.pug
  │        │  
  │        ├ mixin     
  │        │  └ _picture.pug
  │        │  
  │        ├ page
  │        │  └ _default.pug
  │        │ 
  │        ├ project 
  │        │  ├ _about 
  │        │  └ _top.pug
  │        │ 
  │        ├ script 
	│		  	    └ _script.pug 
	│				  
  ├ gulpfile.js 
  ├ package-lock.json
	└ package.json			
