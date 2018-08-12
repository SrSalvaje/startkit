var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
//var browserSync = require('browser-sync').create();

//SASS
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
   /*  .pipe(browserSync.reload({
        stream: true
    })) */
});





/* gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})
 */


gulp.task('watch', function(){
        gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    //other watchers
});


//watchers 
//gulp.task('watch', ['browserSync', 'sass'], function(){

    //gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    //other watchers

//})











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

