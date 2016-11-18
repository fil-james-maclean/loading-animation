var gulp          = require( 'gulp' );
var sass          = require( 'gulp-sass' );
var autoprefixer  = require( 'gulp-autoprefixer' );
var browserSync   = require( 'browser-sync' ).create();
var concat        = require( 'gulp-concat' );


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe( sass() )
  .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }) )
  .pipe(gulp.dest('app/css') )
  .pipe(browserSync.reload({
    stream: true
  }) )
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('vendor-js', function(){
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/progressbar.js/dist/progressbar.js'
  ])
  .pipe( concat( 'vendor.js' ) )
  .pipe( gulp.dest( 'app/js' ) );
});

gulp.task('watch', function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('default', ['sass', 'vendor-js', 'watch', 'serve']);
