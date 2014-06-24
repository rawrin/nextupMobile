var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  return browserify('./public/js/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('js', ['browserify'] ,function() {
  return gulp.src('./public/js/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['js']);