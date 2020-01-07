const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('watch', () => {
    gulp.watch('app/**/*.html', gulp.parallel('app.html'));
    gulp.watch('app/**/*.css', gulp.parallel('app.css'));
    gulp.watch('app/**/*.js', gulp.parallel('app.js'));
    gulp.watch('app/**/*.*', gulp.parallel('app.assets'));
});

gulp.task('start.server', () => {
    return gulp.src('public')
        .pipe(webserver({
            livereload: true,
            port: 3000,
            open: true
        }));
});

gulp.task('server', gulp.series('start.server', 'watch'));






