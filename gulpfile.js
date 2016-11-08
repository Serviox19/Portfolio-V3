var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    watch  = require('gulp-watch');


gulp.task('scripts', function () {
  //main scripts
  gulp.src('./src/js/**/*.js')
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('./dist/js'));

  //make 1 vendor file
  gulp.src('./src/vendor/**/*.js')
  .pipe(uglify())
  .pipe(concat("vendor.js"))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
  //sass to css
});

gulp.task('watch', function () {
  //watch files and run tasks
});

gulp.task('default', ['']);
