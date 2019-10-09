const gulp = require('gulp');
const eslint = require('gulp-eslint');

exports.default = function(){
    return gulp.src(['index.js'])
    .pipe(eslint())
    .pipe(eslint.format());
}