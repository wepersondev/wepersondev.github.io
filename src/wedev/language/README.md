---
sidebarDepth: 2
---

# Language

개발을 이제 막 시작하는 신입이나 취준생들이 자주하는 질문입니다.

> 어떤 프로그램 언어가 좋은가요?

물론 요즘의 트렌드나 "취업하기" 또는 "경력쌓기"에 어떤 언어가 좋은지를 물어보는 것이지만 선후가 좀 잘못 된 질문입니다.

> 무엇을 하고 싶으신가요?<br>
> 구체적으로 하려는 프로젝트와 영역이 무엇인가요?<br>
> 프론트앤드? 백앤드? 풀스택? 웹? 모바일? 서비스? 무슨 서비스? 큐레이션? 핀테크? 빅데이터? 게임? 실시간? ...

프로그램 언어는 사용하고자 하는 프레임워크에 종속적입니다. [Spring Framework](https://spring.io/)는 JAVA, [Nodejs](https://nodejs.org/)는 JavaScript, [Laravel](https://laravel.com/)은 PHP를 사용합니다. 개발하고자 하는 프로젝트에 최적인 프레임워크를 선택하게 되고 해당 프레임워크에서 지원하는 언어를 쓸 수 밖에 없습니다. 비슷해 보이는 프로젝트도 구체적인 스팩에 따라 다른 프레임워크를 사용하기도 하고 팀의 스택에 맞추어 정해지기도 합니다.

**서비스/프로젝트, 팀을 고려하지 않고는 언어를 선정하는것은 옳지 않습니다.**<br>
그럼에도 불구하고 거시적으로 프로그램 언어에 대해서 조금 얘기를 해볼가 합니다.

## 프로그램 언어 트렌드 변화

### 최근 인기 언어

![top-languages-2019-stackoverflow](/img/wedev/top-languages-2019-stackoverflow.png)
<span class="ref">출처: [stackoverflow servey 2019](https://insights.stackoverflow.com/survey/2019#technology-_-programming-scripting-and-markup-languages)</span>

JavaScript가 몇년째 부동의 1위입니다. 마크업(HTML), 디비(SQL), Shell(Bash외)를 제외한 일반적인 언어의 상위 순위는 다음과 같습니다.

1. JavaScript
1. Python
1. Java
1. C#
1. PHP
1. TypeScript

### 언어 트렌드 변화

![google-trends-languages](/img/wedev/google-trends-languages.png)
<span class="ref">출처: [구글 트렌드 캡처](https://trends.google.com/trends/explore?date=all&geo=US&q=%2Fm%2F02p97,%2Fm%2F05z1_,%2Fm%2F07sbkfb,%2Fm%2F060kv)</span>

최근 몇년간 JavaScript와 Python 같은 스크립트 계열의 언어가 강세를 보이고 있습니다. 특히 Python의 약진이 두드러집니다. 모수의 차이가 커서 사진의 그래프에서 잘 보이지 않아서 Python 만 따로 사진을 첨부합니다.

![google-trends-languages](/img/wedev/google-trends-python.png)
<span class="ref">출처: [구글 트렌드 캡처](https://trends.google.com/trends/explore?date=all&geo=US&q=%2Fm%2F05z1_)</span>

Python만 따로 보면 Python의 성장세가 확실히 강하다는 것을 알수 있습니다.

전체적으로 정리해보면, Java가 한때 시장을 평정 했다가 시간이 갈수록 엄청나게 하양세에 들어섰고, PHP는 거의 사장되는 분위기입니다. Python은 엄청나게 부상하고 있으며, JavaScript는 초창기보다는 약간 줄어들었지만 계속 유지를 하고 있는 모양세입니다.

### 트랜드 변화와 역사

트렌드라는 것이 하루 아침에 만들어지는 것이 아니고 역사를 알아야 트렌드가 왜 트렌드가 되었는지를 이해하기 쉽습니다. 공학도 대부분이 처음 시작할때 공학적(?)으로 집중을 합니다. 하지만 공학도, 프로그램도, 개발도 다 사람 사는 사회에서 이루어는 것이기 때문에 해석을 할때는 인문학적으로 접근해야 하는 경우가 많습니다. 20년정도 IT 업계를 지켜봐온 사람중에 한 사람으로써 이제 시작하는 개발자들을 위해 다른 차원의 재미있는 해석을 들려주려고 합니다.

대부분 공학도들은 언어 자체의 아키텍처 및 특징에 따라서 언어가 대중화가 된다고 생각합니다. 하지만 초창기 언어의 흥망성쇠(?)는 자본주의 사회의 돈의 논리에 의해 정해진 경우가 더 많습니다. 더 정확하게는 진영의 싸움이라도 표현해도 좋을 것 같습니다. 때는 바야흐로 오라클과 마이크로소프트의 진영 싸움이 한창일때입니다. 회사 차원에서 오라클은 Java를 밀고, 마이크로소프트는 C#을 밀게 됩니다.(정확하게는 C#이 아니고 .Net인데 지금은 언어차원에서 얘기하는 것이니 이해하기 쉽게 C#이라고 표현했습니다.) 우열을 가리기 좀 힘든 상황에서 Java는 JVM(Java Virtual Machine)을 필두로 멀티 플렛폼으로 확장을 하였고 안드로이드의 흥행과 더불어 엄청난 성장세를 가지고 오게 되며, 반대로 마이크로소프트는 윈도우의 틀에 갇혀서 진영 싸움에서 밀리게 됩니다.(차후 .Net도 멀티플렛폼으로 확장합니다.) 당시 PHP는 잠깐만 배워도 금방 쓸수 있는 아주 적은 러닝커브를 통하여 세를 확장합니다. 그 이후에 어느 순간부터 JavaScript와 Python 같은 스크립트 언어들이 약진을 하면 역전이 되게 됩니다.

**그러다면 스크립트 언어들은 왜 갑자기 발전하게 되었을가?**

### 무어의 법칙

![moore's law](/img/wedev/moore-law.png)
<span class="ref">출처: [위키피디아](https://en.wikipedia.org/wiki/Moore%27s_law)</span>

인텔의 고든 무어가 주장한 법칙으로 반도체의 성능은 2년마다 2배씩 증가한다는 것이고 광범위하게는 컴퓨터의 성능은 일정 시기마다 기하급수적으로 증가한다는 법칙입니다. 이는 컴퓨터 역사 70년동안 대략 맞아온 내용입니다.

스크립트 언어의 발전을 얘기하다가 갑자기 무어의 법칙 얘기를 끄낸 것은 스크립트 언어가 발전한 것은 스크립트 언어 자체의 우수성이 아니고 하드웨어의 발전이 그 원인이기 때문입니다. 언어는 크게 컴파일러 언어와 스크립트 언어가 있는데 컴파일러 언어는 컴파일을 통해 미리 기계가 이해할 수 있는 형태로 바꾸어 실행시 빠르고, 스크립트 언어는 실시간으로 기계어로 변역하기 때문에 컴파일러 언어에 비해서 좀 느리나 실시간으로 변경이 가능하다는 장점이 있습니다. 초창기 하드웨어는 그리 빠르지 못했기 때문에 웹에서 기본적으로 사용되는 JavaScript를 제외하고 스크립트 언어들은 대부분 찬밥 신세를 면하지 못하였습니다. 하지만 눈부신 하드웨어의 발달에 의해 미리 컴파일을 하나 실시간으로 번역을 하나 큰 차이가 없을 정도가 되었고 이 시기와 맞물려 스크립트 언어들이 엄청난 발전을 하게됩니다. 물론 기계 입장에서는 아직도 컴파일러 언어가 빠르나 사람 입장에서 이제 큰 차이를 못느끼게 됩니다. (5분과 5초는 체감을 할 수 있지만 0.005초와 0.000005초는 사람이 느낄 수 없습니다.)

흔한 오해가 마치 Python이 엄청 훌륭한 언어인데 빛을 보지 못했다가 최근에 와서 대중화가 되었다고 생각하는 사람들이 있는데, 지금이라도 하드웨어 성능이 못받쳐 성능이 반감되면 Python은 사용량은 지금의 반도 되지 못 할 것입니다.

:::tip
짧은 포스팅에 모든 팩트들을 다 담아 설명 할 수 없고, 더 많은 내용이 들어 갈 경우 문맥의 요지를 해 칠수가 있어서 생략되거나 언급하지 못한 내용이 많습니다. 당연히 단순히 하드웨어 발전 하나로 스크립트 언어가 발전한 것은 아니고 다양하고 복합적인 이유가 있으며 이는 이어서 설명 예정입니다. 대부분 저희 포스팅을 보면서 문구 하나하나에 집중하기 보다는 이런 견해도 있구나라고 이해하시면 좋을 것 같습니다.
:::

### 언어 생태계의 대결

**PHP는 스크립트형 언어인데 왜 사양길로 접어들고 있을가?**

개인적으로 PHP 언어는 이제 죽어간다고 생각합니다. PHP 언어를 비하하는 것이 아니고 단순히 국내외 PHP 연봉 변화만 검색해보아도 알 수 있습니다. 워드프레스, 넷플릭스, 페이팔등 이미 많은 회사들이 PHP에서 JavaScript(Node.js)로 옴겨가고 있습니다. [Laravel](https://laravel.com/)을 필두로 어찌든 갱생을 해보려고 하고 있지만 회생을 길이 잘 보이지 않습니다. PHP도 Python가 같은 스크립트 언어인데도 왜 하양길로 들어가고 있을가요?

최근의 들어서 언어 트렌드 변화는 진영의 대결을 넘어서 생태계의 대결로 굳어지고 있습니다. 오픈 소스의 인식 변화와 활성화를 필두로 이제 단순히 언어보다는 언어를 둘러싸고 있는 오픈 소스들과 에코 시스템들을 포함한 생태계 전체가 언어의 발전과 대중화를 이끌고 있습니다. 이는 PHP의 사양길의 원인입니다. JavaScript는 NPM으로 Python은 PIP으로 오픈 소스를 기반으로 한 패키지 생태계를 잘 구축한 방면에 PHP는 해당 생태계 구축에 실패 했다고 볼 수 있습니다. 현재 생태계 및 에코 시스템을 제일 잘 구축했다고 평가받고 있는 언어가 JavaScript이며 같은 이유로 몇년째 인기 언어 최상위를 유지하고 있습니다. 위의 구글 트렌드 흐름으로 볼때 JavaScript 하양 되었다기 보다는 다변화된 언어 환경으로 인해 모수가 상대적으로 줄어들어 차트상에서 그렇게 보이는 것이지 실질적으로 Node.js 를 필두로 엄청난 상향세를 유지하고 있습니다. (구글 트렌드가 모든 것을 말해주지 않습니다.)

:::tip
> 페이스북은 아직도 PHP를 쓰는대요?

당연한 얘기지만 페이스북 쓴다고 무조건 트렌드가 되는 것도 아니고 업계 전반에 걸쳐서 보아아 합니다. AWS, GCP, Azure등의 클라우드 서비스의 예를 보면 신기능이나 SDK 업데이트하면서 제일 먼저 지원하는 것이 Node.js(JavaScript), Python 이고 PHP는 지원 속도가 떨어지거나 지원을 종료하는 경우가 더 심각해지고 있습니다.
:::

### 언어 트렌드 변화 정리

시작에서 얘기했듯이 언어는 프레임워크에 종속적이라 인기 있는 언어보다는 인기 있는 프레임워크를 찾아보고 해당 프레임워크가 우리 프로젝트/팀에 잘 맞는지를 따져보는 것이 중요합니다.

글쓰는 시점에서 프론트엔드의 대표적인 프레임 워크는 모두 JavaScript를 기반으로한 React, Angular, Vue 이며, 백엔드는 Node.js(JavaScript), Django(Python), Spring(Java) 정도가 됩니다.

사실 얘기하고자 하는 것은 **생태계라는 것이 공학적인 이유보다 인문학적인 이유가 많음**으로 개발자로써 꼭 언어의 장점이나 특수성에만 집중하면 안되고 인문학적인 배경을 함께 보는 시선을 길러야 트렌드를 읽고 대응해 나갈 수 있다는 것입니다.

## Full Stack 최적의 언어

![developer-type](/img/wedev/developer-type.png)
<span class="ref">출처: [stackoverflow servey 2019](https://insights.stackoverflow.com/survey/2019#developer-roles)</span>

최근 개발자 타입의 반이상이 Full Stack 입니다. (미국 기준입니다. 한국은 아직도 고전적인 Half Stack이 많습니다.) 앞서도 얘기했듯이 이제 Full Stack이 대세가 되어 가고 스타트업의 입장에서는 더욱 더 중요합니다.

### Full Stack에 맞는 언어는 무엇이 있을가?

프론트 앤드와 백엔드의 언어가 꼭 같을 필요는 없습니다. 10년도 더 된 얘기지만 하나의 서비스를 만들면서 혼자서 웹은 JavaScript, 윈도우 앱과 백앤드는 C#(.net), 안드로이드는 Java, iOS는 Object-C 로 하고 C++로 JDK 라이브러리, 스크립팅 작업에는 Python을 사용하면서 한번에 제작한 적이 있습니다. IDE는 Visual Studio, Eclipse, X-Code, Terminal 을 모두 열어 놓고 온갖 플렛폼과 언어를 넘나들면서 개발을 해야 했습니다. 처음에는 좀 해깔렸으나 차츰 적응하게 되고 언어와 플렛폼을 넘나들면서 동시 개발하는 것도 할만은 하구나 하고 느꼈습니다. 하지만 언어/IDE/플렛폼간의 스위칭을 줄이고 각각 작업하기 보다는 한번의 작업으로 멀티 플렛폼이 구축되었다면 더 좋지 않았을가 생각해봅니다.

Windows, Mac, iOS, Android, Web, Server 를 한번에 개발 할 수 있는 언어는 JavaScript가 유일합니다. 멀티 플렛폼 개발에 대한 요구가 높아지면서 많은 하이브리드 개발 방식이 나와 있으나 거의 모든 플렛폼을 통틀어서 개발 할 수 있는 언어를 하나만 뽑는다면 JavaScript 입니다. 웹은 JavaScript 기반 프레임워크, 백엔드는 Node.js, 모바일 앱은 Cordova/Ionic/Flutter, PC/Mac은 Electron등으로 개발이 가능합니다.(하이브리드 개발에 대한 자세한 설명은 이후에 나옵니다.)


### JavaScript vs TypeScript

스트롱 타입만 하다가 JS 오니깐 너무 신세계고 편해, 근데 갑자기 TypeScript 나오니깐 이게 왠? JS 장점을 다시 까먹으로 하지? 했는데 프로젝트 규모가 늘어나고 협업이 늘어나면서 안정성과 유지보수에 더 초점이 되고 TypeScript 써야 겠다.


## 언어의 선정

여러모로 보아 TypeScript로 선정 일부 간혹 JavaScript를 사용하거나 Python을 사용 예정.

