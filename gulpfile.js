const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('tareaSass', function(){
  gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))

});

gulp.task('default', () => {
  gulp.watch('./scss/*.scss', ['tareaSass'])
});
