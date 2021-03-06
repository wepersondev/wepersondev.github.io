# SCM

SCM(Source Code Management)란 소스코드 관리라는 뜻이고 당연히(?) Git을 사용합니다. 사실 Git에 대한 내용은 기술 스택이라고 하기에도 DevOps라고 하기에도 이상하고 그냥 개발을 위한 기본적인 내용인데 따로 카데고리를 만들기 애매해서 여기에 포스팅하였습니다.

## Git을 사용하는 이유

Git을 사용하는 이유를 소스코드 관리로 알고 있는데, 그것보다 중요한 것은 생태계를 이용하기 위함입니다. NPM, PIP, NuGet, DockerHub등 대부분의 패키지 생태계가 Git과 GitHub에 연결되어 있습니다. CI/CD 또한 Git을 기반으로 소스를 가져오고 실행합니다. 소스코드 관리는 아주 기본적인 역할입니다.

Git에 대한 기본적인 사용법은 [Guides](/guides/)에 포스팅 될 예정이고 여기서는 저희가 어떻게 Git을 사용/활용 하는지에 대해서만 포스팅하겠습니다.

## Git Flow

![Git Flow](/img/wedev/git-flow.png)
<span class="ref">Git Flow (출처: Vincent Driessen 블로그)</span>

필자가 신입을 막 벗어날 무렵 이 그림 한장을 보았습니다. 아무런 설명도 읽지 않고 그냥 그림만 보자마자 "너무 아름답다!"라는 생각을 했습니다. 신입 때 Git을 멋모르고 사용하여 문제가 되었던 부분에 대한 해결책이 여기에 모두 담겨 있었기 때문입니다.

Git Flow란? Vincent Driessen가 제안한 브랜칭 전략입니다. 컨벤션(Convention)보다는 컨센서스(Consensus)에 가깝습니다. 이 브렌칭 전략은 개발을 하면서 소스코드를 관리하고 출시하기 위한 대부분의 경우에 해결책을 제시합니다.

* master: 제품으로 출시되는 브랜치
* develop: 다음 출시 버전을 개발하는 브랜치
* feature: 기능을 개발하는 브랜치
* release: 이번 출시 버전을 준비하는 브랜치
* hotfix: 출시 버전(master)에서 발생한 버그를 수정하는 브랜치

개발 흐름은 다음과 같습니다.

최초에 master를 생성합니다.

이후 주 개발을 목적으로 하는 develop 브랜치를 생성합니다.

새로운 기능을 추가하려면 feature 브랜치를 생성합니다. 기능 개발이 완료되면 feature 브랜치는 develop 브랜치로 merge합니다.

이번 버전에 출시할 모든 작업들이 완료되면, develop에서 release 브랜치를 생성합니다. release 브랜치에서 QA를 진행합니다. QA 진행 동안은 release 브랜치에 직접 커밋합니다. QA가 모두 끝나면 release 브랜치를 master와 develop에 모두 merge합니다.

혹시나 서비스를 하고 있는 master에서 문제가 생길 경우 Hot Fix 브랜치를 생성하고 문제 해결 후 master와 develop에 모두 merge합니다.

이런 식으로 관리하면 신규 개발이나 버그 수정, QA, Hot Fix를 동시에 진행하여도 소스가 꼬이지 않고 대처가 가능합니다. 아시다시피 현실은 녹록치 않기 때문에 아무리 소스만 브랜칭 한다고 해서 실제로 이대로 다 돌아가진 않습니다. 특히 백엔드의 경우 관련된 서버와 환경까지 준비가 되어야 합니다. 그럼에도 불구하고 이런 브랜칭 전략은 개발을 하면서 일어나는 다양한 상황에서도 어느 정도 대응이 가능하고 관리를 용이하게 할 수 있습니다.(Vincent Driessen 블로그에도 명시되어 있지만 이대로 똑같이 브랜칭을 하는 것이 아니고 이런 원리를 바탕으로 자기 팀과 프로젝트에 맞게 구성을 해야 합니다.)

## Semantic Versioning

시멘틱 버저닝(Semantic Versioning)이란 한국말로 유의적 버전 작성 방식인데 한국말이 더 어렵네요. 버전을 작성할때 1.2 이런 식으로 두 가지만 사용하는 사람이 있고 1.2.3 세 가지를 사용하는 사람이 있고 버전을 올릴 때 기준이 각자 다를 수 있는데 이것을 하나의 통일된 의미로 작성하자는 뜻에서 GitHub의 공동 창업자 Tom Preston-Werner가 제안한 방식입니다. 현재 오픈소스 버전 체계의 표준으로 사용되고 있습니다.

상세 스팩에 대해서는 한글화까지 된 [공식 문서](https://semver.org/lang/ko/)가 있고, 다양한 블로그들에 소개가 되어 있으니 여기서는 짧게 설명하고 마치려고 합니다.

> major.minor.patch

* major: 기존 버전과 호환이 안됨
* minor: 기존 버전과 호환되나 기능이 추가
* patch: 기존 버전과 호환되면서 버그 수정

단순히 버전만 보더라도 현재 버전과 호환이 되는지, 기능이 추가 되었는지, 버그가 수정되었는지를 알 수 있습니다. 사용하는 사람 입장으로써는 주로 major만 보아도 됩니다. major가 안바뀌면 우선은 계속 사용이 가능하다라는 것이기 때문입니다. 제작하는 입장에서는 철저하게 major.minor.patch 규칙을 따라야 사용자에게 혼선이 없습니다.

Git에서 갑자기 Semantic Versioning 이야기한 것은 이어서 이어질 Conventional Commit과 Mono Repo를 운영할 때 사용되기 때문입니다.

## Conventional Commit

컨벤셔널 커밋(Conventional Commit)이란 Git으로 커밋을 할때 정해진 규칙에 따라 커밋 메시지를 작성하는 것을 의미합니다. 이 규칙은 Semantic Versioning과 일맥상통하며 규칙이 존재하기 때문에 히스토리에 대한 자동화 또는 프로그램으로 강제화가 가능합니다. 저희 팀에서는 명확한 커밋 로그 관리를 위하여 실무에서 모두 Conventional Commit을 사용하고 있으며 보조 도구로 [standard-version](https://github.com/conventional-changelog/standard-version), [lerna](https://github.com/lerna/lerna), [yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/), [Husky](https://github.com/typicode/husky)를 사용하고 있고 자세한 사용방법은 [Guides](/guides/)에 포스팅 예정입니다.

[Conventional Commit](https://www.conventionalcommits.org/)에 대한 자세한 규칙은 링크에 있습니다.

## Mono Repo

Mono Repo란 Git을 사용할 때 여러 개의 Repository를 하나의 Repository로 관리하는 패턴입니다. 여러 개의 프로젝트를 굳이 하나로 관리하는 이유는 하나의 목적을 위해 만들어졌지만 개별적으로도 사용이 가능하고, 비슷한 환경 셋팅을 하기 때문에 한 번에 모아서 관리하는 것이 편하기 때문입니다. Google, Facebook 등 다양한 회사와 프레임워크들이 Mono Repo 형식으로 만들어져 있고 계속 만들어나가는 추세입니다.

Mono Repo의 장점으로는 공통된 설정을 모든 패키지에 일괄 적용이 가능하고 패키지 간의 공유 및 의존성 관리가 수월합니다. 기술적으로는 하나의 Repo이기 때문에 이슈 트레킹을 한 번에 관리할 수 있는 장점도 있습니다.

Mono Repo를 위해서 [lerna](https://github.com/lerna/lerna), [yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/)를 사용하고 자세한 사용법은 [Guides](/guides/)에 포스팅할 예정입니다.

## 정리

항상 그렇지만 무엇을 쓰느냐보다 어떻게 쓰느냐가 중요합니다.

저희 팀은 Git Flow 방식의 브랜칭 전략을 사용하고 Conventional Commit을 사용하여 Semantic Versioning을 따릅니다. 개별 프로젝트들은 단일 Repo 방식을 사용하고 라이브러리나 프레임워크 성격의 모듈들은 Mono Repo 방식으로 개발합니다.

