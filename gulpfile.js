const gulp = require('gulp');

const postcss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    cssImport = require('postcss-import'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    minify = require('cssnano');

gulp.task('css', () => {

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

gulp.task('default', ['css']);