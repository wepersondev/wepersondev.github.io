# npm

공식 홈페이지: [https://www.npmjs.com](https://www.npmjs.com)

## global

``` sh
npm -g [COMMAND]  # 전역으로 적용
npm [COMMAND]     # 해당 프로젝트/폴더만 적용
```

## init

``` sh
npm init    # npm 사용을 위해 해당 폴더 초기화 > package.json 생성
npm init -y # 모든 질문을 자동으로 패스
```

## install

``` sh
npm install [PACKAGE_NAME]  # [PACKAGE_NAME]를 설치
npm i [PACKAGE_NAME]        # 축약형: i == install
npm -g i [PACKAGE_NAME]     # 전역으로 패키지를 설치
npm -g i [PACKAGE_NAME]     # 전역으로 패키지를 설치

# Example
npm -g i gulp-cli       # 전역으로 gulp-cli를 설치
npm i gulp browsersync  # 해당 폴더에 gulp browsersync 두가지 모듈을 설치
```


