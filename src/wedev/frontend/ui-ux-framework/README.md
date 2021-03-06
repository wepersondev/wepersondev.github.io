# UI/UX Framework

UI/UX Framework란 화면 상에 보이는 디자인과 UX에 일관되게 유지해주고 효율적으로 제작할 수 있는 도구입니다. 화면을 구성하다보면 단순한 인풋박스라고 할지라도 테두리의 유무, 라벨의 위치 등 일관적인 디자인이 필요하고 케로셀(Carousel) 같은 나름 고급(?) 컴포넌트들도 필요합니다. 보통 서비스에서 적게는 수십 개에서 많게는 수백 개까지의 컴포넌트들이 사용이 되는데 이 같은 컴포넌트들의 디자인과 구조를 하나하나를 제작하다보면 시간이 너무 많이 가서 이미 이쁘게(?) 만들어져 있는 프레임워크를 구해서 자신의 색깔을 입히고 수정하여 사용하는 것이 일반적인 개발 방식입니다.

:::tip
순수한 Vue, React, Angular 프로젝트에는 디자인 요소가 들어가있지 않습니다. 단순히 JavaScript를 효율적으로 개발 및 구동할 수 있는 역할만 하며 디자인과 UX는 다른 영역입니다. 요즘에는 프레임워크을 확장하거나 플러그인 형태로 디자인까지 가미된 프레임워크들이 많이 있고 디자인 요소만 떼어서 디펜던시 없이 활용 가능한 프레임워크들도 있습니다.
:::


## 선택지

저희는 Vue를 사용하기로 결정하였기 때문에 Vue를 기반으로 하거나 Vue에 최적화된 선택지만 골라 보았습니다.

### BootstrapVue

![BootstrapVue](/img/wedev/bootstrapVue.png)

[BootstrapVue](https://bootstrap-vue.org/)는 Vue를 기반으로 Bootstrap을 랩핑(Wrapping)한 프레임워크입니다. 기존의 [Bootstrap](https://getbootstrap.com/)과 차이가 거의 없으며 간단하게 사용이 가능합니다. 하지만 Bootstrap의 인기가 요즘 식고 있고 디자인의 트렌드가 좀 옮겨가는 분위기에 현재 Github에서도 적극적인 개발이 이루어지지 않고 있습니다. 앞으로도 얼마나 사용될 지는 의문입니다.

:::warning
[Bootstrap](https://getbootstrap.com/)을 그대로 사용할 경우 종속성(Dependency)이 [jQuery](https://jquery.com/) 에 있기 때문에 [Vue](https://vuejs.org/)를 사용할 경우 반드시 [BootstrapVue](https://bootstrap-vue.org/)를 사용해야 합니다. jQuery, Vue, React, Angular 등은 근본적인 목적이 같은 프레임워크라 섞어서 사용할 경우 번들의 사이즈만 커지고 사이트가 느리지게 되며 비용이 증가하고 유지보수가 힘들어집니다. 섞어서 사용한다고 구동이 안되는 것이 아니지만 가급적 피해야하는 안티 패턴(Anti-Pattern)입니다. 한번은 무분별하게 외주를 줘서 제작한 서비스에 jQuery, Vue, React가 같은 역할을 하면서 떡칠이 되어있는 소스를 보았는데 경악을 금치 못했습니다. 기술적 기반이 없이 무분별한 외주는 가비지(Garbage) 프로젝트를 양산합니다.
:::

### Vuetify.js

![Vuetify.js](/img/wedev/vuetifyjs.png)

[Vuetify](https://vuetifyjs.com/)는 Material Design을 기반으로 한 프레임워크입니다. 알파 버전 때부터 눈여겨 보았으나 당시에 최적화가 안되어 너무 느려서 상용화에 적용하지 않았습니다. 하지만 현재 v2 에서 상당한 퍼포먼스 개선과 컨트롤들의 추가로 가볍고 사용하기 좋게 최적화 되었습니다. Material Design 스타일을 좋아한다면 한번쯤 사용해보기를 추천합니다.

### Element

![Element](/img/wedev/element.png)

[Element](https://element.eleme.io/)는 깔끔한 형태의 UI 프레임워크로써 다양한 폼 요소와 확장 컴포넌트들을 지원합니다. 기능이 좀 많기 때문에 번들링 사이즈가 좀 큰 편입니다. Vue, React, Angular를 모두 지원하고 러닝커브가 낮고 직관적으로 사용하기 쉽고 간단하게 구현이 가능합니다.

### Quasar Framework

![Quasar Framework](/img/wedev/quasar.png)

[Quasar Framework](https://quasar.dev/)는 단순히 UI/UX 를 넘어서 SSR, PWA를 지원하고 Cordova와 Capacitor를 통해서 원소스로 모바일앱 빌드가 가능하며 Electorn을 통한 PC/Mac 지원과 Chrome과 같은 브라우저 Extension도 제작이 가능합니다. API Proxying과 Icon Genie등 개발에 필요한 부가적인 기능이나 툴 들도 포함하고 있습니다. 많은 양의 컴포넌트들과 레이아웃을 지원하며 UX/UX 프레임워크라기 보다는 여러가지 기능을 포함한 Vue에 강력한 확장판 수준의 프레임워크입니다. 국내는 인지도가 높지 않으나 상용 프로젝트에 적용해 본 결과 개발 효율이 엄청 높았습니다.

### 자체 제작

대부분의 큰 회사(?)들은 UI 프레임워크를 가져다 쓰기 보다는 자기만의 스타일의 UI Framework를 제작하여 사용합니다. 디자인에 특화된 프로젝트라던지 장기적으로 다양한 프로젝트를 제작 예정이라면 UI/UX 프레임워크를 직접 처음부터 제작하는 것도 좋은 방법이라고 생각합니다. 단, 개발 기간과 기획력과 디자인 인력이 충분해야 합니다.


## 정리

사실 드디어 얘기하고 싶었던 프레임워크가 나왔습니다. [Quasar Framework](https://quasar.dev/)입니다. 단순히 UI/UX가 아니라 해당 프레임워크를 사용하여 하나의 언어와 환경으로 원소스를 가지고 웹과 모바일과 PC/Mac 앱 모두를 빌드하는 것이 아주 쉽게 가능합니다. 앞서 얘기한 린팅(Linging)과 번들링과 트랜스컴파일 또한 모두 내장이 되어 있습니다. 대부분의 필요한 컴포넌트와 다양한 스타일 옵션이 내장되어 있습니다.

스타트업이 프로토타이핑 시 제일 생산성이 좋은 프레임워크는 [Quasar Framework](https://quasar.dev/)가 아닐까 싶습니다.

현재 저희 회사는 투 트랙으로 프로토타이핑과 시작하는 서비스에는 Quasar를 사용하며 장기적 플랜으로 자체 프레임워크를 제작 중에 있습니다.

