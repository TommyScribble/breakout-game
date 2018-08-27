const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const postcss = require('gulp-postcss'),
    sourceMaps = require('gulp-sourcemaps'),
    cssImport = require('postcss-import'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer'),
    minify = require('cssnano');

gulp.task('reload', () => {
    browserSync.reload();
    done();
});

gulp.task('default', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch(['script.js', 'initial/*.css', 'index.html'], ['css'])
        .on('change', browserSync.reload);
});

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