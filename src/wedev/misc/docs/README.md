# Docs

다음은 문서화에 대한 기술입니다. 협업 및 개발 관리를 위해 문서화는 매우 중요한 요소입니다.

* 기술 블로그: 현재 [VuePress](https://vuepress.vuejs.org/)를 사용하고 있습니다. 차후 [Markdown](https://guides.github.com/features/mastering-markdown/) 사용하는 다른 플렛폼으로 전환도 고려하고 있습니다.
* API: [GraphQL](https://graphql.org/)의 경우 프레임워크에 내장된 문서화 도구를 사용하고, REST의 경우 [swagger](https://swagger.io/)를 사용합니다.
* Code: 코드에 대한 문서화는 [JSDoc](https://jsdoc.app/)을 기본으로 하나 요즘 잘나온 프레임워크들이 많아서 물색중입니다.
* Commit Log: [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)을 통해 Change History를 자동화합니다.

코드와 문서의 일원화를 목적으로 합니다. 가급적 문서화 될 내용을 코드에 직접 기입하여 문서와 코드가 이질감이 생기는 일이 없게 합니다. 코드와 문서가 일원화 될 경우 문서에 대한 버전관리도 같이 할 수 있습니다. 사람은 실수를 할 수 있기 때문에 가급적 기계가 문서를 쓰는 방식이 요즘 트렌드입니다.

