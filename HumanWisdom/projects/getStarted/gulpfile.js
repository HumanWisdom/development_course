// Load Gulp and the CSS minification plugin
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

// Define the CSS minify task for each folder
function minifyCSS() {
    // Process and output files from 'assets-min/css/'
    gulp.src('assets-min/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))  // Minify CSS
        .pipe(gulp.dest('assets-min/css/'));  // Output to 'assets-min/css/'

    // Process and output files from 'assets-min/font/'
    gulp.src('assets-min/font/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))  // Minify CSS
        .pipe(gulp.dest('assets-min/font/'));  // Output to 'assets-min/font/'
}

// Use gulp.series to ensure task completion
gulp.task('minify-css', minifyCSS);

// Default task (run when you execute `gulp` without any task name)
gulp.task('default', gulp.series('minify-css'));
