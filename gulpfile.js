var gulp = require("gulp");
var sass = require("gulp-sass");
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var utils = require('gulp-util');
var minifyJs = require("gulp-minify");

gulp.task("setup", function () {
    //Bootstrap
    gulp.src("bower_components/bootstrap/dist/css/*.min.*")
        .pipe(gulp.dest("public/stylesheets"));

    gulp.src("bower_components/bootstrap/dist/fonts/*")
        .pipe(gulp.dest("public/fonts"));

    gulp.src("bower_components/bootstrap/dist/js/bootstrap.min.js")
        .pipe(gulp.dest("public/javascripts"));

    //Phaser
    gulp.src("bower_components/phaser/build/phaser.min.js")
        .pipe(gulp.dest("public/javascripts"));

    //jQuery
    gulp.src("bower_components/jquery/dist/jquery.min.js")
        .pipe(gulp.dest("public/javascripts"));
});

gulp.task('image-min', function () {
    gulp.src('web-src/images/**/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
        .pipe(browserSync.stream());
});

gulp.task("sass", function () {
    gulp.src("web-src/stylesheets/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src("web-src/javascripts/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(minifyJs({
            ext: {
                src: '-debug.js',
                min: '.js'
            }
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("public/javascripts"));
});

gulp.task("watch", function () {
    gulp.watch('web-src/sass/**/*.scss', ['sass']);
    utils.log(utils.colors.green.bold("Watching sass..."));

    gulp.watch('web-src/images/**/*.{jpg,png}', ['image-min']);
    utils.log(utils.colors.green.bold("Watching images..."));

    gulp.watch("web-src/javascripts/**/*.js", ['js']).on('change', browserSync.reload);
    utils.log(utils.colors.green.bold("Watching javascripts..."));
});

gulp.task('browser-sync', function () {
    browserSync.init(
        {
            logConnections: true
        }
    );
});


gulp.task("default", ["setup", "watch", "browser-sync"]);