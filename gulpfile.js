var gulp = require('gulp');
var postcss = require('gulp-postcss');

//Plugins
var imagemin = require('gulp-imagemin');
var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
var browserSync = require('browser-sync');

// Process CSS
gulp.task('css', function() {
  var processors = [cssnext({browsers: ['last 3 versions', 'Firefox < 27']}),
                    cssnano
                  ];

  return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./'));
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch('src/*.css', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});

// Default task
gulp.task('default', function() {
  gulp.watch('./src/*.css', ['css']);
});
