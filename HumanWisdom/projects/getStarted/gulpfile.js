const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

function minifyCss() {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('assets/css/'))

        .pipe(gulp.src('assets/font/*.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('assets/font/'))

        .pipe(gulp.src('assets/css/*.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('assets/css/'))

        .pipe(gulp.src('styles/*.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('assets/css/'));
}

function minifyJS() {
    return gulp.src('scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('scripts/'))

        .pipe(gulp.src('assets/js/*.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
}

function minifyVendorCss() {
    return gulp.src('assets/vendor/**/*.css', { base: '.' })
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('.'));
}

function minifyVendorJs() {
    return gulp.src([
        'assets/vendor/**/*.js',
        '!assets/vendor/**/*.min.js',
    ], { base: '.' })
        .pipe(uglify())
        .pipe(gulp.dest('.'));
}

gulp.task('minify-css', minifyCss);
gulp.task('minify-js', minifyJS);
gulp.task('minify-vendor', gulp.parallel(minifyVendorCss, minifyVendorJs));

gulp.task('default', gulp.series('minify-css', 'minify-js'));
