const gulp = require('gulp');
gulp.task('css', () => {
const postcss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    cssImport = require('postcss-import'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    minify = require('cssnano');
    return gulp
    .src('initial/*.css')
    .pipe(sourceMaps.init())
    .pipe(postcss([
        cssImport(),
        precss(),
        autoprefixer(),
        minify(),
    ]))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('final'));
});