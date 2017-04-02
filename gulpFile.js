var gulp = require("gulp");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var cp = require("child_process");
var stylus = require("gulp-stylus");
var coffeeify = require("coffeeify");
var browserify = require("browserify");
var babel = require("babelify");
var concat = require("gulp-concat");
var util = require("gulp-util");


var paths = {
  development: "./development",
  elm: "./source/**/*.elm",
  css: "./source/**/*.styl",
  js: "./source/**/*.jsx"
};


gulp.task("js", function() {
  var b = browserify("./source/app.jsx", {
    debug: true,
    cache: {},
    extensions: [".jsx"]
  }).transform("babelify", {presets: ["es2015", "react"]})


  return b
    .bundle()
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(gulp.dest(paths.development));
});

gulp.task("stylus", function() {
  return gulp
    .src([ "./source/Styles/main.styl", paths.css ])
    .pipe(concat("style.styl"))
    .pipe(stylus())
    .pipe(gulp.dest(paths.development));
});


gulp.task("server", function() {
  return require("./server/app");
});


gulp.watch(paths.elm, ["elm"]);
gulp.watch(paths.css, ["stylus"]);
gulp.watch(paths.js, ["js"]);
gulp.watch("development/index.html", ["server"])


gulp.task("default", ["js", "stylus", "server"]);
