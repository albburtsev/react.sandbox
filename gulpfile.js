'use strict';

var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    webpack = require('gulp-webpack'),
    stylish = require('jshint-stylish'),
    notifier = require('node-notifier'),
    jshint = require('gulp-jshint'),
    jsxcs = require('gulp-jsxcs'),
    jscs = require('gulp-jscs'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var ENV = process.env.NODE_ENV || 'development',
    isDevelopment = ENV === 'development';

var jsSource = [
        'gulpfile.js',
        'app/src/**/*.js'
    ],
    jsxSource = ['app/src/**/*.jsx'],
    stylSource = ['app/src/**/*.styl'];

// DRY task for code style
gulp.task('jscs', function() {
    return gulp
        .src(jsSource)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jscs('./.jscsrc'))
        .on('error', function() {
            if (isDevelopment) {
                notifier.notify({
                    title: 'JSCS',
                    message: 'Incorrect code style'
                });
            }
        });
});

// Code style for .jsx-files
gulp.task('jsxcs', function() {
    return gulp
        .src(jsxSource)
        .pipe(jshint.reporter(stylish))
        .pipe(jsxcs('./.jscsrc'))
        .on('error', function() {
            if (isDevelopment) {
                notifier.notify({
                    title: 'JSXCS',
                    message: 'Incorrect code style'
                });
            }
        });
});

// Build task
gulp.task('webpack', function() {
    return gulp.src('src/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/'))
        .pipe(gulpIf(isDevelopment, reload({stream: true})));
});

// Watch changes and run code style task
gulp.task('watch', function() {
    if (isDevelopment) {
        browserSync({
            server: {
                baseDir: '.'
            }
        });
    }

    gulp.watch(jsSource, ['jscs', 'webpack']);
    gulp.watch(jsxSource, ['jsxcs', 'webpack']);
    gulp.watch(stylSource, ['webpack']);
});

gulp.task('default', ['jscs', 'jsxcs', 'webpack', 'watch']);
gulp.task('deploy', ['jscs', 'jsxcs', 'webpack']);
