const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('watch', () => {
    gulp.watch('app/**/*.html', gulp.parallel('app.html'));
    gulp.watch('app/**/*.css', gulp.parallel('app.css'));
    gulp.watch('app/**/*.js', gulp.parallel('app.js'));
    gulp.watch('app/**/*.*', gulp.parallel('app.assets'));
});

gulp.task('start.server', function(done) {
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    });
    gulp.watch('app/**/*').on('change', browserSync.reload);
    done();
});

// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });

gulp.task('server', gulp.series('start.server', 'watch'));






