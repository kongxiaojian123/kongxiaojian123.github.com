/**
 * Created by kongxiaojian on 16/11/4.
 * lalala
 * 11112121212
 */
var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

gulp.task('compass', function() {
  console.log(22);
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './stylesheets',
      sass: './sass'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default',['compass'], function() {
  // 将你的默认的任务代码放在这
});