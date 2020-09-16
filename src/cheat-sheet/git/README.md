# git

공식 홈페이지: [https://git-scm.com](https://git-scm.com)

## 설치

윈도우의 경우 [공식 홈페이지](https://git-scm.com)에서 git을 다운받아 설치합니다. 맥은 기본적으로 설치되어 있어 별도의 설치가 필요 없습니다.

## config

``` sh
git config --global user.name "[NAME]"
git config --global user.email  "[EMAIL]"

# Example
git config --global user.name "john.doe"
git config --global user.email  "john.doe@weperson.com"
```

git을 설치 후 최초 한번 global하게 user 정보를 설정합니다.

## init

``` sh
git init
```

최초로 git을 시작할때 해당 폴더를 초기화합니다.

## clone

``` sh
git clone [URL] <FOLDER>

# Example
git clone git@github.com:wepersondev/wepersondev.github.io.git
git clone https://github.com/wepersondev/wepersondev.github.io.git
```

원격지의 git을 다운로드(복제)합니다.
