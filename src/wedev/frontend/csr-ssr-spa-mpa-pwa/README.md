# CSR/SSR, SPA/MPA, PWA

이번 주제는 렌더링(Rendering)방식과 웹아키텍처(Architecture)에 관한 얘기입니다. 렌더링/웹아키텍처라는 말보다는 SSR, SPA등 용어를 주로 사용함으로 주제에 용어를 나열 하였습니다. 이 주제는 정확히 기술 스택(Tech Stack)이라기 보다는 스택 구성에 영향을 미칠 수 있는 내용이고 웹 개발자라고 하면 필수적으로 알아야 하며 두가지 주제가 연관성이 있어서 묶어서 포함하였습니다.

## CSR(Client Side Rendering) vs SSR(Server Side Rendering)

렌더링(Rendering)방식이란 결국 화면에 그려지는 것은 HTML인데 이것을 누가 하느냐 주최에 따라서 CSR(Client Side Rendering)과 SSR(Server Side Rendering)로 나뉘게 됩니다.

> "내가 HTML, JS, CSS를 코딩해서 웹서버에 올리면 그게 끝 아냐? 서버에서 어떻게 렌더링을 한다는거지?"

전통적인 방식으로 웹 개발을 하는 분들은 이해가 잘 안될수도 있습니다. CSR, SSR이라는 개념 자체는 오래 되었지만 이 말이 본격적으로 대두대기 시작한것은 JavaScript를 기반으로한 웹 프레임워크들이 대세가 되면서부터 입니다. 앞서 얘기한 React, Angular, Vue등입니다.

다음은 JS 기반 웹 프레임워크들의 시작 index.html 입니다.

``` html
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

body 안에 div 하나만 있습니다. 실제로 이 뼈대 하나만 다운받습니다. 우리가 화면을 볼때는 div안에 다양한 tag들이 존재하는데 이를 html파일과 함께 다운받은 js 파일의 로직을 통해서 동적으로 테그나 스타일들을 DOM에 더하여 그리기 때문입니다.

다음은 최종적으로 유저가 화면에서 보는 html 의 예시입니다.

``` html
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>이것이 최종적으로 화면에서 보고 있는 내용입니다.</p>
  </body>
</html>
```

쉽게 얘기하면 뼈대만 받고 브라우저(Client)에서 동적으로 DOM을 그리게 되면 CSR이고 위와 같이 이미 다 그려진 DOM을 받게 되면 SSR입니다.

### CSR(Client Side Rendering)

![CSR](/img/wedev/csr.png)
<span class="ref">출처: [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)</span>

CSR은 조금 단순합니다. JS 프레임워크를 쓴다고 가정했을때, 각 프레임워크 문법에 맞게 코딩하고 빌드를 하게 되면 최종적으로는 브라우저가 이해 할 수 있는 HTML, CSS, JS 형태의 파일이 아웃풋으로 나오게 되고 이를 웹서버에 FTP든, 터미널이든 올리기만 하면 됩니다. React, Vue, Angular 무슨 프레임 워크이든 동일합니다. 이때 웹서버는 아주 단순히 올려놓은 파일을 전달해주는 전달자 역할만 합니다. 브라우저는 웹서버로부터 다운받은 파일을 그냥 실행 할 뿐이고 JS파일을 실행하면서 DOM에 내용을 추가하면서 그리게 됩니다.

초기에 JS를 읽어서 무엇을 그려야 할지를 판단하고 그리는 작업을 하는 동안 딜레이가 생기게 됩니다. 반면에 이후 작업에 있어서는 서버의 의존도가 없이 클라이언트 혼자 그릴 수 있음으로 빠른 화면 전환이나 인터랙션(interaction)이 가능합니다. index.html 에 단순히 뼈대만 있기 때문에 검색 엔진의 봇들이 크롤링(crawling)할 때 아무 내용이 없어서 SEO에 취약합니다.

### SSR(Server Side Rendering)

![SSR](/img/wedev/ssr.png)
<span class="ref">출처: [The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)</span>

SSR은 HTML, CSS, JS를 직접 올리는 것이 아니라 해당 파일들을 만들어 낼 수 있는 로직을 올리고 서버에서 해당 로직을 실행해서 최종적으로 HTML, CSS, JS를 만들어 브라우저에 전달합니다. 만들어진 HTML 파일에는 이미 DOM이 다 구성이 되어 있습니다. 로직을 올린다는 것은 결국 실행 가능한 Function을 올린다는 것이고 이는 백엔드 프레임워크에 해당 됩니다. 백엔드가 Spring 기반이면 Java 소스를 올리는 것이고, django는 Python, Node.js는 JavaScript 소스를 올려서 실행하게 됩니다. 백엔드 내용은 차후에 자세히 포스팅 됩니다. 지금은 SSR은 브라우저에서 보는 파일을 올리는 것이 아니고 브라우저에서 보는 파일을 만들어 낼 수 있는 로직을 포함한 파일을 서버에 올려서 해당 파일을 만들어 내는구나 정도로만 이해하면 됩니다.

이미 DOM 이 다 구성된 파일을 브라우저가 받기 때문에 바로 그릴수가 있어서 초기 구동 속도가 빠릅니다. DOM에 이미 내용이 다 차있기 때문에 검색 엔진들이 정보를 수집할때 정확한 정보를 가져갈 수 있어서 SEO에 좋습니다.

### CSR vs SSR 정리

여기까지는 어찌 보면 다른 블로그에서도 흔하게 찾아 볼 수 있는 뻔한 내용입니다. **저희 블로그는 평범하지 않기 때문에(?)** 남들이 잘 얘기하지 않는 내용을 언급해보려고 합니다. 초보 개발자 분들은 조금 어려운 내용일 수도 있습니다.

**CSR이 초기 구동이 늣고 SSR이 빠르다?**

JS 기반 프레임워크는 CSR이든 SSR이든 주최가 다를 뿐이지 누군가는 JS를 읽어서 DOM을 구성해야 합니다. 만약에 서버가 오래된 팬티엄이고 내 PC가 i9 최신 모델이면 서버에서 JS를 읽어서 구성하는 것보다 내 PC가 JS를 읽어서 구성하는 것이 훨씬 더 빠릅니다. 게다가 서버는 다수를 상대함으로 수백~수천의 유저에게 DOM을 구성하여 보내주어야 하지만 내 PC는 내꺼 하나만 구성하면 됩니다. 서버에서는 캐싱을 적용 할 수 있지 안냐고 반문 할 수 있고, 실제로도 SSR은 주로 캐싱과 함께 구현을 하긴 하지만 이는 정적인 컨텐츠가 많은 경우에만 유효한 것이고 동적인 컨텐츠가 많다고 하면 결국 캐싱을 활용도가 떨어지고 서버에 부담은 그대로 갑니다.

**CSR은 SEO에 취약하다?**

CSR이 SEO에 취약한것은 사실이나 그 전에 앞서 내 서비스 전체가 SEO가 필요한가를 고민해봐야 합니다. 모든 서비스가 다 SEO가 필요한 것이 아닙니다. 어떤 서비스는 고객의 데이터를 보호하기 위해 SEO가 일어나지 않게끔 해야 합니다. 공개되야 하는 퍼블릭 데이터만 SEO가 필요할 뿐이지 모든 데이터가 SEO가 필요하지 않습니다.

**잘 언급되지 않는 비용 문제**

CSR로 구성 할 경우 S3 같은 단순 스토리지에 올리고 전면에 Cloud Front로 구성하여 캐싱과 레이턴시를 줄이고 트레픽 비용만 지불하게 됩니다. SSR의 경우 매번 서버에서 로직을 실행하는 비용을 추가하게 됩니다. 아까도 언급했지만 동적 컨텐츠가 많은 경우 캐싱도 무효화 됩니다. 인스턴스를 Auto Scale 하거나 Serverless 기반에 Function을 사용하더라도 CSR과 비교해서 비용이 수백~수천배까지 차이가 날수 있습니다.

얘기하고자 하는 것은 CSR, SSR을 단순비교하여 머가 빠르고 좋다라기 보다는 **내 프로젝트나 서비스 구성에 맞는 방법을 사용**해야 한다는 것입니다. 고객의 데이터를 보호해야 하는 경우나 비용이 민감할 경우 CSR를 택할 수 있고, 정적 콘텐츠와 퍼블릭 데이터가 많은 경우에는 SSR을 선택하는 것이 좋고, 두 가지를 섞어서 서비스를 구성 해야 할 수도 있습니다.


## SPA(Single Page Application) vs MPA(Multi Page Application)

SPA 또한 JavaScript 기반 프레임워크들이 대중화 되면서 자주 언급된 용어입니다. 개념 자체는 단순하고 그 전부터 있어 왔습니다. 글자 그대로 SPA는 하나의 페이지(Single Page)로 구성된 웹이고 MPA는 여러 개의 페이지(Multi Page)로 구성된 웹입니다. (영어상 Application으로 되어 있지만 지금은 그냥 웹으로 이해하는 것이 더 편할 것 같습니다.)

기술적으로는 SPA는 어떤 페이지를 접속하더라도 HTML, CSS, JS 동일한 파일 하나만 접속한 페이지에 맞게 화면을 구성하고 MPA는 페이지별로 해당 페이지에 맞는 HTML, CSS, JS 파일을 받아서 화면을 구성합니다. 고전적인 방식이 MPA이며 아직도 많이 사용되어지고 있고 요즘 최근 JS 프레임워크들은 SPA를 기본으로 하고 있습니다.

유저 입장으로 보았을때는 단순히 페이지 내용이 확 바뀌고 브라우저상에 URL이 다르면 다른 페이지로 인식합니다. SPA의 트릭은 하나의 페이지에서 JS를 통하여 보고 있는 DOM의 내용을 모두 제거하고 다른 컨텐츠로 DOM을 채운 다음에 브라우저상에 URL을 강제로 변경하여 실제로 방문한적도 없는 URL을 방문하여 해당 페이지를 보고 있는 느낌을 주는 것입니다. (개인적으로 누군가 저에게 SPA에 대해서 처음에 이런 식으로 설명해 주었으면 이해가 더 빠르지 않았을가 생각하여 적어보았습니다.) MPA는 일반적으로 하이퍼링크를 클릭했을때 해당 페이지로 가고 화면이 한번 깜빡이면서 새로운 페이지가 로드되고 그때 해당 페이지에 맞는 HTML, CSS, JS를 받아 화면을 그리는 고전적인 방식입니다.

### SPA, MPA 언제, 무엇을 선택해야 하는 것인가?

사실 SPA, MPA를 먼저 선택하기 보다는 사용하는 프레임워크나 아키텍처에 따라서 SPA, MPA가 정해진다는 표현이 더 맞을 것 같고 개념상으로 이것이 어떻게 다른지를 이해하고 있어야 하는 것이 중요합니다.

일반적으로 CSR = SPA , SSR = MPA 이라고 공식처럼 얘기가 되는데 React, Vue, Angular 같은 JS 기반 프레임워크를 쓰면 기본적으로 HTML, CSS, JS 파일이 각 하나씩 나오기 때문에 자연스레 SPA가 되면서 CSR이 되는 것이고, 이를 SSR로 구현하면 페이지별로 렌더링을 따로 하기 때문에 MPA가 되는 것입니다. 참고로 현재 React, Vue, Angular 모두 SSR도 지원합니다. MPA 이면서 같은 JS 파일을 받고 클라이언트에서 렌더링을 하게 되면 MPA + CSR 이 되는 것이고 SPA 면서 SSR을 택하면 SSR + SPA 가 되는 것인데 원리를 이해하면 이런 식으로는 궁합이 잘 맞지 않기 때문에 처음 언급한 공식처럼 사용이 되는 것입니다. **되고 안되고 보다는 무엇이 무엇인지를 이해하는 것이 중요합니다.**

저는 개인적으로 SPA, MPA의 차이를 얘기하라고 하면 기술적인거는 다 떠나서 그냥 **화면이 한번 깜박인다**에 중점을 두겠습니다. MPA는 페이지를 새로 로드하기 때문에 화면 깜밖임 현상을 막을 수가 없습니다. SPA는 이미 로드한 페이지에서 DOM의 내용만 교체하기 때문에 이 깜박임이 보이지 않습니다. 이 "**한번의 깜박임**" 이라는 아주 작은 디테일 때문에 아주 커다란 결과를 가져 올 수 있습니다.

요즘은 모바일이 대세입니다. **통계적으로 PC보다는 모바일에서 웹과 앱의 사용량이 더 증가**하고 있습니다. 모바일의 경우 적은 트레픽과 빠른 인터렉션이 중요한데 이는 SPA와 잘 맞습니다. 초기 로딩은 살짝 느릴 수 있으나 모바일 브라우져도 결국은 자체적으로 캐싱을 하기 때문에 이후에 네트워크 트레픽의 소모가 적고 이후 설명할 PWA를 활용하면 오프라인 상태에서도 인터렉션이 가능합니다. SPA는 깜빡임이 없기 때문에 앞서 얘기한 하이브리드 방식으로 앱을 개발하여 포장하여도 유저 입장에서 일반 앱과 차이점을 느낄 수 없습니다. 하나의 서비스라 할지라도 PC 웹은 SSR로 모바일앱은 SPA/PWA로 다른 형태의 패키징이 가능합니다.

:::tip
실제로 CSS, JS 파일은 Code Spliting 에 의해서 여러개로 나뉘어져 있고 SPA, MPA 상관 없이 Lazy Loading이 가능하나 해당 내용이 들어갈 경우 문맥이 너무 복잡해져서 파일 하나라고 표현했습니다. 문맥상 복잡한 내용은 앞으로도 단순화해서 표현할 예정이고 전체 흐름을 이해하는데는 이런 식으로 설명하는 것이 더 도움이 됩니다. Code Splitting, Lazy Loading 같은 상세한 주제는 이후에 별도로 포스팅 할 예정이고 대부분 잘못 표현된 내용은 의도적이거나 사실로 표현하는 것이 오히려 이해가 더 어려워서라고 생각하고 너그럽게 보시면 될 것 같습니다.
:::


## PWA(Progressive Web App)

PWA란 프로그래시브 웹 앱(Progressive Web App)이라고 하며 웹과 네이티브 앱의 기능을 모두 갖춘 형태입니다.

간단하게는 웹처럼 URL로 접근하여 애플 스토어나 구글 스토어를 거치지 않고 모바일 디바이스 홈 화면에 바로 설치하여 사용이 가능하다는 것입니다. 설치하여 구동시 상단에 URL 컨트롤을 감추어 일반적인 모바일 앱처럼 작동하게 만들 수도 있습니다. 굳이 설치를 하지 않더라도 모든 데이터를 기본적으로 캐싱하여 오프라인 상태에서도 데이터를 볼 수 있습니다.

PWA가 아직은 대세가 아니나 대세가 되어갈(?) 형태의 개발 방식으로 이 개념을 처음 접하신다면 자세하게 공부 해보시길 추천드립니다. 구글은 이미 PWA 형태의 웹을 검색 우선 순위에서 상단에 올리기로 결정하였습니다.[참고](https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html)

"더 이상의 자세한 설명은 생략한다." 가 아니고<br>
PWA에 대해서 더 자세히 알고 싶다면 [모질라](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/)와 [구글](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp?hl=ko) 사이트를 참고 바랍니다.

다음은 구글 엔지니어가 설명한 프로그래시브 웹 앱에 대한 설명입니다.

<youtube src="//www.youtube-nocookie.com/embed/z2JgN6Ae-Bo" />

## 결정

따로 결정을 하기 보다는 원리를 이해했다면 어느 정도 답이 정해진 내용입니다.

저희 서비스의 특성상 고객 정보를 보호해야 하고 빠른 인터렉션이 필요하여 기본적으로 웹은 SPA/CSR을 사용하나, 정적인 홈페이지나 퍼블릭 데이터로 SEO가 필요한 부분에서 SSR를 이용하고 모바일은 SPA/PWA 형태를 패키징을 합니다.