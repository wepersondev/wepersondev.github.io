# Hybrid Web/App

요즘 나오는 대부분의 서비스가 그러하듯 저희도 웹과 앱을 모두 지원하는 서비스입니다. Web은 JS, Android는 Java, iOS는 Swift로 만드는 것이 일반적이지만 최근에는 Hybrid 개발 방식이 트렌드입니다. Hybrid Web/App 개발 방식이란 한번에 개발로 모든 웹과 모바일앱, 심지어 피씨와 맥까지 한번에 개발을 할 수 있는 방법입니다. 다음은 Hybrid 개발이 가능한 프레임워크들입니다.

## 선택지

### Cordova

![Cordova](/img/wedev/cordova.jpg)
<span class="ref">공식 홈페이지: [Cordova](https://cordova.apache.org/)</span>

정식 명칭은 아파치 코도바(Apache Cordova)로 예전에 PhoneGap이라는 이름에서 변경하였고 현재 어도비가 인수하여 운영중입니다. 하이브리드 개발 방식중에 제일 오래된 편에 속해서 생태계나 레퍼런스가 많습니다. 순수한 HTML5, CSS3, JavaScript를 사용하여 모바일앱을 제작 할 수 있습니다. 다양한 플러그인들을 통해 카메라, 앨범, 전화번호부, GPS, 가속계 센서등 모바일 하드웨어 기능을 사용 할 수 있습니다.

### Electron

![electron](/img/wedev/electron.png)
<span class="ref">공식 홈페이지: [Electron](https://www.electronjs.org/)</span>

Electron은 순수 HTML5, CSS3, JavaScript를 사용하여 Windows와 Mac에서 구동이 가능한 앱을 제작하는 하이브리드 개발 프레임워크입니다. 모바일보다는 PC에서 구동하는 앱에 초점이 되어 있고, Slack과 VSCode등이 Electron으로 만들어져 있습니다.

### React Native

![React Native](/img/wedev/react-native.png)
<span class="ref">공식 홈페이지: [React Native](https://reactnative.dev/)</span>

React를 사용한다면 아주 적은 러닝커브만 가지고 앱을 만들수 있는 좋은 방법입니다. React 문법을 그대로 사용하고 모바일에 최적화되어 Android와 iOS 모두 제작이 가능합니다.

### Ionic Framework

![Ionic](/img/wedev/ionic.png)
<span class="ref">공식 홈페이지: [Ionic Framework](https://ionicframework.com/)</span>

Ionic Framework는 Angular를 기반으로한 하이브리드 개발 프레임워크입니다. 프레임워크뿐 아니라 개발/테스트/배포등의 에코 시스템이 같이 구축이 되어 있습니다. 현재는 React와 Vue까지 확장을 하였으나 기술 선택 시점으로 호환성이 완벽하지 않은 상황입니다.

### 기타

Flutter 또한 하이브리드 프레임워크로써 Dart라는 언어를 사용합니다. 모바일에는 최적화되어 있는데 웹은 반대로 모바일 느낌이 나서 전형적인 PC 웹과는 약간 이질감이 느껴질 수도 있습니다. [Xamarin](https://docs.microsoft.com/ko-kr/xamarin/)은 마이크로소프트에서 운영하는 하이브리드 프레임워크로 C#을 기본으로 하고 있고 웹보다는 모바일 디바이스에 최적화 되어 있습니다. 이외에 [Framework 7](https://framework7.io/), [onsen ui](https://onsen.io/)등 다양한 하이브리드 프레임워크들이 있으니 공부삼아 찾아보시면 좋을 것 같습니다.

## 결정

저희는 완벽한 반응형 웹이 되면서 모바일 앱과 차후 PC 앱까지 원소스에 하나의 언어로 개발하기를 원합니다. 이 같은 환경에 맞는 프레임워크는 Cordova와 Electron입니다. 앞서 Vue를 프론트앤드 프레임워크 선정하였는데 Cordova, Electron 은 Vue 와 궁합이 잘 맞습니다. 타 프레임워크들은 다른 언어나 환경을 스위칭해야 하거나 웹과 모바일 소스가 분리되기 쉽습니다. 원소스에 하나의 환경에서 멀티 플렛폼 개발을 하기에는 Vue + Cordova + Electron 이면 TypeScript(또는 JavaScript) 하나만 가지고 가능합니다. 이후 설명할 백엔드 Node.js 를 활용한다면 완벽하게 풀스텍으로 웹/앱/서버까지 하나의 언어와 환경으로 개발이 가능해집니다.
