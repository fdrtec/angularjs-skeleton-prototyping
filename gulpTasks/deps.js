const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');

gulp.task('deps.js',() => {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('public/assets/js'));

});
gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(uglifycss({'uglyComments': true}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('public/assets/css'));

});
gulp.task('deps.fonts', () => {
    return gulp.src([
        'node_modules/font-awesome/fonts/*.*',
    ])
        .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('deps', gulp.series('deps.js', 'deps.css', 'deps.fonts'));

