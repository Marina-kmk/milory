'use strict';

var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('server', function () {  
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });  
});

// слежка и запуск задач 
gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', reload);
});

// Задача по-умолчанию 
gulp.task('default', ['server', 'watch']);