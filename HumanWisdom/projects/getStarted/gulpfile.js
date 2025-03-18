const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

function minifyCss() {
    return gulp.src('assets-min/css/*.css')  
        .pipe(cleanCSS({ compatibility: 'ie8' }))  
        .pipe(gulp.dest('assets-min/css/'))  

        .pipe(gulp.src('assets-min/font/*.css'))  
        .pipe(cleanCSS({ compatibility: 'ie8' }))  
        .pipe(gulp.dest('assets-min/font/'))  

        .pipe(gulp.src('assets/css/*.css'))  
        .pipe(cleanCSS({ compatibility: 'ie8' })) 
        .pipe(gulp.dest('assets/css/'))
}

function minifyJS() {
    return gulp.src('scripts/*.js')
       .pipe(uglify()) 
       .pipe(gulp.dest('scripts/'))
       
       .pipe(gulp.src('assets/js/*.js')) 
       .pipe(uglify()) 
       .pipe(gulp.dest('assets/js/'))
}


// Use gulp.series to ensure task completion
gulp.task('minify-css', minifyCss);
gulp.task('minify-js', minifyJS);

gulp.task('default', gulp.series('minify-css','minify-js'));
