'use strict';

var gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    webpack = require('gulp-webpack'),
    notifier = require('node-notifier'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var ENV = process.env.NODE_ENV || 'development',
    isDevelopment = ENV === 'development';

var jsSource = 'src/**/*.js',
    stylSource = ['src/**/*.styl'],
    dest = 'build/';

gulp.task('stylus', function() {
    return gulp
        .src(stylSource)
        .pipe(stylus({
            compress: false,
            use: nib(),
            'import': ['nib']
        }))
        .on('error', function(error) {
            if (isDevelopment) {
                console.log('Oooooops! Run gulp again :-(', error);
            }
            return false;
        })
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest(dest))
        .pipe(gulpIf(isDevelopment, reload({stream: true})));
});

// Build task
gulp.task('webpack', function() {
    return gulp.src('src/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(dest))
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

    gulp.watch(jsSource, ['webpack']);
    gulp.watch(stylSource, ['stylus']);
});

gulp.task('default', ['stylus', 'webpack', 'watch']);
gulp.task('deploy', ['stylus', 'webpack']);
