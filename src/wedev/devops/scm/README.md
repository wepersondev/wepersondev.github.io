# SCM

SCM(Source Code Management)란 소스코드관리라는 뜻이고 당연히(?) Git을 사용합니다. 사실 Git에 대한 내용은 기술 스택이라고 하기에도 DevOps라고 하기에도 이상하고 그냥 개발을 위한 기본적인 내용인데 따로 카데고리를 만들기 애매해서 여기에 포스팅 하였습니다.

## Git을 사용하는 이유

Git을 사용하는 이유를 소스코드 관리로 알고 있는데, 그것보다 중요한것은 생태계를 이용하기 위함입니다. NPM, PIP, NuGet, DockerHub등 대부분의 패키지 생태계가 Git과 GitHub에 연결이 되어 있습니다. CI/CD 또한 Git을 기반으로 소스를 가져오고 실행하고 합니다. 소스코드관리는 아주 기본적인 역할입니다.

Git에 대한 기본적인 사용법은 [Guides](/guides/)에 포스팅 될 예정이고 여기서는 저희가 어떻게 Git을 사용/활용 하는지에 대해서만 포스팅하겠습니다.

## Git Flow

![Git Flow](/img/wedev/git-flow.png)
<span class="ref">Git Flow (출처: Vincent Driessen 블로그)</span>

처음 이 사진 보고 아름답다라고 느낌. 일반적인 개발에서 일어날수 있는 문제에 대한 해결책이 다 녹아 있었기때문.

Git Flow란? Vincent Driessen가 제안한 브랜칭 전략입니다. 컨벤션 보다는 컨센서스에 가깝습니다.


## SamVer

SamVer이란 시멘틱버저닝의 약자로 패키지를 관리할때 사용되는 버전, git에 tag로 같이 커밋됨

## Conventional Commit

Conventional Commit이란 SamVer를 잘 쓰기 위한 규약. 실제로 이걸로만 커밋이 가능하게 함.

## Mono Repo

Mono Repo란 여러개를 하나로 lerna나 yarn workspace 를 사용

