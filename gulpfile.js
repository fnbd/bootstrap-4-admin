const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');

gulp.task('build-sass', function () {
    gulp.src('src/scss/admin4bs.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-es6', function () {
    gulp.src('src/es6/admin4bs.es6')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['build-sass', 'build-es6']);

gulp.task('start', ['build'], function () {
    gulp.watch('src/scss/**/*.scss', ['build-sass']);
    gulp.watch('src/es6/**/*.es6', ['build-es6']);
});
