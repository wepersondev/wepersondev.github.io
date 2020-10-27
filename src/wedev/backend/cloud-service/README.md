# Cloud Service

Cloud Service란 물리적인 서버들을 데이터 센터라는 곳에 모아 놓고 원격으로 사용 할 수 있게끔 대여를 해주는 서비스입니다. 실제 서버 머신을 만지거나 관리 할일이 없기 때문에 구름에다가 가따 놓고 쓰는 기분(?)이라 클라우드 서비스라고 합니다. 예전에는 IaaS(Infrastructure as a Service)를 목표로 하였으나 차츰 발전하여 이제는 서버 임대 보다는 PasS(Platform as a Service), SaaS(Software as a Service) 형태로 진화하였습니다. 최근에는 [Serverless](/wedev/backend/serverless/)를 화두로 BaaS(Backend as a Service)가 트렌드가 되가고 있습니다.

![saas-paas-iaas-diagram](/img/wedev/saas-paas-iaas-diagram.svg)
<span class="ref">출처: [cloudflare](https://www.cloudflare.com/learning/serverless/glossary/platform-as-a-service-paas/)</span>

IaaS, PaaS, SaaS, BaaS 개념을 쉽게 설명하면

**IaaS: Infrastructure as a Service**

서버에 접속하는 IP랑 아이디/비번만 꼴랑 알려주고 직접 원격으로 접속하여 필요한거 다 설치하고 관리하면서 운영해야 하는 서비스

**PaaS: Platform as a Service**

OS나 DB같은 필요한 도구들을 미리 설치해주고 최적화 되어 있어 서버에 접속하면 바로 사용 할 수 있게끔 해준 서비스

**SaaS: Software as a Service**

서비스에 필요한 도구들을 소프트웨어 형태로 제작하여 머신 관리 없이 웹이나 API 형태로 쉽게 이용 할 수 있는 서비스

**BaaS: Backend as a Service**

백엔드에서 필요한 도구들만을 모아서 인프라 구축이나 관리를 신경쓰지 않고 서버를 운영 할 수 있게한 서비스

<small>이 자체가 중요한게 아니라서 짧게 설명했는데 짧게 설명이 더 힘드네요. 더 이상의 자세한 설명은 생략한다. DYOR!</small>

## 선택지

클라우드 서비스 3대장은 [AWS](https://aws.amazon.com/), [GCP](https://cloud.google.com/), [Azure](https://azure.microsoft.com/)입니다.

### AWS vs GCP vs Azure

앞서 [Backend Framework](/wedev/backend/framework/)에서도 설명했듯이 목적이 동일한 서비스나 프레임워크는 대부분 비슷한 기능을 각자의 서비스에 맞게 이름만 다르게하여 제공합니다.(물론 디테일에 차이가 있기는 하지만 여기서는 크게 중요하지 않습니다.)

다음은 같은 목적의 이름만 다른 서비스들입니다.(일부러 이해를 쉽게 이런 표현을 했습니다.)

| 기능 | AWS | GCP | Azure |
| --- | --- | --- | --- |
| 가상 머신 | EC2 | Compute Engine | Virtual Machines |
| Auto Scale | Auto Scaling | Virtual Machine Scale Sets | Autoscaling |
| Batch | AWS Batch | Azure Batch | Batch on GKE |
| Storage | S3 | Cloud Storage | Blob Storage |
| Function | Lambda | Cloud Functions | Azure Functions |

서비스에서 가상 머신과 저장소가 필요하다면 AWS는 EC2/S3, GCP는 Compute Engine/Cloud Storage, Azure는 Virtual Machines/Blob Storage 를 사용하는 식입니다. 사용법이나 구조도 대부분 비슷합니다. 심지어 이름도 똑같은 서비스들도 있습니다. 그것도 그럴것이 목적이 같은데 서비스 내용이 완전 다르면 상식적으로도 맞지 않습니다.

이제 조금 더 깊이 들어가보겠습니다. 서두에서 클라우드 서비스 벤더(Cloud Service Vendor)들이 IaaS > PaaS > SaaS > BaaS 식으로 진화해가고 있다고 했습니다. BasS가 제일 효율적이고 좋다고 가정을 해도 기존에 사용자들과 수요가 여전히 있기 때문에 IaaS나 PasS 같은 서비스를 종료 할 수는 없습니다. 대부분의 클라우드 서비스는 IaaS > PaaS 까지는 비슷한 구조입니다. 예를 들어, MySQL을 사용한다면 AWS에서 MySQL을 사용하던 Azure에서 MySQL을 사용하든 심지어 SaaS 형태로 MySQL 서비스를 제공했다고 하더라도 MySQL은 MySQL일 뿐입니다.

SaaS > BaaS 에서부터 현격하게 차이가 납니다. 기존의 레거시가 아니고 각 벤더들이 새로운 서비스를 직접 제작하여 만들었기 때문입니다. 각자 자신들의 클라우드 서비스를 유저들을 이용하도록 꼬시기(?) 위해서 하나의 목적이라도 세분화하고 거기에 맞는 최적화된 새로운 서비스를 만들어서 제공하거나 기존에 여러 파이프라인을 걸쳐야 했던 일들을 하나의 과정으로 합쳐서 개발하기 편리하게 만들어서 하나의 서비스 형태로 제공했습니다. 처음 개념을 접하는 분들을 위해서 구체적으로 예를 들면, 데이터 저장이라는 하나의 목적을  비싸더라도 더 빠르고 읽고 쓰도록, 느리지만 싸게 많이 저장 할 수 있게, 많은 양의 데이터를 한번에 처리할 수 있도록, 데이터간 마이그레이션이 편하도록등등 DB의 형태를 수십가지로 쪼개서 별도의 서비스의 형태로 제공하는 것입니다. 이런 큰 목적이 수십 가지이고 이 수십 가지를 다시 각각 수십 가지로 쪼개서 서비스가 파생하고 기존의 IaaS, PaaS 서비스까지 합해져서 이제 각 클라우드에서 제공하는 서비스들이 수백가지를 넘어갑니다. 클라우드를 시작하는 개발자들이 처음 '헉' 소리 나오는 이유입니다. (필수적으로 알아햐 하는 서비스들에 대하여 하단에 부록으로 정리해 놓았습니다.)

이 파생된 서비스들과 디테일에서 아주 큰 차이 가져오기도 하지만 아이러니하게도 거시적으로는 이것 또한 상향 평준화 되갑니다. 한곳에서 좋은 서비스를 만들면 다른 곳에서도 금방 비슷한 서비스가 나옵니다.

각 클라우드의 자세한 비교에 대해서는 인터넷에 널리 포스팅이 되어 있는 바, 여기서는 조금 다른 얘기를 해보겠습니다.

### Multi Cloud

예전에 한 클라우드 서비스에서 네임서버 문제로 해당 클라우드를 사용하는 일부 서비스들이 반나절동안 먹통이 되는 경우가 있었습니다. 또한 글로벌하게 유명한 서비스가 하나의 클라우드에 장애가 생겨서 멀티 클라우드(Multi Cloud)로 전환한 바가 있습니다.<small>(비방으로 비춰 질수 있어 참고 링크나 서비스/회사명등은 일부러 기재하지 않았습니다.)</small>

언어나 프레임워크와 마찬가지로 각 클라우드는 각자 장단점이 있고 대부분 비슷한 공통된 서비스들과 각자 특화된 서비스들이 있습니다. 이제는 어떤 클라우드를 선택해야 하는 것보다는 멀티 클라우드가 가능하게끔 설계를 하는 것이 더 중요하다고 생각합니다. 특히 글로벌 서비스의 경우, 다양한 선택지를 가지고 유연하게 대처 할 수 있는 것이 중요합니다. 멀티 클라우드를 위해서는 가급적 클라우드에 종속적인 기술을 지양하거나 해당 기술을 사용하더라도 다른 클라우드에서 우회 할 수 방법으로 서비스를 설계해야 합니다.

### Serverless Framework

[Serverless Framework](https://www.serverless.com/)는 Node.js 기반에 오픈소스 프레임워크로 멀티 클라우드를 활용하기 위한 좋은 도구입니다. 각 클라우드 서비스들의 설정과 관리 방법이 다른데 [Serverless Framework](https://www.serverless.com/)는 추상화된 레이어를 도입하여 한번의 개발로 3사 클라우드에 모두 배포하거나 이전을 하기 편리하게 되어 있습니다. 예외처리를 통하여 각 클라우드에 특화된 기능들도 사용이 가능합니다. "이 프레임워크나 너무 좋다"라기 보다는 **특정 플렛폼에 종속적이지 않게 개발하는 것 또한 중요하고 때론 일부러 종속성을 강하게 개발을 할 수도 있고**, 이런 아키텍처를 생각해볼수 있게끔 한다는데 더 의의를 두고 있습니다.

:::tip
[Serverless Framework](https://www.serverless.com/)란 우리가 일반적으로 말하는 Serverless 기술 자체가 아니고 Serverless 기술들을 사용하기 쉽게 만들어놓은 프레임워크입니다. 이름이 같다보니 Serverless Framework = Serverless 라고 착각하기 쉬운데 그냥 React, Vue 같은 백엔드용 프레임워크라고 생각하시면 쉽습니다. [Serverless](/wedev/backend/serverless/)에 대한 자세한 설명은 이어진 포스팅에서 합니다.
:::

## 정리

저희 서비스는 멀티 클라우드를 전제로 하고 있고 실제로도 멀티 클라우드의 형태로 구축이 되어 있습니다. 이어지는 [Serverless](/wedev/backend/serverless/) 포스팅에서 자세한 내용이 함께 정리 되어 있습니다.

## 부록: AWS에서 알아야 하는 서비스

AWS에서 서비스가 너무 많다보니 신입사원들이 자주 질문을 합니다.

> 이 많은 것을 다 알아야 하나요?

AWS의 서비스들은 하나하나가 서비스 블록이라 많이 알수록 좋기는 합니다. 특정 기능을 구현하려고 할때 해당 서비스 블록을 알고 있음으로 해서 더 편리하거나 빠르게 구현이 가능합니다.

GCP나 Azure도 마찬가지이기는 하나 우선적으로 집중을 할 수 있도록 AWS와 자사 서비스를 기준으로 분리를 해 보았습니다.

<small>

[AWS 제품 살펴보기](https://aws.amazon.com/products/) 페이지의 나와 있는 카데고리 순서대로 정리하였습니다.(2020년10월기준)

**A**: 우리 서비스에 필요한 기술 또는 사용하지 않더라도 기본 소양으로 알아야 하는 서비스<br>
**B**: 우리 서비스에 차후에 적용 될 기술 또는 필수적이진 않더라도 알았으면 하는 서비스<br>
알아야 할 것 같은데 빠진 기술들은 자사에서 다른 벤더 기술을 사용하기 때문입니다.

</small>

| 카테고리 | 서비스 | 필수 |
| --- | --- | --- |
| Analytics | Amazon Athena | A |
| | Amazon CloudSearch | B |
| | Amazon Elasticsearch Service | A |
| | Amazon EMR | |
| | Amazon Kinesis | A |
| | Amazon Managed Streaming for Apache Kafka | |
| | Amazon Redshift | B |
| | Amazon QuickSight | |
| | AWS Data Exchange | |
| | AWS Data Pipeline | |
| | AWS Glue | B |
| | AWS Lake Formation | |
| Application Integration | AWS Step Functions | A |
| | Amazon AppFlow | |
| | Amazon EventBridge | |
| | Amazon MQ | |
| | Amazon Simple Notification Service (SNS) | A |
| | Amazon Simple Queue Service (SQS) | A |
| | Amazon AppSync | A |
| AR & VR | Amazon Sumerian | |
| AWS Cost Management | AWS Cost Explorer | A |
| | AWS Budgets | A |
| | AWS Cost and Usage Report | B |
| | Reserved Instance Reporting | |
| | Savings Plans | |
| Blockchain | Amazon Managed Blockchain | B |
| | Amazon Quantum Ledger Database (QLDB) | |
| Business Applications | Alexa for Business | B |
| | Amazon Chime | |
| | Amazon Honeycode (Beta) | |
| | Amazon WorkDocs | |
| | Amazon WorkMail | |
| Compute | Amazon EC2 | A |
| | Amazon EC2 Auto Scaling | A |
| | Amazon Lightsail | |
| | AWS Batch | B |
| | AWS Elastic Beanstalk | |
| | AWS Lambda | A |
| | AWS Outposts | |
| | AWS Serverless Application Repository | |
| | AWS Snow Family | |
| | AWS Wavelength | |
| | VMware Cloud on AWS | |
| Containers | AWS App2Container | |
| | Amazon Elastic Container Registry | B |
| | Amazon Elastic Container Service (ECS) | B |
| | Amazon Elastic Kubernetes Service (EKS) | A |
| | AWS Fargate | B |
| Customer Engagement | Amazon Connect | |
| | Amazon Pinpoint | B |
| | Amazon Simple Email Service (SES) | A |
| | Contact Lens for Amazon Connect | |
| Database | Amazon Aurora | A |
| | Amazon DynamoDB | A |
| | Amazon DocumentDB (with MongoDB compatibility) | |
| | Amazon ElastiCache | A |
| | Amazon Keyspaces (for Apache Cassandra) | |
| | Amazon Neptune | |
| | Amazon Quantum Ledger Database (QLDB) | |
| | Amazon RDS | A |
| | Amazon RDS on VMware | |
| | Amazon Redshift | B |
| | Amazon Timestream | |
| | AWS Database Migration Service | B |
| Developer Tools | Amazon CodeGuru | |
| | Amazon Corretto | |
| | AWS Cloud Development Kit (CDK) | |
| | AWS Cloud9 | |
| | AWS CodeArtifact | |
| | AWS CodeBuild | |
| | AWS CodeCommit | |
| | AWS CodeDeploy | |
| | AWS CodePipeline | |
| | AWS CodeStar | |
| | AWS Command Line Interface | |
| | AWS Device Farm | |
| | AWS Tools and SDKs | |
| | AWS X-Ray | B |
| End User Computing | Amazon AppStream 2.0 | |
| | Amazon WorkDocs | |
| | Amazon WorkLink | |
| | Amazon WorkSpaces | |
| Front-End Web & Mobile | AWS Amplify | A |
| | Amazon API Gateway | A |
| | Amazon Pinpoint | B |
| | AWS AppSync | A |
| | AWS Device Farm | |
| Game Tech | Amazon GameLift | |
| | Amazon Lumberyard | |
| Internet of Things | AWS IoT Core | |
| | AWS Greengrass | |
| | AWS IoT 1-Click | |
| | AWS IoT Analytics | |
| | AWS IoT Button | |
| | AWS IoT Device Defender | |
| | AWS IoT Device Management | |
| | AWS IoT Events | |
| | AWS IoT SiteWise | |
| | AWS IoT Things Graph | |
| | AWS Partner Device Catalog | |
| | FreeRTOS | |
| Machine Learning | Amazon SageMaker | B |
| | Amazon Augmented AI | |
| | Amazon CodeGuru | |
| | Amazon Comprehend | |
| | Amazon Elastic Inference | |
| | Amazon Forecast | |
| | Amazon Fraud Detector | |
| | Amazon Kendra | |
| | Amazon Lex | |
| | Amazon Personalize | |
| | Amazon Polly | |
| | Amazon Rekognition | |
| | Amazon SageMaker Ground Truth | |
| | Amazon Textract | |
| | Amazon Translate | |
| | Amazon Transcribe | |
| | AWS Deep Learning AMIs | |
| | AWS Deep Learning Containers | |
| | AWS DeepComposer | |
| | AWS DeepLens | |
| | AWS DeepRacer | |
| | Amazon Inferentia | |
| | PyTorch on AWS | |
| | Apache MXNet on AWS | |
| | TensorFlow on AWS | B |
| Management & Governance | Amazon CloudWatch | A |
| | AWS Auto Scaling | A |
| | AWS Chatbot | |
| | AWS CloudFormation | A |
| | AWS CloudTrail | B |
| | AWS Command Line Interface | A |
| | AWS Compute Optimizer | |
| | AWS Config | |
| | AWS Control Tower | |
| | AWS Console Mobile Application | |
| | AWS License Manager | |
| | AWS Management Console | A |
| | AWS Managed Services | |
| | AWS OpsWorks | |
| | AWS Organizations | B |
| | AWS Personal Health Dashboard | |
| | AWS Service Catalog | |
| | AWS Systems Manager | |
| | AWS Trusted Advisor | |
| | AWS Well-Architected Tool | |
| Media Services | Amazon Elastic Transcoder | B |
| | Amazon Interactive Video Service | |
| | Amazon Kinesis Video Streams | B |
| | AWS Elemental MediaConnect | |
| | AWS Elemental MediaConvert | A |
| | AWS Elemental MediaLive | |
| | AWS Elemental MediaPackage | |
| | AWS Elemental MediaStore | |
| | AWS Elemental MediaTailor | |
| | AWS Elemental Appliances & Software | |
| Migration & Transfer | AWS Migration Hub | |
| | AWS Application Discovery Service | |
| | AWS Database Migration Service | |
| | AWS DataSync | |
| | AWS Server Migration Service | |
| | AWS Snow Family | |
| | AWS Transfer Family | |
| | CloudEndure Migration | |
| | Migration Evaluator (formerly TSO Logic) | |
| Networking & Content Delivery | Amazon VPC | A |
| | Amazon API Gateway | A |
| | Amazon CloudFront | A |
| | Amazon Route 53 | A |
| | AWS PrivateLink | |
| | AWS App Mesh | |
| | AWS Cloud Map | |
| | AWS Direct Connect | |
| | AWS Global Accelerator | |
| | AWS Transit Gateway | |
| | Elastic Load Balancing | A |
| Quantum Technologies | Amazon Braket | |
| Robotics | AWS RoboMaker | |
| Satellite | AWS Ground Station | |
| Security, Identity & Compliance | AWS Identity & Access Management | A |
| | Amazon Cognito | A |
| | Amazon Detective | |
| | Amazon GuardDuty | |
| | Amazon Inspector | |
| | Amazon Macie | |
| | AWS Artifact | |
| | AWS Certificate Manager | A |
| | AWS CloudHSM | |
| | AWS Directory Service | |
| | AWS Firewall Manager | |
| | AWS Key Management Service | B |
| | AWS Resource Access Manager | |
| | AWS Secrets Manager | |
| | AWS Security Hub | |
| | AWS Shield | |
| | AWS Single Sign-On | |
| | AWS WAF | |
| Serverless | AWS Lambda | A |
| | Amazon API Gateway | A |
| | Amazon DynamoDB | A |
| | Amazon EventBridge | |
| | Amazon Simple Notification Service (SNS) | A |
| | Amazon Simple Queue Service (SQS) | A |
| | Amazon Simple Storage Service (S3) | A |
| | AWS AppSync | A |
| | AWS Fargate | B |
| | AWS Step Functions | A |
| Storage | Amazon Simple Storage Service (S3) | A |
| | Amazon Elastic Block Store (EBS) | |
| | Amazon Elastic File System (EFS) | |
| | Amazon FSx for Lustre | |
| | Amazon FSx for Windows File Server | |
| | Amazon S3 Glacier | B |
| | AWS Backup | |
| | AWS Snow Family | |
| | AWS Storage Gateway | |
| | CloudEndure Disaster Recovery | |
