var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(done) {
  gulp.watch('app/scss/**/*.scss', browserSync.reload());
  gulp.watch('app/*.html', browserSync.reload());
  gulp.watch('app/js/**/*.js', browserSync.reload());  

	gulp.src('app/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('app/css'))
    done();
});

gulp.task('watch:scss', function(){
 gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
})

gulp.task('watch:html', function(){
  gulp.watch('app/*.html', gulp.series('sass')) 
})

gulp.task('watch:js', function(){
  gulp.watch('app/js/**/*.js', gulp.series('sass')); 
})



gulp.task('watch', gulp.parallel('watch:scss', 'watch:html', 'watch:js'));

gulp.task('browserSync', function(done) {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
  done();
})

gulp.task('sync',
        gulp.parallel('sass', 'browserSync', gulp.parallel('watch'))
    );








// Static Server + watching scss/html files
/* gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
}); */

// Compile sass into CSS & auto-inject into browsers
 //gulp.task('styles', function() {
   // return gulp.src('sass/**/*.scss')
       // .pipe(sass().on('error', sass.logError))
      //  .pipe(autoprefixer({
         //   browsers: ['last 2 versions'],
        //    cascade:false
      //  }))

     //   .pipe(gulp.dest('./css'))
     //   .pipe(browserSync.stream());
//});

//gulp.task('default', ['serve']); 



/////////////////////////////

//gulp.task('default', function() {
	//gulp.watch('sass/**/*.scss',['styles']); 
//});

////////

//gulp.task('styles', gulp.series(function(done) {

//gulp.src('sass/**/*.scss')
     
       
       // .pipe(gulp.dest('./css'));

//done(); })); 

