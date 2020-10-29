# CSS

이번에는 CSS에 관련된 가벼운 내용입니다. 가볍다고 표현한 이유는 사실 CSS Preprocessor는 대충 아무거나(?) 써도 다 비슷하고 전체 기술 스택에 있어서 크게 영향을 미치는 부분이 없기 때문입니다. 그래도 대중성 있는 기술과 차이점을 알아야 하기에 조금 정리해보겠습니다.

## CSS Preprocessor(전처리기)란?

CSS를 사용하는데 생산성을 올리기 위해서 CSS의 문법을 조금 변경하거나 추가적인 문법을 더해서 개발을 하고 다시 네이티브 CSS 형태로 바꾸어 주는 역할을 하는 도구입니다. 쉽게 설명하면 CSS에 귀찮은 세미콜론이나 괄호 같은 부분을 다 때어버리고 들여쓰기로 구분하고 반복해서 써야 하는 루프문 같은 기능을 제공해서 쉽고 간결하게 작성하고 CSS 프레임워크가 다시 그것을 읽어들여서 원래 의도한 CSS 문법으로 다시 고쳐쓰고, 결국 최종적인 CSS 파일을 웹서버에 올리는 것입니다. 예를 들어 JS가 [Less](http://lesscss.org/), [Sass](https://sass-lang.com/), [Stylus](https://stylus-lang.com/) 같은 문법을 알 수 없기 때문에 보통 JS 구동전에 미리 처리하여 Plain CSS로 바꿔놓는 것과 같은 것을 전처리기라고 합니다.

```scss
.box
  background-color: blue
  @for $i from 1 through 3
    .btn-#{$i}
      outline: 1px solid black
```

위의 문법을 아래와 같이 바꿔 줍니다.

```css
.box {
  background-color: blue;
}
.box .btn-1 {
  outline: 1px solid black;
}
.box .btn-2 {
  outline: 1px solid black;
}
.box .btn-3 {
  outline: 1px solid black;
}
```

사용해보지 않은 사람들은 "왜 이런 번거로운 작업을 하지?" 라고 생각할 수도 있습니다. 하지만 실제로 CSS 구문을 작성하다보면 여간 귀찮은 일이 많이 있는데 축약형으로 사용하다보면 코드가 간결해지고 가독성이 올라가서 유지보수가 더 쉬워집니다. (한번도 안써본 사람이 있어도 한번만 써본 사람은 없습니다. 한번 사용하기 시작하면 마약처럼 끊을 수가 없습니다.)

CSS 전처리기들은 CSS에만 초점이 되어 있기 때문에 타 프레임워크들처럼 디펜던시가 거의 존재하지 않습니다. 쉽게 말하면 웹서버를 JAVA를 쓰던 Node를 쓰던, 프론트엔드를 React를 쓰던 Vue를 쓰던 아무 상관없이 어디서 어떻게든 쓸 수 있고 서로 영향을 미치지 않는다는 뜻입니다. 그것도 그럴 것이 그냥 단순히 CSS를 좀 변경한(Twist) 텍스트를 읽어들여서 정상적인 CSS로 다시 써주는 역할밖에 안하기 때문입니다. (좋은 기술임이 분명하나 괜히 너무 복잡하게 생각할 필요는 없습니다.)


## 선택지

다음은 CSS 전처리기 3대장입니다.

### Less

![Less](/img/wedev/less.jpg)
<span class="ref-left">공식 홈페이지: [Less](http://lesscss.org/)</span>

웹 개발을 처음 시작할 때 트위터에서 개발한 [Bootstrap](https://getbootstrap.com/)을 많이 접하고 사용하게 됩니다. 이 Bootstrap V3에서 less를 사용하였고 이것 때문에 많은 사람들이 less를 접하게 되었습니다. 기존의 CSS와 큰 차이가 없고 약간의 변형과 추가 문법이 들어갑니다. 지금 Bootstrap V4부터는 Sass를 공식으로 채용하고 less는 점점 잊혀져가고 있는 추세입니다.

### Sass(SCSS)

![Sass](/img/wedev/sass.png)
<span class="ref-left">공식 홈페이지: [Sass](https://sass-lang.com/)</span>

지금 가장 대중성있게 사용이 되고 있습니다. 기존의 CSS 문법과도 거의 대부분 호환이 되고 추가 기능들을 쓸 수 있습니다. SCSS는 Sass의 상위집합(Superset)으로 Sass 문법이 대부분 호환되나 기존의 CSS와 호환이 되도록 중괄호({})와 세미콜론(;)을 사용합니다. 둘이 비슷한데 굳이 두가지 버전을 만든 이유는 SCSS는 기존 CSS 문법과 호환이 되서 기존 문법을 선호하는 사람들이 주로 쓰고 Sass는 괄호라도 없애고 더 짧고 세련되게 쓰기 위함이라 그냥 선호도의 차이입니다.

### Stylus

![Stylus](/img/wedev/stylus.png)
<span class="ref-left">공식 홈페이지: [Stylus](https://stylus-lang.com/)</span>

3가지 전처리중 제일 늦게 나와서 조금 세련되고 기능도 많으나 성숙도와 시장 점유율이 떨어집니다. 그럼에도 불구하고 Sass 다음으로 사용자가 많아서 Stylus를 기본으로 채택하고 있는 오픈 소스들이 간혹 보입니다.

## 정리

3가지다 CSS를 할 줄 알면 하루만에 배워서 쓸 정도로 러닝커브가 낮습니다.

저희는 조금이라도 짧고 세련되게 쓰려고 Sass를 사용하고, 가끔 Stylus가 기본으로 장착되어 있는 오픈 소스의 경우 추가 설치가 귀찮으면 Stylus 그대로 사용합니다.
