var gulp = require("gulp"),
    babel = require("gulp-babel"),
    watch = require("gulp-watch");

gulp.task("babeljs", function() {
    return gulp.src("public/javascripts/produce/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/javascripts/dist"));
});
gulp.task("watch", function() {
    gulp.watch('public/javascripts/produce/*.js', ['babeljs']);
})

gulp.task('default', ['watch', 'babeljs']);