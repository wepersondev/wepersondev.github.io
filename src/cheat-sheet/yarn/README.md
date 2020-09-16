# yarn

공식 홈페이지: [https://classic.yarnpkg.com/](https://classic.yarnpkg.com/)

클래식 버전과 v2 가 있으나 v2 는 글쓰는 시점 아직 안정화 단계라 클래식 버전을 사용

## global

``` sh
yarn global [COMMAND]  # 전역으로 적용
yarn [COMMAND]     # 해당 프로젝트/폴더만 적용
```

## config

``` sh
yarn config set ignore-engines true # 모듈에서 요구하는 node 버전 에러를 무시
```

## init

``` sh
yarn init    # npm 사용을 위해 해당 폴더 초기화 > package.json 생성
yarn init -y # 모든 질문을 자동으로 패스
```

## install

``` sh
yarn add [PACKAGE_NAME]  # [PACKAGE_NAME]를 설치
```

## link

``` sh
yarn link [PACKAGE_NAME]  # [PACKAGE_NAME]를 Link
```

## list

``` sh
yarn list # 설치된 패키지 리스트 보기
```

