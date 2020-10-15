# Frontend Framework

프론트앤드 프레임워크는 화면에 보이는 웹/앱을 제작하기 위한 도구입니다. 다양한 프레임워크들이 존재하지만 사람들이 많이 사용하고 저희 프로젝트에 적합한 몇가지만 선정해 보았습니다. 꼭 저희 프로젝트가 아니더라도 그냥 2020년 제일 Hot 한 프론트앤드 프레임워크를 뽑으라고 하면 다음 3개가 될거 같습니다.


## 선택지

### React

![react-logo](/img/wedev/react-logo.jpg)
<span class="ref">공식 홈페이지: [react](https://reactjs.org/)</span>

Facebook이 개발하였고 Virtual DOM을 사용함으로써 성능이 좋고 재사용성이 높은 컴포넌트 방식의 개발에 최적화 되어 있습니다.

**장점**

- Virtual DOM을 활용한 높은 성능
- React Native를 통한 모바일 개발
- 국내 최고 점유율로 인력 수급이 원활
- JSX: 별도의 HTML을 사용하지 않고 JS와 결합

**단점**

- 자유도가 높기 때문에 규약(Convention)과 협의(Consensus)가 필요
- 약간의 러닝커브
- JSX: JS와 결합이 되어 있어 직관성이 떨어짐, 장점이자 단점
- 초기 TypeScript 지원 미흡(현재 가능)
- 공식 문서 빈약

<small>React가 SEO가 떨어진다는 지적이 많은데 이것은 SPA의 단점이지 React 자체의 단점이 아니며 SSR로 극복 가능(이후 포스팅에 자세히 설명)</small>


### Angular

![angular-logo](/img/wedev/angular-logo.jpg)
<span class="ref">공식 홈페이지: [angular](https://angular.io/)</span>

Google 개발하였고 TypeScript 기반으로 되어 있습니다. MVC, MVVM, DI, Observer등 다양한 디자인 패턴을 기본으로 지원하며 대규모 어플리케이션 제작에 용이합니다.

**장점**

- Made by Google
- TypeScript: 다른 프레임워크들은 JavaScript를 기반으로 TypeScript를 사용 할 수 있게 되어 있는데 Angular는 TypeScript 자체로 제작 및 개발
- 양방향 바인딩
- 공식 문서 잘 구성 되어 있음

**단점**

- 타 프레임워크보다 월등히 높은 러닝커브
- 단순한 프로젝트에 사용시 더 복잡함
- 타 프레임워크 대비 번들 사이즈
- 국내 구인/구직이 힘듬

### Vue

![vue-logo](/img/wedev/vue-logo.jpg)
<span class="ref">공식 홈페이지: [vue](https://vuejs.org/)</span>

React와 마찬가지로 Virtual DOM을 사용하고 컴포넌트 방식의 프레임워크입니다. 타 프레임워크들에 비해서 제일 늣게 나와서 기존의 프레임워크들의 장단점을 교묘히 결합하였습니다.

#### 장점

- 하루만에도 배울수 있는 러닝커브
- 단일 파일 컴포넌트: 한 파일에서 HTML, JS, CSS 를 분리하여 개발이 가능
- HTML 템플릿 분리를 통한 직관성
- 제일 가볍게 작동하며 번들 사이즈 또한 작음

#### 단점

- 타 프레임워크 대비 점유율이 낮음
- 국내 인력 수급이 원활하지 않음
- 초기 TypeScript 지원 미흡(현재 가능)

### Flutter

![flutter-logo](/img/wedev/flutter-logo.jpg)
<span class="ref">공식 홈페이지: [flutter](https://flutter.dev/)</span>

Flutter는 구글에서 최근에 밀고(?) 있는 프론트엔드 프레임워크입니다. 아무래도 Angular가 복잡하고 무겁다보니 자체적으로 가볍고 Fancy한 프레임워크가 필요했던 모양입니다. 글을 쓰는 시점이 아닌 기술을 선택하는 시점에서 인지도가 너무 낮았고 충분히 R&D가 되지 않은 상태여서 배재를 하였지만 현재 발전속도나 내용으로 봐서는 꽤 좋은 프레임워크중에 하나인것 같습니다.


## 비교

![frontend-framwork-stackoverflow](/img/wedev/frontend-frameworks-stackoverflow.png)
<span class="ref">출처: [stackoverflow servey 2019](https://insights.stackoverflow.com/survey/2019/)</span>

3가지 프레임워크 다 개발자들의 워너비 프레임워크임이 분명하고 점유율 또한 React > Vue > Angular 순으로 차트와 비슷합니다.

| 구분 | React | Vue | Angular |
| --- | --- | --- | --- | --- |
| 개발자 | Facebook | Evan You | Google |
| GitHub⭐ | 157K | 174K | 66K |
| DOM | Virtual DOM | Virtual DOM | Real DOM |
| 데이터 바인딩 | 단방향 | 단방향 | 양방향 |
| 번들 사이즈 | 43K | 23K | 143K |
| 러닝커브 | 중 | 하 | 상 |
| 퍼포먼스 | 상 | 상 | 중 |
| 생태계 | 상 | 중 | 중 |
| 국내인력 | 많음 | 중간 | 적음 |

## 결정

3가지 모두 사용해본 결과 적응하면 시니어의 입장에서 큰 차이는 없습니다. 가장 중요하게 생각한 부분은 역시나 인력 수급과 생산성입니다. 그만큼 스타트업에서 채용이 쉽지가 않습니다. 단순히 인력 수급 현황만 본다면 React가 최우선이나 저희가 빠르고 가볍고 확장성 있게 가기 위하여 Vue를 선택하였습니다. Vue는 러닝커브가 작기 때문에 아주 적은 트레이닝만으로도 높은 생산성을 낼 수가 있습니다. 또한 Vue에 최적화된 UI 프레임워크가 저희 프로젝트와 잘 맞는 것이 있어서 선택하게 되었고 이는 이후 포스팅에 설명 예정입니다.
