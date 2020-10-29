(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{377:function(t,s,a){"use strict";a.r(s);var i=a(42),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd"}},[t._v("#")]),t._v(" CI/CD")]),t._v(" "),a("p",[t._v("DevOps 개발 환경과 더불어 요즘 CI/CD는 필수 사항입니다.")]),t._v(" "),a("blockquote",[a("p",[t._v("CI(Continuous Integration) : 지속적인 통합"),a("br"),t._v("\nCD(Continuous Delivery) : 지속적인 배포")])]),t._v(" "),a("p",[t._v("CI/CI를 쉽게 설명하면, 자동으로 여러 시스템이 통합이 되고 배포가 된다라는 뜻입니다. 영문 표현의 지속적이라는 단어보다는 사실 자동으로가 더 중요한 부분인 것 같아 수정하였습니다. 그럼 무엇이 통합이 되고 배포가 어떤 식으로 된다는 것인지 구체적인 예를 들어서 설명하겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"ci-cd-사용-예시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-사용-예시"}},[t._v("#")]),t._v(" CI/CD 사용 예시")]),t._v(" "),a("p",[t._v("A라는 웹 개발자는 작업이 완료되면, Change Log 라는 파일에 변경 사항을 기입하고 버전을 올리고, gulp 또는 webpack을 통해서 웹소스를 번들링하고, 번들링된 파일을 ftp 를 열어서 서버에 업로드를 하고, 업로드가 완료되면 Blue/Green 배포를 하기 위해 기존의 소스와 업데이트한 소스의 라우팅을 스왑합니다. 팀원들에게 공지를 하기 위해서 Slack 을 열어서 관련된 채팅방을 찾고 해당 방에 업데이트 사항을 공유합니다.")]),t._v(" "),a("p",[t._v("B라는 앱 개발자는 작업이 완료되면, 안드로이드와 iOS를 각각 빌드하고, 각 빌드가 완료될 때까지 기다렸다가 완료가 되면 구글 플레이 스토어와 앱 스토어를 각각 열어 업데이트 파일을 일일이 올리고, 마찬가지로 변경사항을 기록하고 팀원들에게 Slack 으로 공지를 합니다.")]),t._v(" "),a("p",[t._v("중요한건 이런 일을 둘다 개발 중에 수백번 이상하게 된다는 것입니다.")]),t._v(" "),a("p",[t._v("다음은 CI/CD를 사용하는 경우입니다.")]),t._v(" "),a("p",[t._v("A,B 둘다 git에 커밋 합니다. 끝입니다. 위에 언급한 모든 일련의 과정들이 자동화 되어 최종적으로 Slack 에 공유가 되고 배포 실패의 경우도 배포 실패 사유와 함께 알림이 옵니다.")]),t._v(" "),a("p",[t._v("이것이 CI/CD 를 사용하는 이유입니다. CI/CD는 일반적으로 CI 서버가 소스를 받고 소스와 동봉된(?) 스크립트를 실행하게 되어 있습니다. 스크립트는 bash 가 될 수도 있고, node, PowerShell등 설정한 환경에 따라서 무엇이든 될 수 있습니다. 스크립트를 실행하게 된다는 것은 스크립트 내에서 내가 하고 싶은 무엇이든 할 수 있다는 뜻이 됩니다. 그것이 문서를 갱신하거나 FTP 에 업로드를 하거나 스토어에 배포하는 등 원하는 자동화 내용을 명시하기만 하면 됩니다. 사실 어차피 통합과 배포가 같이 이루어지므로 CI와 CD를 따로 생각하는 것이 큰 의미가 없기에, 앞으로는 CI라고만 표현하도록 하겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"ci-서비스들"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-서비스들"}},[t._v("#")]),t._v(" CI 서비스들")]),t._v(" "),a("p",[t._v("GitHub, GitLab, BitBucket등 대표적인 Git 호스팅 서비스들은 CI를 같이 지원합니다. GitHub를 사용하신다면 GitHub Action을 사용하면 됩니다. Private Git을 사용하기 원한다면 GitLab을 내부망에 설치하고 로컬 CI를 돌리는 것도 가능합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Jenkins")]),t._v(" "),a("p",[t._v("CI를 얘기하면 Jenkins에 대해서 얘기가 많이 나옵니다. Jenkins는 JAVA 기반의 오픈 소스로서 CI의 아버지로 봐도 무방합니다. 사실 CI들이 이만큼 발전한 것은 Jenkins 의 공이 큽니다. 오래 전부터 다양한 환경을 통합하고 빌드 자동화를 지원하였고 많은 사람들이 사용하면서 CI/CD 에 대한 인식을 많이 퍼트리는 역할을 했습니다. 제일 오래되었기 때문에 여전히 사용자도 많고 다양한 플러그인들이 존재합니다. 하지만 이제 Git 호스팅 서비스들이 CI를 내장하고 간편화하면서 점점 잊혀져가는 추세입니다.")])]),t._v(" "),a("h2",{attrs:{id:"정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정리"}},[t._v("#")]),t._v(" 정리")]),t._v(" "),a("p",[t._v("저희 팀에서는 빌드, 배포, 테스트 등 CI를 적극 활용합니다. 자세한 CI 사용법은 "),a("RouterLink",{attrs:{to:"/guides/"}},[t._v("Guides")]),t._v("에 포스팅할 예정입니다.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("CI를 제대로 사용하기 위해서는 이어지는 Docker에 대한 이해와 활용이 필수입니다.")])])])}),[],!1,null,null,null);s.default=e.exports}}]);