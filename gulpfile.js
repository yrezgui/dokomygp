var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var concat      = require('gulp-concat');
var sass        = require('gulp-ruby-sass');

gulp.task('script', function() {
  gulp.src('src/scripts/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('style', function () {
  return gulp.src('src/styles/main.scss')
              .pipe(sass())
              .on('error', function (err) { console.log(err.message); })
              .pipe(gulp.dest('dist/css'));
});

gulp.task('template', function() {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['script', 'style', 'template']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['template']);
  gulp.watch('src/**/*.scss', ['style']);
  gulp.watch('src/**/*.js',   ['script']);
});