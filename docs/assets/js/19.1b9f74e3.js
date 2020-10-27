(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{367:function(s,e,a){"use strict";a.r(e);var t=a(42),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"일반사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#일반사항"}},[s._v("#")]),s._v(" 일반사항")]),s._v(" "),a("p",[s._v("컨벤션(Convention)이란, 같이 작업을 하면서 통일성을 지키기 위해서 정한 규약입니다. 요즘은 Lint등을 사용하여 코딩 컨벤션이 강제로 지켜집니다.")]),s._v(" "),a("p",[s._v("하지만 코딩 스타일을 제외하고도 repo 이름, 커밋 로그 규칙, 서비스/프로젝트 이름, 파일/폴더 구조등 다양한 컨벤션이 아직 존재하고 Lint로써 해결 못하는 규칙들도 존재하기에 개발을 시작하기전에 제일 먼저 컨벤션을 작성하는 것이 기본입니다.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("대부분의 컨벤션은 엄마가 좋아? 아빠가 좋아? 같은 규칙입니다. 딱히 어떤 것이 정답이라는 것은 없지만 한쪽 방향으로 정하여 통일성을 부여하는 것은 중요합니다.")])]),s._v(" "),a("h2",{attrs:{id:"네이밍-규칙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#네이밍-규칙"}},[s._v("#")]),s._v(" 네이밍 규칙")]),s._v(" "),a("p",[s._v("소문자, 숫자, -(Dash) 를 주로 사용합니다.")]),s._v(" "),a("p",[s._v("소문자, 대문자를 섞어 쓰다보면 실수를 할 수 있습니다. 소문자만 사용하게 되면 불필요한 고민을 덜게 됩니다.\n요즘은 '_' 보다는 '-'를 많이 사용합니다. github, npm, docker등 대부분이 '_' 대신 '-'를 사용합니다. 또한 url도 '-'를 많이 사용하는 추세입니다.")]),s._v(" "),a("p",[s._v("DB의 경우 '_'(Underscore)를 사용합니다. 많은 사람들이 아직도 쿼리에는 대문자, 테이블 및 필드명에는 소문자를 주로 사용하기 때문입니다. 단, ORM을 사용하는 경우에는 PascalCase를 사용합니다. 보통 클래스명은 대소문자를 섞어서 쓰는데 객체 클래스와 데이터가 1:1 로 맵핑이 되기 때문입니다.")]),s._v(" "),a("p",[s._v("대부분의 경우, 이 룰을 따르며 예외의 경우 각 컨벤션에 명시되어 있습니다.\n굳이 이유에 대해서 더 따진다면 그냥 매번 Shift 키 한번 덜 눌러도 된다고 얘기하겠습니다.")]),s._v(" "),a("h3",{attrs:{id:"prefix-or-suffix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefix-or-suffix"}},[s._v("#")]),s._v(" Prefix or Suffix")]),s._v(" "),a("p",[s._v("서비스, 프로젝트, 파일명등을 지을때 공통된 키워드를 앞으로 놓을지 뒤로 놓을지에 대한 컨벤션입니다.\n알파벳으로 소팅해서 볼때 구분하기 쉬운 방법을 선택합니다.")]),s._v(" "),a("h4",{attrs:{id:"prefix-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefix-방식"}},[s._v("#")]),s._v(" Prefix 방식")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GitHub 같이 다양한 repo 이름이 섞여 있는 경우")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 회사명을 prefix 하면 우리 회사 repo 만 필터링해서 보기 편합니다.")]),s._v("\nweperson-project-a\nweperson-project-b\nweperson-project-c\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"suffix-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suffix-방식"}},[s._v("#")]),s._v(" Suffix 방식")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# S3, Firebase 같이 이름은 Global Unique 해야 하나")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 내 콘솔에서는 내 서비스만 보이는 경우는 Suffix 방식을 사용합니다.")]),s._v("\na-project-weperson\nb-project-weperson\nc-project-weperson\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("각 서비스 및 네이밍에 대하여 Prefix, Suffix를 명시할 예정입니다.")])])}),[],!1,null,null,null);e.default=r.exports}}]);