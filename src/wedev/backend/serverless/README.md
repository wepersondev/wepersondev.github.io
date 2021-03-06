# Serverless

요즘 백엔드 분야의 화두를 꼽아보라고 한다면 Serverless, Microservice 아닐까 싶습니다. 해외에서는 5년 전부터 시작해서 이미 해당 기술로 구축이 많이 되어 있는데 우리나라는 이제 공부를 시작하는 사람들도 있으니 아직 갈길이 멀다 싶습니다.

:::tip
<small>
아시다시피 우리나라는 더이상 IT 강국이 아닙니다. S전자, L전자등에서 하드웨어를 잘 만드는 나라이고, 땅 덩어리가 좁아서 인프라가 잘 깔려서 인터넷이 빵빵하게 터지는 나라이지, IT 강국은 아닙니다. 특히나 소프트웨어는 아닙니다. 한 조사에서 전 세계에서 오픈소스 활용도가 높으면서 활용도 대비 오픈소스 기여도가 제일 낮은 나라가 대한민국이라는 결과를 보았습니다. 우리나라에서 글로벌하게 이끌어 가고 있는 오픈소스 단 하나라도 있는지요? 같은 개발자로써 부끄럽고 반성할 따름입니다. 우리나라 대기업에 종사하고 있는 지인들에게 왜 이렇게 오픈소스 기여가 인색한 지를 물어보았습니다. 제가 들은 답변은 "돈이 안된다" 였습니다. 대기업은 돈 안된다고 안하고 스타트업은 먹고살기 힘들다고 안하고 그럼 도대체 소는 누가 키웁니까? ㅠㅠ 국위선양까진 아니더라도 최소한 오픈소스로 받은 혜택의 1/10라도 다시 생태계에 돌려주는 노력들을 기업들이 했으면 하는 바람입니다.<br><br>
</small>
:::

## Serverless란?

> “No server is easier to manage than no server.”  — Werner Vogels, Amazon CTO

의역하면 “서버를 제일 잘 관리하는 방법은 서버가 없는 것이다.” 아마존 CTO가 2015년 re:Invent 기조 연설에서 언급한 내용입니다.

Serverless에 관해서 좋은 자료들이 많이 있습니다.([AWS Serverless](https://aws.amazon.com/ko/serverless/), [GCP Serverless](https://cloud.google.com/serverless?hl=ko) 참고)<br>
대부분 좋은 내용이나 너무 공학적으로 접근하여 설명되어 있고 이 블로그는 평범하지 않기 때문에(?) Serverless의 기술적 내용보다는 다른 관점의 설명을 해보겠습니다.

개발자 혹은 스타트업 IT 대표에게 묻습니다.

> 서버가 왜 필요하신가요?

“이번에 우리가 만든 서비스를 고객에게 제공하기 위해서 파일을 저장하기위한 서버도 필요하고, 데이터를 저장할 디비 서버도 필요하고, 웹을 보여줄 웹서버도 필요하고...”

> 혹시 서비스가 필요하신 것 아닌가요?

이제 기술적인 것을 떠나서 관점을 달리봐야 할 때입니다. 비즈니스 관점에서 고객에게 서비스를 전달하기 위하여 물리적인 서버가 필요했던 것이 아니고, 그것을 제공하기 위해서 물리적인 서버 위에 서비스를 구축하는 방식을 택했을 뿐이지 애초에 누구도 서버 자체가 필요했던 것은 아니었습니다. [Wix](https://wix.com/)라는 홈페이지 제작을 위한 서비스가 있습니다. 이 서비스는 단순히 웹상에서 디자인과 레이아웃만 제공하면 서버를 신경 쓸 것 없이 뚝딱 홈페이지를 만들 수 있습니다.(~~라고 광고하고 있습니다~~) 만약에 이 서비스를 통해서 내가 원하는 모든 서비스를 제공하고 그것이 내가 한 땀 한 땀 만든 것보다 효율이 좋고 싸고 빠르다라고 한다면, 직접 서버 위에 모든 것을 구축할 필요가 전혀 없습니다.

크게 보면 이것도 Serverless입니다. 비즈니스 제작을 위한 서비스가 필요하면 해당 서비스를 쓰면 되는 것이지, 물리적인 서버를 꼭 택해야 할 이유는 없습니다. 얘기하고 싶은 것은 **Serverless 기술이 좋고 나쁘고를 떠나서 비즈니스 전달이 목적이지 애초에 물리적 서버 자체가 목적이 아니면 필요가 없다**는 것입니다.

그럼에도 불구하고 "서비스 = 서버 필요"가 공식처럼 따라 붙은 것은 서비스 제작을 위한 도구형 서비스들이 내 비즈니스를 온전히 다 구축하기에 부족했기 때문입니다. 그러나 이제 기술의 발달로 인해 내가 원하는대로(?) 구축이 가능한 도구형 서비스들이 나왔고 이것이 효율적이고 싸고 빠르기 때문에 이제 관점을 달리해야 한다고 한 것입니다. 이런 기술들이 대부분 서버가 아닌 서비스의 형태로 제공되기 때문에 Serverless라고 칭합니다.<small>(나름 공학도들에게 매우 공학적이지 않게 잘 설명한 것 같습니다. -뿌듯-)</small>

요즘 나오는 대부분의 트렌디한 기술들은 생산성과 유지보수에 초점이 되어 있습니다. 서버 하나하나의 CPU, 메모리, 네트워크 등을 관리하고 사용량에 따라 Scale Up/Out 하는 등의 관리를 직접하지 않다보니 인프라 관리가 쉬워지고 이는 유지보수와 생산성을 높이는데 직결됩니다. (흔한 오해가 Serverless를 사용하면 인프라 관리를 아예 안해도 된다고 생각하는데, 인프라 관리가 쉬워지는 것이지 없어지는 것은 아닙니다. 레거시 방식보다 100배 정도 쉬워진다고 생각하면 될 것 같고 아예 없어지는 것은 아닙니다. <small>~~세상에 그냥 쉽게 되는 것은 하나도 없습니다 ㅠㅠ~~</small>)

이번에는 클라우드 서비스 벤더들 입장에서 보겠습니다. AWS나 GCP같이 클라우드 서비스를 제공하는 입장에서는 물리적인 서버를 항상 넉넉히 준비해놔야 합니다. 꼴랑 10대 준비해두었는데 11번째 손님이 오면 "아~ 자리가 꽉 찾는데 한 분 다 드시고 떠날 때까지 좀 기다리셔야겠는데요. 정말 10분이면 돼요." 이럴 수가 없습니다.

이를 수용량(Capacity)이라고 하고 각 벤더사 마다 기준이 다르겠지만 확실한 건 "항상 여유 있게" 할 수 밖에 없다는 것입니다. 여유있게 서버를 준비해 놓는다는 것은 사용자 입장에서 좋은 것이지만 운영하는 입장에서는 그다지 환영할 만한 일이 아닙니다. 지속적으로 전기세, 관리비, 감가상각 등이 다 빠져나가기 때문입니다. 그러다고 언제 큰 손들이 올 지 모르기 때문에 빡빡하게 준비해놓기도 좀 애매합니다.

> 남는(놀고 있는) 서버들을 좀 활용할 방법이 없을까?

전 세계적으로 보았을 때 웹 서비스의 점유율이 지배적입니다. 웹 서비스라는 것은 본디 유저에게 보여줄 내용을 미리 준비해놓거나 찾아서 전달해주는 것인데 이것은 시간이 길 수가 없습니다. 사이트가 느리면 손님이 떠나기 때문입니다. 대부분의 웹 서비스에서 로직 실행 시간은 1초 미만이고 아무리 길어봐야 몇 분인데 서버를 통째로 대여해주는 것이 아니라 몇 분 단위로만 대여를 해주면 어떨까? 어차피 남는 서버들 그냥 전기만 먹고 있는데 몇 분 단위라도 쪼개서 팔면 서버를 통째로 점유하는 것이 아니니 수용량에 대한 대처도 쉽고 수익율도 향상 되고 좋지 않을까? 이것이 Functions 서비스(AWS:Lambda, GCP: Cloud Functions, Azure: Functions)입니다. (<small>제가 그 회사 직원이 아니기 때문에 실제로 이런 의도로 Functions 서비스가 만들어졌는지 모릅니다. 다만 Function 기반의 서비스를 하면서 수용량에 대한 컨트롤이 유연해지고 수익성을 올릴 수 있다는 사실은 변함이 없습니다. 항상 그렇지만 제 포스팅은 사실에 집중하기 보다 흐름을 보시면 됩니다.</small>)

개발자 입장에서 인프라 관리가 쉬워지고 클라우드 서비스 벤더들 입장에서 수익률도 향상되니 이런 누이좋고 매부좋은 서비스가 Serverless 기술인 것이고 최근 몇 년을 기점으로 해외에서는 폭발적으로 사용량이 증가하고 있습니다.

Serverless를 기술적으로 보자면 주로 Functions + Managed Service 의 조합입니다. 가장 기본적인 형태의 웹 서비스를 AWS에서 구성해 보자면 S3 + Cloud Front + Lambda + DynamoDB 정도가 될 것입니다. 이어서 설명할 BaaS(Backend as a Service)형태의 Amplify, Firebase 같은 서비스는 기본적으로 모두 Serverless 형태를 취하고 있습니다.

### Serverless의 장점

#### 비용

머니머니 해도 머니(Money)입니다.(<small>아재 개그 죄송 ㅠㅠ</small>) 사용하든 안하든 24시간 켜놓을 수 밖에 없는 레거시 방식에 비해서 Serverless는 정확히 사용한 시간만큼에 비례하여 비용을 지불하므로 비용 절감에 큰 효과가 있습니다. 구성 내용에 따라서 비용이 수백 배도 차이가 날 수 있습니다. 인스턴스 방식의 구성도 Auto Scale을 통해서 비용 조절이 가능하나 Serverless 만큼 마이크로 컨트롤은 힘듭니다. 단, Serverless라고 하여 구성에 따라서 무조건 싼 건 아니니 오래 걸리는 작업은 Spot 인스턴스를 이용한다든지 비용에 최적화된 설계가 필요합니다.

비용이 무조건 저렴하다로 접근하기보다는 스타트업처럼 비즈니스 초반에 비용 예측이 매우 힘든 경우 최소한의 비용으로 시작할 수가 있고 사용량에 따라 유연하게 대처를 할 수 있다는 장점이 있습니다.

#### 확장(Scale Up/Out)

대부분 아무런 설정 없이도 자동으로 확장이 됩니다. Auto Scale, CPU/메모리 사용량 등을 걱정할 필요거 없습니다.(단, 더 많이 쓰면 당연히 돈 더 냅니다.) 세부 설정을 통해 Scale Up/Out에 대한 조절도 가능합니다.

#### 관리 및 보안

인프라를 일일히 셋팅하고 관리 안해도 되서 시간도 아끼고 편리합니다. 보안패치 업데이트 및 방화벽 구성이나 DDOS 방어등 보통 서비스단에서 알아서 다 해줍니다.

#### 벤더 특화 기능

AWS의 DynamoDB, Firebase의 FireStore등 각 벤더 별로 최적화하여 특화된 서비스들을 사용할 수 있습니다. 일반적으로 인스턴스에 설치하여 사용하는 오픈 소스 도구들보다 고성능이나 고가용성을 자랑합니다.

#### 모듈화

Serverless 기반에서 보통 로직을 Function으로 사용하기에 서비스 자체를 모듈화 하기가 좋습니다. 이를 마이크로서비스라 하고 아래에 이어서 설명합니다. 레거시 인스턴스 방식이라고 마이크로서비스를 구축 못하는 것은 아니지만 Serverless는 더 최적화 되어 있습니다.

### Serverless의 단점

#### 제한

Function을 기반으로 한 서비스를 호출 시 시간 제한, 메모리 제한이 있습니다. 일반적으로 5분, 2M 같이 제한이 있고 세부 설정을 통해 증액은 가능하나 인스턴스 같이 크게 확장을 할 수는 없습니다. 또한 시간 제한이 있다보니 WebSocket 같이 연결지향형 프로토콜을 사용하기가 힘듭니다. 오랜 시간이나 메모리를 많이 사용하는 작업은 Serverless보다는 Spot 인스턴스를 같이 사용하게끔 설계하는 것이 좋습니다.

#### 의존성

벤더 특화된 기능을 사용 시 의존성이 생길 수 밖에 없습니다. 의존성을 너무 강하게 설계할 경우, 클라우드의 이전이나 멀티 클라우드의 구성이 힘들어 질 수 있습니다.

#### 가격 예측

가격 계산이 복잡합니다. 사용한 시간에 비례하여 비용을 내는 것이나 초단위가 아닌 마이크로 초단위로 계산을 하고 메모리를 조금 더 쓰고 덜 쓰고에 따라서 가격이 두 배도 차이가 납니다. 디비의 경우 인스턴스 방식은 한달 사용량 당 몇 달러 이런 식으로 고정되어 있지만 Serverless의 경우 읽기는 백만 쿼리당 $0.x, 쓰기는 백만 쓰기당 $0.x 얼마 이런 식으로 총 얼마를 읽고 쓰고 지우고 트렌젝션을 걸고 하는 것에 따라서 세세하게 가격이 나옵니다. 유저가 서비스를 이용하면서 평균 세션 타임, 페이지 뷰 수, 페이지 내에서 쿼리량, 쿼리량 중에 읽고 쓰는 비율, 업로드한 파일 사이즈 평균, 다운로드한 사이즈 일평균, DAU, MAU 등등 아주 세세한 데이터가 모두 있으면 이론적으로는 계산이 가능하나 특히 스타트업의 비즈니스는 초기에 이런 식으로 예측이 불가합니다. 대부분 Serverless 기반으로 제작된 서비스들은 몇 달 정도 돌려보면서 이용량을 바탕으로 역추산을 합니다.

#### 설계(Architecture)

Function 기반으로 로직을 돌리다보니 아무래도 설계 방식이 조금 달라지고 복잡해질 수도 있습니다. 인스턴스 기반에서 Persistance 하던 것들을 지양하고 Stateless로 설계를 해야 합니다.

## Microservice란?

마이크로서비스(Microservice)란 큰 서비스 하나를 여러 개의 작은 서비스로 나눠서 개발하는 것을 뜻합니다. 원래 없던 개념도 아니고 레거시 인스턴스 방식으로 이미 구현이 가능하나, Serverless 방식이 마이크로서비스와 궁합이 잘 맞아서 점점 더 많이 사용되고 있는 추세입니다.

기술적인 설명은 잘 된 자료들이 많아서 쉽게 찾아보실거라 생각하고 여기서는 개념적인 설명만 하도록 하겠습니다.([참고: AWS 마이크로서비스](https://aws.amazon.com/ko/microservices/))

> 좋은 아키텍처(Architecture)란 무엇입니까?

보통 신입들이 저에게 질문을 하면 딱 두 가지만 얘기합니다.

**추상화(Abstraction) + 디커플링(Decoupling)**

추상화를 통해서 복잡성을 단순화 시키고, 디커플링을 통해서 결합을 느슨하게 해야 확장과 유지관리가 쉽습니다. 이는 앱을 만들던 프론트엔드이든 백엔드이든 전체 설계이든 상관없이 공통적으로 적용이 되는 말입니다. 마이크로서비스의 개념이 본격적으로 대두대기 전부터 사용하였지만 마이크로서비스를 설명하기에도 적합한 내용입니다.

마이크로서비스는 일반적으로 API를 통해서 서비스간 통신을 하며(**추상화**), 느슨하게 결합(loosely-coupled)된 구조(**디커플링**)로 분리합니다.

이미 구축된 큰 서비스를 여러 개의 모듈 형태의 작은 서비스로 분해할 수도 있고, 애자일(Agile) 방식의 개발을 하는 스타트업의 경우 뼈대가 없는 가지치기 형태로 서비스를 구축 및 확장해 나갈 수 있습니다.

![microservice](/img/wedev/microservice.png)

위 그림은 [아마존닷컴](https://www.amazon.com/)과 [넷플릭스](https://www.netflix.com/)의 서비스 구조 다이어그램입니다. 위에 보이는 점 하나하나가 모두 마이크로서비스 하나하나입니다.

[AWS 마이크로서비스](https://aws.amazon.com/ko/microservices/)에서 말하는 마이크로서비스의 장점으로는 민첩성, 유연한 확장성, 손쉬운 배포, 기술적 자유, 재사용 가능한 코드, 복원성등 세상에 좋은 단어는 다 갖다 붙여놨는데(?) 그만큼 잘 구성할 경우 매우 좋은 설계 방식입니다. 단점으로는 분산 트렌젝션의 구현이나 서비스간의 조정, 테스팅등이 약간 복잡해질 수도 있습니다.

:::tip 폴리글랏(polyglot)이란?
마이크로서비스 설명을 찾아보다보면 폴리글랏(polyglot)하기 좋다는 말이 많이 나옵니다. 폴리글랏이란 하나의 서비스를 다양한 언어와 환경을 통해 구현을 한다는 것입니다. 마이크로서비스는 서비스 하나하나가 독립적이다보니 A라는 서비스는 Node.js + DynamoDB 로 구성하고 B라는 서비스는 Java + MySQL로 구성하는 등이 가능하다는 것입니다.
:::

:::warning 폴리글랏(polyglot) 하지마세요!
마이크로서비스에 대한 글들을 읽다보면 마치 폴리글랏(polyglot)이 장점에 비추어 설명들을 많이 하고 자사에 마이크로서비스를 도입하면서 폴리글랏(polyglot)도 할 수 있게 되어 신난다는 직원의 포스팅도 보았습니다. 물론 한 가지 프레임에 갇혀서 똑같은 작업을 하다보면 폴리글랏 같은 것을 시도해보면 재미있을 수도 있지만 이는 인력풀이 충분한 중소기업 규모 이상의 회사에서의 얘기이고 인력이 적은 스타트업의 경우 폴리글랏의 도입은 운영이 더 힘들어질 수도 있습니다. 기존 스택이 Node인데 폴리글랏을 통해 Spring을 도입했다면 Node 개발자와 Java 개발자 모두가 필요하고 혹시나 Java 개발자가 아프거나 퇴사를 해버리면 다른 개발자가 백업을 하기가 힘들수도 있습니다. 물론 모든 구성원이 폴리글랏의 모든 언어와 프레임워크를 알면 문제가 안되겠지만 하나만 잘하는 사람도 구하기 힘든 스타트업의 여건 상 폴리글랏은 도입하지 않는 것이 좋습니다. 저희 회사 같은 경우는 폴리글랏을 사용하지만 이는 특정 경우에 특정 언어나 플렛폼에 종속적인 경우에만(예: R - Python) 사용할 뿐이지 일부러 다양성있게 하지 않습니다. 동료가 아프면 어깨를 두들겨주기 보다는 코딩을 대신해주는 것이 더 좋습니다. ^^;
:::

## BaaS(Backend as a Service)

BaaS(Backend as a Service)란 SaaS(Software as a Service)의 한 종류로써 백엔드에서 자주 사용되는 기술들만 모아서 추상화 시키고 생산성을 올려놓은 도구 모음입니다.

일반적인 BaaS의 구성은 다음과 같습니다.

* 인증
* 데이터베이스(NoSQL)
* 파일 저장
* 호스팅
* Functions
* 분석
* 테스팅

이것만 있으면 일반적인 서비스 대부분 개발이 가능합니다. 부족한 부분은 다른 벤더의 서비스를 섞어서 사용하면 됩니다. 주로 스타트업이 사용하기 좋게 되어있어 가격도 무료 사용량 + 사용량에 비례하여 지불하게 됩니다. BasS 서비스는 대부분 Serverless 기반으로 되어 있습니다.

### Firebase vs Amplify(feat. AppSync)

![Firebase vs Amplify](/img/wedev/firebase-vs-amplify.png)
<span class="ref">출처: [stackshare 캡처](https://stackshare.io/stackups/aws-amplify-vs-firebase)</span>

현재 BaaS(Backend as a Service)의 최강자는 Firebase 입니다. AWS에서 Amplify를 열심히 밀고는 있지만 점유율에 있어서 너무 미미합니다. Azure도 비슷한 서비스가 있는데 StackShare에서 검색도 안되고 명함도 내밀기 힘든 상황입니다.

Firebase는 GCP(Google Cloud Platform)을 기반으로 추상화하여 생산성을 극대화하여 만든 서비스입니다. 인프라 생성/관리등을 단순히 몇 번의 클릭 만으로 가능하도록 만들었습니다. Amplify는 Firebase와 목표는 같지만 참 “AWS스럽게” 만들었습니다.

:::tip Amplify는 “AWS스럽게”?
양쪽 서비스를 모두 이용해보신분은 아시겠지만, Firebase는 GCP의 복잡성을 최대한 추상화하여 감추고 사용의 편리성에 집중하였습니다. GCP를 아무것도 모르더라도 Firebase를 바로 이용할 수 있습니다. Amplify는 AWS를 서비스 블록을 추상화했다기보다는 기존의 AWS 서비스 블록들을 그냥 조립하여 하나의 파이프라인으로 만들어놓은 느낌입니다. 어찌보면 각 개발사의 철학 차이고 개인의 취향차라고 생각할 수도 있습니다.

하지만 Firebase와 Amplify의 목적이 인프라를 신경쓰지 않고 생산성을 극대화하면서 사용하기를 원하는 것인데 그럼 최대한 기존에 복잡한 서비스 블록들을 다 감추고 추상화를 통하여 사용자의 편리성에 집중해야 합니다. 이미 점유율에서 극명하게 드러나지만 AWS 직원이 "응, 아닌데 우리는 그냥 파이프라인 만들려고 한거야"라고 하면 딱히 할 말은 없습니다. ^^;
:::

프론트엔드의 생산성 최강자는 [Quasar Framework](https://quasar.dev/) 라고 하면 백엔드 생산성 최강자는 단연코 [Firebase](https://firebase.google.com/) 입니다. (가끔 AWS vs Firebase로 비교하는 분들이 있는데 급이 맞지 않는 비교입니다. AWS vs GCP, Firebase vs Amplify 로 비교를 해야 목적과 체급이 맞습니다.)


솔직히 개인적으로는 Firebase가 조금 더 발전하면 스타트업들이 다른 서비스들을 사용할 필요가 있을까 싶을 정도입니다. 물론 Firebase에도 다양한 제약들이 존재하고 아주 단순한 페인 포인트(Pain Point) 때문에 좀 힘든 부분들이 있지만, Firebase의 발전 속도를 보았을 때 궁극적으로는 해결이 될 것으로 기대합니다. 문제는 국내에서는 인지도나 점유율이 높지 않고 페인 포인트(Pain Point)의 우회 방법을 찾지 못한 사람들의 불평 불만이 담긴 글 들이 많아서 신뢰도가 높지 않습니다.(<small>이전부터 얘기했지만 우리나라는 기술 편향 성격이 심합니다. 우리나라는 무조건 React + AWS 써야하며 그거 말고 다른 것을 쓰는 애들은 이상한 놈 취급 받습니다. GCP, Azure, Firebase 다 좋은 솔루션이고 무엇을 쓰는가보다 잘 쓰는 것이 중요합니다.</small>)

## 정리

대망의 백엔드 큰 그림에 대한 정리가 끝났습니다. 하나하나의 소주제마다 원체 방대한 양의 설명이 필요한 것인데, 시간과 지면상(?) 축약하다보니 제가 다시 보아도 설명이 충분하지 못한 것 같습니다. 이후 시간이 될 때 다시 정리하거나 소주제들을 더 분리하여 정리해보겠습니다.

정리해보면,

백엔드 프레임워크는 클라우드 벤더들의 지원이 빠른 Node.js를 사용하며 Python 지원이 좋은 부분만 예외로 Python을 사용합니다. 클라우드 자체는 Firebase와 AWS를 조합하여 사용합니다. Firebase에 플렛폼 종속적인 기술은 대안 기술(Alternative)로 Amplify(feat. AppSync)를 사용합니다. Serverless를 기본으로 하되, Compute 집중적인 작업은 Spot 인스턴스를 활용하여 비용을 최적화하고 Spot을 관리하기 위해 Fargate나 Kubernetes를 통해 Docker를 오케스트레이션(Orchestration)합니다. 코어를 제외하고는 확장은 마이크로서비스의 형태로 확장할 예정입니다.

이어서는 여기서 설명하지 못한 몇 가지 소주제에 대해서 이야기합니다.

<small>조금 오래 된 글이긴 하지만 BaaS에 대해서 잘 정리된 글입니다.<br></small>
참고: [https://blog.back4app.com/backend-as-a-service-baas/](https://blog.back4app.com/backend-as-a-service-baas/)
