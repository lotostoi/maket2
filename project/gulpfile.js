var gulp = require('gulp');
var rename = require ('gulp-rename');
var sass = require ('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

function copy(done) {
	gulp.src('./scss/**/*.scss')
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'expanded'
		}))
		.on('error', console.error.bind(console))
//        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({suffix: '.min'}))
    
		.pipe( gulp.dest('./css/') );
	done();
}

function watch() {
    gulp.watch("./scss/**/*", copy)};

gulp.task('default',watch);