var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    watch  = require('gulp-watch');


gulp.task('scripts', function () {
  //main scripts
  gulp.src('./src/js/**/*.js')
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('./dist/js'));

  //make 1 vendor file
  gulp.src('./src/vendor/**/*.js')
  .pipe(uglify())
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
  gulp.src('./src/sass/*.sass')
  .pipe(sass({ style: 'compressed' }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass'])
  gulp.watch('./src/js/**/*.js', ['scripts'])
});

gulp.task('default', ['watch', 'scripts', 'sass']);
