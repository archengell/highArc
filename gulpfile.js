const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('running', function(){
  console.log('gulp running...');
});

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', gulp.series('scripts'), () => {
  gulp.watch('src/**/*.ts', gulp.series('scripts'));
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('browserify', () => {
    return browserify('./dist/script.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.series('watch', 'assets', 'browserify'));