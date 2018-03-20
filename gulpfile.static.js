// Gulp setup for Start Here front end boilerplate

// Load required plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    runSequence  = require('run-sequence'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cp = require('child_process')

// File path vars
var paths = {
    scssSrc: 'assets/scss/**/*.scss',
    imgSrc: 'assets/images/**/*',
    svgSrc: 'assets/svgs/*.svg'
}

// Do the stuff!

// Sass compilation and output
gulp.task('styles', function() {
  return sass('assets/scss/main.scss', { style: 'expanded', cacheLocation: 'assets/.sass-cache' })
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'ie >= 9'
      ],
      remove: false,
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({
      compatibility: 'ie8',
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}))
});

// Javascript concatenation
gulp.task('scripts', function() {
  return gulp.src(['assets/js/libs/*.js', 'assets/js/main.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('site.js'))
    .pipe(gulp.dest('assets/js/build'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/build'))
    .pipe(browserSync.reload({stream:true}))
});

// Compress images (must run gulp images manually)
gulp.task('images', function() {
  return gulp.src(paths.imgSrc)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/images'))
    .pipe(browserSync.stream());
});

// SVG time!
gulp.task('svgs', function() {
  return gulp.src(paths.svgSrc)
    .pipe(svgmin({
        plugins: [{
            removeViewBox: false
        }, {
            removeEmptyAttrs: false
        }]
    }))
    .pipe(gulp.dest('assets/svgs'))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename({suffix: '-defs'}))
    .pipe(gulp.dest('assets/svgs/build'))
    .pipe(browserSync.stream());
});

// Do the build
gulp.task('build', function(callback) {
  runSequence('styles',
              'scripts',
              ['images', 'svgs'],
              callback);
});

// Gulp watch
gulp.task('serve', function() {
  // Init BrowserSync
  browserSync.init({
    files: ['/**'],
    server: {
        baseDir: '/'
    },
    notify: false,
    open: false
  });
  // Kick it off with a build
  gulp.start('build');
  // Watch sass files
  gulp.watch(paths.scssSrc, ['styles']);
  // Watch js files
  gulp.watch(['assets/js/libs/*.js', 'assets/js/main.js'], ['scripts']);
  // Watch SVGs
  gulp.watch(paths.svgSrc, ['svgs']);
});

gulp.task('watch', ['serve']);

gulp.task('default', function() {
    gulp.start('build');
});