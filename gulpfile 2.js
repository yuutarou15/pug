const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const mmq = require("gulp-merge-media-queries");
const browserSync = require("browser-sync");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const htmlBeautify =require("gulp-html-beautify");

function formatHTML() {
  return gulp.src("./src/**/*.html")
  .pipe(htmlBeautify({
    indent_size: 2,
    indent_with_tabs: true,
  }))
  .pipe(gulp.dest("./public/"))
}

function compileSass(){
  return gulp.src("./src/assets/sass/**/*.scss","!./src/assets/sass/**/_*.scss")
  .pipe(sass())
  .pipe(postcss([autoprefixer(),cssSorter()])) 
  .pipe(mmq())
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
  return gulp.src("./src/assets/img/**/*")
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
exports.build = gulp.parallel(formatHTML,minJS,compileSass,copyImage);
exports.dev = gulp.parallel(browserInit, watch);