var gulp = require('gulp');
var postcss = require('gulp-postcss');

//Plugins
var imagemin = require('gulp-imagemin');
var cssnano = require('cssnano');
var cssnext = require('postcss-cssnext');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var minify = require('gulp-minify');

// Process CSS
gulp.task('css', function() {
  var processors = [cssnext({browsers: ['last 3 versions', 'Firefox < 27']}),
                    cssnano
                  ];

  return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./'));
});

//Process JavaScript
gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('./'))
});

//Minimise images
gulp.task('imagemin', function() {
  gulp.src(['src/img/*', 'src/img/*/*'])
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: true}]})
  ]))
  .pipe(gulp.dest('img'))
});

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch('src/*.css', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});

// Browserify for using Node.js in the browser
var bundle = browserify('./src/js/app.js').bundle();

// Default task
gulp.task('default', function() {
  gulp.watch('./src/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['js']);
});
