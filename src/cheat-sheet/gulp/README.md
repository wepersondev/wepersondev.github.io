# gulp

공식 홈페이지: [https://gulpjs.com/](https://gulpjs.com/)

gulp와 browser-sync를 활용한 간단한 개발 환경 구축

## 설치

``` sh
npm -g i gulp-cli
npm i -D gulp browser-sync
```

## gulpfile.js

``` js
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('dev', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});
```

## 실행

```sh
gulp dev
```
