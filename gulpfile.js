var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var jsonminify = require('gulp-jsonminify');
var minifyHTML = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var replace = require('gulp-replace');
gulp.task('minifyHTML', function () {
  gulp.src('dist/*.html').pipe(minifyHTML({collapseWhitespace: true})).pipe(gulp.dest('gulp-dist'));
});
gulp.task('script', function () {
  gulp.src('dist/*.js')//.pipe(uglify())
    .pipe(gulp.dest('gulp-dist/'))
});
gulp.task('images', function () {
  gulp.src('dist/assets/*.*').pipe(imagemin({progressive: true})).pipe(gulp.dest('gulp-dist/assets'));
});
gulp.task('icon', function () {
  gulp.src('dist/*.ico').pipe(imagemin({progressive: true})).pipe(gulp.dest('gulp-dist/'));
});
gulp.task('css', function () {
  gulp.src('dist/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('gulp-dist/'));
});
gulp.task('minifyJson', function () {
  return gulp.src(['dist/assets/data/*.json'])
    .pipe(jsonminify())
    .pipe(gulp.dest('gulp-dist/assets/data'));
});
gulp.task('clean', function (cb) {
  del(['gulp-dist/*'], cb);
});
gulp.task('default', ['clean', 'icon', 'minifyHTML', 'script', 'css', 'images', 'minifyJson']);
