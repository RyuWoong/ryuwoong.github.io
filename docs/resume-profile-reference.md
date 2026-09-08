# 박정륭 이력서

6년 차 React Native / Frontend 개발자

- 이메일: wjdfbd1121@gmail.com
- 프로필: https://ryuwoong.me/profile
- GitHub: https://github.com/RyuWoong

## 소개

6년 차 React Native 개발자로, 타이어 판매와 장착 매장을 연결하는 타이어픽의 앱 리드를 맡고 있습니다.

앱·OTA 번들 경량화와 배포 자동화를 통해 업데이트 경험과 운영 과정을 개선해왔습니다.

마케팅·디자인팀과 협업해 딥링크 운영 체계, 구매 퍼널, 공통 UI 컴포넌트를 개선했습니다.

## 주요 성과

- Android·iOS 앱 실행 후 OTA 번들 다운로드 시간 4~5초 → 1~2초로 단축
- 앱 크기 70~80MB → 50MB 이하, CodePush 번들 30~40MB → 약 10MB로 경량화
- HotUpdater 기반 OTA 인프라 전환 및 GitHub Actions·Fastlane 배포 자동화
- 마케팅팀이 캠페인 링크를 직접 생성·운영할 수 있도록 딥링크 규칙과 가이드 정리

## 기술

- **Frontend / Mobile**: React, React Native, TypeScript, JavaScript, Reanimated, TanStack Query
- **Delivery**: GitHub Actions, Fastlane, CodePush, HotUpdater, AWS S3, AWS Lambda
- **Analytics**: Firebase Analytics, Amplitude, 딥링크, 유니버설 링크
- **Collaboration**: 공통 UI 컴포넌트, ESLint 공통 설정, 기술 문서화, Notion, 사내 에이전트봇

## 경력

### 딜러타이어 | 앱 리드 · 타이어픽

2024.08 - 현재 · 카티니 영업양수도 이후 타이어픽 앱 개발·운영 지속

#### OTA 인프라 전환 및 모바일 배포 자동화

- Microsoft App Center 서비스 종료에 대응해 CodePush Standalone 서버를 구축하고 운영했습니다.
- 서버 유지 비용과 관리 부담을 줄이기 위해 HotUpdater를 도입하고, AWS ECS 기반 배포 인프라를 S3·Lambda 중심으로 전환했습니다.
- Android·iOS에서 앱 실행 후 OTA 업데이트 번들을 내려받는 시간을 4~5초에서 1~2초로 단축했습니다.
- GitHub Actions와 Fastlane으로 앱 빌드부터 Firebase App Distribution·TestFlight 배포, Slack 알림까지 자동화했습니다.

#### React Native New Architecture 대응

- React Native 0.76+ 도입 과정에서 호환성 문제가 있고 버전 업데이트가 제공되지 않는 라이브러리를 제거했습니다.
- React Native Paper로 구현했던 프로그레스바와 일부 UI 컴포넌트를 직접 구현한 컴포넌트로 대체해 UI 라이브러리 의존성을 줄였습니다.

#### 프로젝트 구조와 개발 규칙 표준화

- 기능 단위 응집도를 참고해 화면 전용 코드와 공용 코드를 구분하고, 폴더 구조와 모듈 배치 규칙을 정리했습니다.
- ESLint 설정과 코딩 컨벤션을 공통 라이브러리로 만들어 프로젝트에서 재사용하도록 했습니다.

[프로젝트 구조 설계 글](https://ryuwoong.me/blog/2)

#### 구매 퍼널 분석과 화면 개선

- Firebase Analytics와 Amplitude로 사용자 행동 로그를 설계하고 구매 여정의 이탈 지점을 분석했습니다.
- 퍼포먼스 마케팅팀과 유입·구매 흐름을 검토하고, 이탈 구간의 화면 구성과 로딩 경험을 개선하는 실험을 진행했습니다.

#### 사내 문서화 방식 개선 및 업무 검색 에이전트 구축

- Nextra·MDX 위키를 구축한 뒤 비개발 직군이 작성·배포 과정에서 겪는 한계를 확인하고, Notion 중심의 문서화 방식을 제안했습니다.
- Notion과 미러 DB에서 업무 정보를 찾아 자연어로 답변하고, Slack 스레드의 업무 지식을 저장하는 내부 에이전트봇을 구축했습니다.
- 사용 요구사항을 수집하고 Skills와 MCP를 활용한 처리 흐름으로 개선했습니다.

### 카티니 | 앱 리드 · 타이어픽

2023.04 - 2024.07

#### 앱·OTA 번들 경량화

- 불필요한 UI 라이브러리와 고해상도 에셋을 정리해 앱 크기를 70~80MB에서 50MB 이하로 줄였습니다.
- 중복 의존성을 제거하고 에셋 관리 방식을 개선해 CodePush 번들을 30~40MB에서 약 10MB로 줄였습니다.
- 초기 업데이트 번들 다운로드 시간을 약 10초에서 3~4초로 단축했습니다.

#### 마케팅팀이 직접 운영할 수 있는 딥링크 체계 구축

- 앱 진입 시나리오를 정리하고 커스텀 딥링크 스킴과 유니버설 링크 구조를 설계했습니다.
- 링크 생성 규칙과 검수 기준을 문서화해 마케팅팀이 개발자의 추가 지원 없이 캠페인 링크를 생성·운영할 수 있도록 했습니다.

#### 공통 UI 컴포넌트와 서버 상태 관리 정리

- 디자이너와 명명 규칙·상태·사용 기준을 맞추고 색상, 타이포그래피, Button, Label 등 공통 UI 요소를 구축했습니다.
- TanStack Query를 도입해 서버 상태 관리, 캐싱, API 호출 정책을 정리했습니다.

### 디몬스터 | Software Developer

2021.04 - 2022.12

#### 커머스·예약 서비스의 React Native 앱 개발

- 오픈마켓, 쇼핑몰, 예약 시스템 등 여러 프로젝트에서 React Native 앱을 개발했습니다.
- 실시간 채팅, 구독 결제, App Store·Play Store 인앱 결제의 클라이언트 로직과 서버 연동을 구현했습니다.
- 프로젝트 요구사항에 맞춰 Context API, Redux 등 상태 관리 방식을 적용했습니다.

#### React Native WebApp 공통 개발 기반 구축

- 신규 프로젝트에서 반복되는 초기 설정을 줄이기 위해 WebApp 보일러플레이트를 제작했습니다.
- 공통 컴포넌트, 인증 로직, 네이티브 브릿지 통신 규격을 표준화해 재사용할 수 있도록 정리했습니다.

#### 프로젝트 문서화와 기술 공유

- 기획·개발·QA의 요구사항과 이력을 함께 관리할 수 있는 Notion 프로젝트 템플릿을 제작했습니다.
- React 렌더링 원리를 주제로 사내 세미나를 진행하고, 백엔드 개발자와 API 설계 컨벤션을 공유했습니다.

## 오픈소스

- [react-native-naver-login](https://github.com/crossplatformkorea/react-native-naver-login): 기능 추가, 오류 수정, 에러 핸들링 개선에 기여했습니다.
- [react-native-naver-map](https://github.com/mym0404/react-native-naver-map/issues/143): 앱 크래시를 유발할 수 있는 엣지 케이스를 이슈로 제보했습니다.

## 학력·자격

- 2019.02 · 경제학 학사 졸업
- 2019.05 · 정보처리기사 취득

## 병역

- 2014.03 - 2016.02 · 해군 병장 만기 전역
