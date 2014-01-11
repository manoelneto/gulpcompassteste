var gulp = require('gulp');
var compass = require('gulp-compass');


gulp.task('compass', function () {

	console.log('runing compass');

    gulp.src('./_scss/**/*')
        .pipe(compass({
        	css : 'css',
        	sass : '_scss'
        }))
        .pipe(gulp.dest('./css'));

});

gulp.task('default', function(){
	// gulp.run('scripts');

	gulp.watch(['_scss/**/*.scss'], function() {

		gulp.run('compass');

	});
});

gulp.run('default');

console.log('gulp runing');