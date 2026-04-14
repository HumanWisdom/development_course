const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

function minifyCssAssets() {
  return gulp
    .src('assets/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('assets/css/'));
}

function minifyCssFont() {
  return gulp
    .src('assets/font/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('assets/font/'));
}

function minifyCssStyles() {
  return gulp
    .src('styles/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('styles/'));
}

function minifyScripts() {
  return gulp.src('scripts/*.js').pipe(uglify()).pipe(gulp.dest('scripts/'));
}

function minifyAssetsJs() {
  return gulp.src('assets/js/*.js').pipe(uglify()).pipe(gulp.dest('assets/js/'));
}

gulp.task(
  'minify-css',
  gulp.parallel(minifyCssAssets, minifyCssFont, minifyCssStyles)
);
gulp.task('minify-js', gulp.parallel(minifyScripts, minifyAssetsJs));

gulp.task('default', gulp.series('minify-css', 'minify-js'));
