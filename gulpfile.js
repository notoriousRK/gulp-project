const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create();



//compile sass
gulp.task('sass', () => {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
        
})

 // Move JS Files to dist/js
gulp.task('js', () => {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
        
})
// Watch Sass & Serve
gulp.task('serve', ['sass'],() => {
    
        browserSync.init({
            server: "./dist"  
        })
    
        gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/sass/*.scss'], ['sass'])
        gulp.watch("dist/*.html").on('change', browserSync.reload)
    })
    
  // Concatinate Script files and minify 
gulp.task('scripts', ()=>{
    return gulp.src(['src/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})


//Copy html file to dist folder
gulp.task('copyhtml', ()=>{
gulp.src('*.html')
    .pipe(gulp.dest('dist'))
})



// Optimize Images
gulp.task('imageMin', ()=>{
gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
   })
 
// Minify JS
gulp.task('minify', ()=>{
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
   

 // Move Fonts to dis/fonts
gulp.task('fonts', () =>{
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
  })
  
  // Move Font Awesome CSS to dist/css
  gulp.task('fa', () =>{
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('dist/css'))
  })  


gulp.task('default',['js','copyhtml','serve','scripts','imageMin','fonts','fa'])