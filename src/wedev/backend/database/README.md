# Database

이번 주제는 데이터베이스(Database)에 관련된 내용입니다. 항상 그러지만 이 블로그는 평범하지 않기 때문에(?) 기존에 전통적인 방식으로 디비에 대해서 공부를 했던 분들은 이번 포스팅을 보면 기존 가치관(?)이 흔들릴 수 있으니 미리 알려드립니다. 처음 디비를 공부 하는 사람들은 차후 레퍼런스를 볼때 아래 개념들을 참고하여 생각을 해보시면 좋을 것 같습니다.

디비에서 SQL 주제 하나만 가지고도 300 페이지 짜리 포스팅 작성이 가능합니다. 그만큼 디비에 관련해 공부해야 할 양이 방대합니다. 예전에는 DBA(Database Administrator)라고 해서 디비만 전문으로 하는 사람이 있을 정도로 디비 하나만 때놓고 보아도 아주 큰 분야입니다. 요즘은 백엔드 개발자가 디비도 다하고 프론트엔드까지 하면서 풀스택이 되고 데브옵스(DevOps)까지해서 인프라까지 다 하니깐 필수적으로 알아야 하는 사항입니다.(~~이놈의 직업은 치매는 안걸린다고 합니다.~~) 어째뜬 필수적인 개념 위주로 짧게 설명하게 최대한 노력해 보겠습니다.

고전적인 디비의 개념들이 틀린 것이 아닌데 요즘 기술 발전이 하도 빠르다보니까 구기술과 신기술이 섞이면서 헤깔릴 수 있게 된 것 같습니다. 오래된 시니어들이야 해당 풍파(?)를 다 겪었기 때문에 이상할 것이 없을 수도 있지만 새로 개발을 시작하는 분들은 기존에 오래된 책들이나 전통적인 개념으로 요즘 나오는 기술을 보면 매우 해깔릴 수도 있을것 같습니다.

다음은 고전적인 잘못된 일반 상식들입니다.

* 디비는 크게 SQL과 NoSQL로 나뉘어져 있다.
* SQL은 Schema가 존재하고 NoSQL은 Schemaless이다.
* SQL은 관계형 데이터베이스(Relational Database)이고 NoSQL은 비관계형이다.
* NoSQL은 트렌젝션(Transaction)과 트리거(Trigger)를 지원하지 않는다.

이는 무슨 디비는 뭐다라는 식으로 정해서 생각해서 이해하다보니 그런것 같습니다. 각 주제별로 아래 자세히 설명합니다.

## 디비 주요 개념

디비에 관련된 주요 개념으로 중심으로 정리해 보겠습니다.

### SQL vs NoSQL

SQL은 Structured Query Language의 약자로 디비가 아니고 언어입니다. NoSQL은 SQL이 아닌 것들을 한번에 부르려니깐 적당한 단어가 없어서 그냥 No + SQL이라고 한 것입니다. SQL의 반대 개념이 아니고 그냥 "SQL이 아닌 것들"에 더 가깝습니다.(이것은 소설이 아니고 팩트입니다.)

보통 MSSQL, MySQL는 SQL, MongoDB는 NoSQL 공식처럼 외우는데, 어떤 디비가 SQL이고 NoSQL인 것이 아니고 해당 디비가 SQL을 지원하느냐에 따라서 SQL DB인지 아닌지를 구분하게 됩니다. 만약에 MongoDB가 SQL을 지원하면 MongoDB가 SQL DB가 되는 것입니다. 요즘은 NoSQL에 추상화 된 레이어를 올려서 SQL 언어로 질의를 할 수 있게하는 오픈 소스프로젝트가 많이 나와 있습니다. 디비와 언어의 개념을 분리하여 생각하여야 합니다.

### Schema

[아카데미 사진]

스키마는 정형화 된 테이블이 있느냐

### Relations

[아카데미 사진]

관계. 보통 관계형 데이터베이스 Relation Data베이서 줄여서 rdb라도 하고 일반적으로 무슨무슨 데이터베이를 칭하는데 이것은 이제 좀 맞지 않는 표현이다.
웃긴게 AWS 리인벤트를 계속 봐온 사람들은 알겠지만 DynamoDB 처음에 디비 하나에 다 쳐박으라고 하더니 이제는 다 쪼개라고 ㅋㅋ

### Transaction & Trigger

몇년 전에 이 포스팅을 작성 했으면 아니라고 할뻔한? 내용. 그 만큼 기술 발전이 빠름

### Big Data

데이터 웨어하우스, 데이터 레이크, Hadup, RedShift, BigQuery, Athena
관련 기술로 Kinesis

## 고전적인 디비 개념

고전 적인 개념 설명

SQL을 이용해 질의하고 스키마가 있고, 관계가 있고
MSSQL, MySQL, MariaDB, Postgres,

NoSQL은 Json 비 정형 데이터를 저장하고 관계를 가지지 아니하고

아테나, 다이나모디비, 파이어스토어


## 실무에서 디비를 나누는 기준

엄연하게 자시의 기준(사실 내 기준)이지만 실무에서 디비를 나누는 기준에 대해서 설명을 좀 해보겠다.

### 스타트업이냐? 아니냐?

스타트업이면 불확실성이 크다. 계속 데이터가 추가되고 변하니깐 NoSQL의 형태가 좋다.

### 크냐 작냐?

이거 디게 쉬운 개념이다. 크면 빅데이터, 작으면 그냥 일반. 큰거에 대한 개념은 로깅, 히스토리 성격의 데이터, 기하급수적으로 증가 가능한 데이터.
쉬운 예로, 100만명이 사용하는 서비스라고 할때 한명 한명 데이터는 아무리 많아야 100만이지만 1명당 100개씩의 액션을 해서 로그가 남으면 100만 * 100 해서 억단위가 나옴. 이런 데이터는 일반 디비로 처리하기는 좀 힘듬.

### 개별 데이터 관점, 통계 관점

NoSQL이 안되는건 아니지만 통계적 처리를 하기가 조금 까다롭다. 주기적으로 통계를 내야 하는 내용은 SQL 디비를 이용하는 것이 좋다. 개별 데이터지만 주기적인 통계가 필요하다면 NoSQL 에서 트리거를 통해서 SQL 디비를 갱신해주고 통계는 SQL을 이용해서 뽑아 내는 하이브리드 방식도 추천한다.

### 실시간이냐? 나중에 해도 되냐?

유저가 방금 검색어 한 검색어를 기반으로 그 페이지 하단에 관련된 광고를 띄워주거나, 쇼핑을 할때 관심 있는 상품들을 클릭하면 연관성이 높은 상품을 오른쪽에 바로 추천해주는 시스템 같은거. 혹은 살지 말지 고민하고 있을때 할인 쿠폰을 띄워주어 구매를 유도한다던지. 다양하게 활용되고 있음.
이런거를 하려면 로그를 그냥 쌓는 것이 아니고 로그 자체를 실시간 스트리밍으로 분석해야 하는데 이거 구현하기에 최적화 된거는 현재는 Kinesis 이다. 당장 도입을 하지 않더라도 R&D 할만한 내용이고 차후에 도입하기도 유연하니 한번 공부해보기 바란다.

## 데이터 드리븐 개발

이거 디게 중요한 내용임. 특히 스타트업의 경우 비즈니스 관점에서 성공/실패를 가르는 요인이 될 수 있음. 개발자라고 개발적인 것만 알면 안됨. 회사의 존망이 걸린 문제이니 개발자들도 잘 보았으면 함.

데이터 중심으로 개발을 함, 지표가 중요. 심하게 표현하면 개발 시간보다 지표 심는데 시간을 더 할애 해도 될만큼 중요.

꼭 스타트업에만 해당되는 사항은 아니지만 스타트업 같이 무엇을 원하는지 모름

요즘 같은 시대에 데이터 분석가? 하나씩은 붙여서? 개발하는 것이 중요하고 이미 게임 산업에는 데이터 애널리스트가 프로젝트별로 붙어서 개발하는 곳이 많음. 데이터 분석에 따라서 매출이 수십에서 수백배 차이가 나는 것을 경험. 전문 애널리스트가 있으면 좋지만 요즘 풀스택같이 기획자들이 데이터를 보는 경우 많으며 기획과 데이터를 묵어서 생각하기 때문에 효율도 좋고 성공 확률이 늘어남
요즘 기획자가 페이스북,구글 광고를 집행하고 CPI, LTV 같은거 계산 못하면 안 뽑는 회사도 늘어나는 추세. 마케팅팀은 머하고 기획자가 그걸 왜해?(형이 거기서 왜 나와?)할 수 있는데 마케팅이 데이터 보고 기획자 전달하고 다시 같이 기획하고 이래저래 하느니 커뮤니케이션 로스도 심하고 스타트업에서 그런 여유가 어딨어 그냥 다 한번에 전체적인 흐름을 보고 바로 상황에 맞는 기획을 하고 구현을 하고 대응을 해나가는 것이 훨씬 효율적.

## 정리

다음과 같은 상황에서 다음과 같은 디비를 활용함

* 일반적인 상황
* 중간중간 그룹단위 통계가 필요한 상황
* 거시적으로 통계가 필요한 상황
* 실시간 대응이 필요한 상황


- NoSQL, DynomoDB, MySQL, Postgre, Google BigQuery & Firebase-S3-Athena(Redshift도 고려)