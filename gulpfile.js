var gulp        = require('gulp'),
  concat        = require('gulp-concat'),
  sass          = require('gulp-sass'),
  plumber       = require('gulp-plumber'),
  uglify        = require('gulp-uglify'),
  watch         = require('gulp-watch'),
  minify_css    = require('gulp-minify-css'),
  autoprefixer  = require('gulp-autoprefixer');


gulp.task('scripts', function () {
  //main scripts
  gulp.src('./src/js/**/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('./dist/js'));

  //make 1 vendor file
  gulp.src([
    './src/vendor/js/jquery.min.js',
    './src/vendor/js/*.js'
  ])
  .pipe(plumber())
  .pipe(uglify())
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
  gulp.src('./src/sass/index.sass')
  .pipe(plumber())
  .pipe(sass({ style: 'compressed' }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(minify_css())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./dist/css'))

  //make 1 minified css for all vendor stylesheets
  gulp.src('./src/vendor/css/**/*.css')
  .pipe(plumber())
  .pipe(minify_css())
  .pipe(concat('vendor.min.css'))
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass'])
  gulp.watch('./src/js/**/*.js', ['scripts'])
});

gulp.task('default', ['watch', 'scripts', 'sass']);
