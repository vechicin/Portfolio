let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
gulp.task('styles',async function(){
    gulp.src('styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('output'))
});

gulp.task('watch', function(){
    gulp.watch('styles.css',gulp.series('styles'));
});