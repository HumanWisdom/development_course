const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

// Define the CSS minify task for each folder
function minifyCSS() {
    return gulp.src('assets-min/css/*.css')  // Process CSS in 'assets-min/css/'
        .pipe(cleanCSS({ compatibility: 'ie8' }))  // Minify CSS
        .pipe(gulp.dest('assets-min/css/'))  // Output to 'assets-min/css/'

        .pipe(gulp.src('assets-min/font/*.css'))  // Process CSS in 'assets-min/font/'
        .pipe(cleanCSS({ compatibility: 'ie8' }))  // Minify CSS
        .pipe(gulp.dest('assets-min/font/'));  // Output to 'assets-min/font/'
}

// Use gulp.series to ensure task completion
gulp.task('minify-css', minifyCSS);

// Default task (run when you execute `gulp` without any task name)
gulp.task('default', gulp.series('minify-css'));
