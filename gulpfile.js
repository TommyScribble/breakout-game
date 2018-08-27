var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    shortColor = require('postcss-short-color');

gulp.task('css', function() {
    return gulp.src('initial/*.css')
    .pipe(postcss([shortColor]))
    .pipe(gulp.dest('final'));
})