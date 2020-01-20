const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

if (util.env.production) {
    gulp.task('default', gulp.series('deps', 'app'));
} else {
    gulp.task('default', gulp.series('deps','app','server'))
}
