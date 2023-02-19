const gulp = require("gulp"); //Gulp
const pug = require("gulp-pug"); //pug
const browserSync = require("browser-sync"); //ブラウザの立ち上げと自動リロード
const sass = require("gulp-sass")(require("sass")); //sass
const postcss = require("gulp-postcss"); //css変換に必要なやつ
const autoprefixer = require("autoprefixer"); //autoprefixを適用
const cssSorter = require("css-declaration-sorter"); //CSSのプロパティを並び替える、整頓
const mmq = require("gulp-merge-media-queries"); //メディアクエリーをまとめる
const sourcemaps = require("gulp-sourcemaps"); // ソースマップ生成
const cleanCss = require("gulp-clean-css"); //cssの圧縮
const uglify = require("gulp-uglify");  //javascript の圧縮
const rename = require("gulp-rename"); //css,jsの圧縮したファイル名を変更
const htmlBeautify =require("gulp-html-beautify"); //HTMLの整形

function compilePug(done) {
  return gulp.src(["./src/pug/**/*.pug","!./src/pug/**/_*.pug"])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest("./public"));
  done();
}


function formatHTML() {
  return gulp.src("./src/**/*.html")
  .pipe(htmlBeautify({
    indent_size: 2,
    indent_with_tabs: true,
  }))
  .pipe(gulp.dest("./public/"))
}

function compileSass(){
  return gulp.src(["./src/assets/scss/**/*.scss","!./src/assets/scss/**/_*.scss"])
  .pipe(sourcemaps.init()) // ソースマップの初期化
  .pipe(sass())
  .pipe(postcss([autoprefixer(),cssSorter()])) 
  .pipe(mmq())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest("./public/assets/css/"))
  .pipe(cleanCss())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest("./public/assets/css/"))
}

function minJS() {
  return gulp.src("./src/assets/js/**/*.js")
  .pipe(gulp.dest("./public/assets/js/"))
  .pipe(uglify())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest("./public/assets/js/"))
}

function copyImage() {
  return gulp.src(srcPath.img)
  .pipe(gulp.dest("./public/assets/img/"))
}

function browserInit(done) {
  browserSync.init({
    server:{
      baseDir: "./public/"
    }
    // proxy:"http://daytra.local/"  ローカルサーバーあったら
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}
function watch() {
  gulp.watch("./src/assets/scss/**/*.scss", gulp.series(compileSass, browserReload));
  gulp.watch("./src/assets/js/**/*.js", gulp.series(minJS, browserReload));
  gulp.watch("./src/assets/img/**/*", gulp.series(copyImage, browserReload));
  gulp.watch("../**/*.php", browserReload); // PHPあったら
}

exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.minJS = minJS;
exports.formatHTML = formatHTML;
exports.compilePug = compilePug;
exports.build = gulp.parallel(formatHTML,minJS,compileSass,copyImage);
exports.dev = gulp.parallel(browserInit, watch);