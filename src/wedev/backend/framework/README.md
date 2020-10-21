# Backend Framework

백엔드 프레임워크(Backend Framework)는 화면에 보이지 않는 뒷(Back)단의 일을 처리하는 프레임워크입니다. 화면에 표기를 하기 위한 데이터를 DB에서 가져와서 웹이나 모바일에 보내준다던지 로그인의 유효성을 검사하여 유저 정보를 알려주는 등의 역할을 합니다. 간단하게 서버용 어플리케이션을 제작하는 도구라고 이해하면 됩니다. 보통 프론트엔드(Frontend)는 클라이언트, 백엔드(Backend)는 서버라고 이해하고 있는데 요즘 클라이언트단에서도 직접 DB를 읽고 쓰고 제어하는 Full Stack 기술들이 나와서 이제 클라이언트/서버로만 구분하기는 조금 애매해져가는 추세입니다.

## 선택지

다양한 프레임워크가 존재하나 각 언어별로 가장 대중적인 백엔드 5대장은 다음과 같습니다.

| 프레임워크 | [Node.js](https://nodejs.org/) | [Django](https://www.djangoproject.com/) | [Spring](https://spring.io/) | [Laravel](https://laravel.com/) | [Rails](https://rubyonrails.org/) |
| --- | --- | --- | --- | --- | --- |
| 언어 | JavaScript | Python | Java | PHP | Ruby |

<small>PHP를 지양하고, Ruby는 국내 인력 수급이 원활하지 않아 [laravel](https://laravel.com/), [rails](https://rubyonrails.org/)에 대하여는 이후 다루지 않겠습니다.</small>

### Node.js VS Django vs Spring

![Node.js VS Django vs Spring](/img/wedev/node-django-spring.png)
<span class="ref">출처: [stackshare 캡처](https://stackshare.io/stackups/nodejs-vs-django-vs-spring)</span>

Node.js가 압도적입니다. 각 프레임워크는 각각의 언어를 대표하는 격의 프레임워크입니다. Python의 성장세에도 불구하고 백엔드 프레임워크로는 Node.js가 가장 많이 사용되고 있습니다. Java 기반의 Spring은 역시나 하양세입니다.

:::tip
<small>
Node.js는 백엔드만 사용되는 것이 아니고 프론트엔드에서도 사용이 되고 Spring도 Spring Boot로 검색하면 더 수치가 높게 나와서 마치 수치를 외곡하는 느낌을 받을 수 있으나 트렌드를 설명함에 있어서 큰 차이가 없습니다. 사실 외곡이라기보다는 Node.js가 광범위하여 특정 프레임워크로 지정 할 수가 없고 Spring 또한 Spring Framework, Spring Boot, Spring MVC등으로 나뉘어서 해당 사이트에서 직접적인 비교가 힘듭니다. 더 자세한 내용을 원한다면 DYOR(Do Your Own Research)하길 바랍니다.
</small>
:::


## 결정

앞서 [Language](/wedev/language/)에서 얘기했지만 Full Stack에 적합한 Node.js를 사용합니다. 해당 포스팅에도 언급해지만 언어를 먼저 선택하기 보다는 Node.js의 발전 속도와 에코 시스템, 생태계등이 제일 활발하고 Cloud Service Vendor들로 부터도 지원이 제일 빠릅니다. 이 선후 관계를 통하여 JavaScript(TypeScript)를 선택하고 백엔드를 Node.js 로 사용하게 되었습니다.

:::tip 사족
의례 사람들이 궁금해하는 각 프레임워크별 특성과 장단점등을 명시 하지 않았는데 내용이 방대하여 따로 정리하도록 하겠습니다.
:::
