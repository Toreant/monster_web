var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    mocha = require('gulp-mocha'),
    webpack = require('gulp-webpack'),
    clean = require('gulp-clean'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    rename = require('gulp-rename');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
    'alt',
    'react',
    'react-dom',
    'react-router',
    'underscore'
];

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */
gulp.task('vendor', function() {
    return gulp.src([
        'public/js/lib/jquery.min.js',
        'public/js/lib/bootstrap.min.js',
        'public/js/lib/bootstrap-markdown.js',
        'public/js/lib/imagesloaded.min.js',
        'public/js/lib/jquery.Jcrop.min.js',
        'public/js/lib/jquery.touchSwipe.min.js',
        'public/js/lib/sangarSlider.min.js',
        'public/js/lib/toastr.min.js',
        'public/js/lib/imgLazyload.jquery.js'
    ]).pipe(concat('vendor.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
//gulp.task('browserify-vendor', function() {
//    return browserify()
//        .require(dependencies)
//        .bundle()
//        .pipe(source('vendor.bundle.js'))
//        .pipe(streamify(uglify({ mangle: false })))
//        .pipe(gulp.dest('public/js'));
//});
//
///*
// |--------------------------------------------------------------------------
// | Compile only project files, excluding all third-party dependencies.
// |--------------------------------------------------------------------------
// */
//gulp.task('browserify', ['browserify-vendor'], function() {
//    return browserify('app/main.js')
//        .external(dependencies)
//        .transform(babelify)
//        .bundle()
//        .pipe(source('bundle.js'))
//        .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
//        .pipe(gulp.dest('public/js'));
//});
//
///*
// |--------------------------------------------------------------------------
// | Same as browserify task, but will also watch for changes and re-compile.
// |--------------------------------------------------------------------------
// */
//gulp.task('browserify-watch', ['browserify-vendor'], function() {
//    var bundler = watchify(browserify('app/main.js', watchify.args));
//    bundler.external(dependencies);
//    bundler.transform(babelify);
//    bundler.on('update', rebundle);
//    return rebundle();
//
//    function rebundle() {
//        var start = Date.now();
//        return bundler.bundle()
//            .on('error', function(err) {
//                gutil.log(gutil.colors.red(err.toString()));
//            })
//            .on('end', function() {
//                gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
//            })
//            .pipe(source('bundle.js'))
//            .pipe(gulp.dest('public/js/'));
//    }
//});

/*
 | build the app
 */
gulp.task('webpack',function() {
    return gulp.src(['app/main.js'])
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulpif(!production , uglify({mangle : false})))
        .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile LESS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function() {
    return gulp.src('app/less/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(production, cssmin()))
        .pipe(gulp.dest('public/css/app'));
});

//　清除历史文件
gulp.task('clean',function() {
    return gulp.src('public/css/debug',{read : false})
        .pipe(clean());
});

/**
 *  合并css文件
 */
gulp.task('concat',function() {
    return gulp.src('public/css/app/*.css')
            .pipe(plumber())
            .pipe(concat('main.css'))
            .pipe(cssmin())
            .pipe(rename(function(path) {
                path.basename += '.min';
                path.extname = '.css';
            }))
            //.pipe(rev())
            //.pipe(gulp.dest('public/css/debug'))
            //.pipe(rev.manifest())
            .pipe(gulp.dest('public/css'));
});

//gulp.task('min',function() {
//    return gulp.src('public/css/assets/responsive.css')
//        .pipe(cssmin())
//        .pipe(gulp.dest('public/css/responsive.min.css'));
//});

// 设置版本号
gulp.task('rev',function() {
    return gulp.src(['public/css/debug/*.json','views/index.html'])
        .pipe(revCollector({
            replaceReved : true
        }))
        .pipe(gulp.dest('views/'));
});

gulp.task('mocha',function() {
    return gulp.src('tests/*.js')
                .pipe(mocha({}));
});

gulp.task('watch', function() {
    gulp.watch('app/less/**/*.less', ['styles']);
    gulp.watch('public/css/app/*.css',['concat']);
    gulp.watch(['app/*.js','app/**/*.js'],['webpack']);
});

gulp.task('default', ['styles','vendor', 'webpack', 'watch']);
gulp.task('build', ['styles', 'vendor', 'webpack']);