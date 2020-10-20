# Cloud Service

Cloud Service란 물리적인 서버들을 데이터 센터라는 곳에 모아 놓고 원격으로 사용 할 수 있게끔 대여를 해주는 서비스입니다. 실제 서버 머신을 만지거나 관리 할일이 없기 때문에 구름에다가 가따 놓고 쓰는 기분(?)이라 클라우드 서비스라고 합니다. 예전에는 IaaS(Infrastructure as a Service)를 목표로 하였으나 차츰 발전하여 이제는 서버 임대 보다는 PasS(Platform as a Service), SaaS(Software as a Service) 형태로 진화하였습니다.

![saas-paas-iaas-diagram](/img/wedev/saas-paas-iaas-diagram.svg)
<span class="ref">출처: [cloudflare](https://www.cloudflare.com/learning/serverless/glossary/platform-as-a-service-paas/)</span>

IaaS, PaaS, SaaS 개념을 쉽게 설명하면

* IaaS: 서버 접속하는 IP랑 아이디/비번만 꼴랑 알려주고 직접 원격으로 접속하여 필요한거 다 설치하고 서비스
* PaaS: 데이터베이스라든지 필요한 도구들을 미리 설치해주고 최적화 되어 바로 사용 할 수 있게끔 해준 서비스
* SaaS: 서비스에 필요한 도구들을 소프트웨어 형태로 제작하여 머신 관리 없이 서비스 대 서비스 형태로 API를 이용 할 수 있는 서비스

<small>짧게 설명이 힘드네요. 더 이상의 자세한 설명은 생략한다. DYOR!</small>

## 선택지

클라우드 서비스 3대장은 [AWS](https://aws.amazon.com/), [GCP](https://cloud.google.com/), [Azure](https://azure.microsoft.com/)입니다.

### AWS vs GCP vs Azure

각 클라우드의 비교에 대해서는 인터넷에 널리 포스팅이 되어 있는 바, 여기서는 조금 다른 얘기를 해보겠습니다.

#### 멀티 클라우드

예전에 한 클라우드 서비스에서 네임서버 문제로 해당 클라우드를 사용하는 일부 서비스들이 반나절동안 먹통이 되는 경우가 있었습니다. 또한 글로벌하게 유명한 서비스가 하나의 클라우드에 장애가 생겨서 멀티 클라우드로 전환한 바가 있습니다.<small>(비방으로 비춰 질수 있어 참고 링크나 서비스/회사명등은 일부러 기재하지 않았습니다.)</small>

언어나 프레임워크와 마찬가지로 각 클라우드는 각자 장단점이 있고 대부분 비슷한 공통된 서비스들과 각자 특화된 서비스들이 있습니다. 어떤 클라우드를 선택해야 하는 것보다는 멀티 클라우드가 가능하게끔 설계를 하는 것이 더 중요하다고 생각합니다. 특히 글로벌 서비스의 경우, 다양한 선택지를 가지고 유연하게 대처 할 수 있는 것이 중요합니다. 멀티 클라우드를 위해서는 가급적 클라우드에 종속적인 기술을 지양하거나 해당 기술을 사용하더라도 다른 클라우드에서 우회 할 수 방법으로 서비스를 설계해야 합니다.

####

Firebase와 Amplify


## 결정

AWS + Firebase 조합, alternative로 Amplify(feat. AppSync)


:::tip AWS 알아야 하는 서비스
aws 에서 알아야 하는 서비스
:::
