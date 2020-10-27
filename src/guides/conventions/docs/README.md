# 문서화

문서를 작성시 필요한 규약을 담고 있습니다.

## 코드 블럭

다음과 같은 형식으로 명령어와 전달인자를 구분합니다.

- 명령어: 소문자(대소문자가 꼭 필요하거나 관습처럼 사용 되는 경우가 아니면 소문자)
- 필수인자: [대문자]
- 비필수인자: <대문자>

``` sh
command [REQUIRED] <OPTIONAL>

# Example
git clone [URL] <FOLDER>
```

## Cheat Sheet

Cheat Sheet를 작성할 때 간결하고 통일성 있게 하기 위하여 다음과 같이 작성한다.

* 명령어를 타이틀로 하고 가급적 한줄 주석으로 표현
* 사용법은 상단에 Example은 하단에 명시

``` sh
npm install [PACKAGE_NAME]  # [PACKAGE_NAME]를 설치
npm i [PACKAGE_NAME]        # 축약형: i == install
npm -g i [PACKAGE_NAME]     # 전역으로 패키지를 설치
npm -g i [PACKAGE_NAME]     # 전역으로 패키지를 설치

# Example
npm -g i gulp-cli       # 전역으로 gulp-cli를 설치
npm i gulp browsersync  # 해당 폴더에 gulp browsersync 두가지 모듈을 설치
```
