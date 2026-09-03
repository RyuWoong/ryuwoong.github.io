# 박정륭 이력서

React Native / Frontend Developer  
Email: [wjdfbd1121@gmail.com](mailto:wjdfbd1121@gmail.com)  
Portfolio: <https://ryuwoong.me/profile>  
Blog: <https://ryuwoong.me/blog>  
GitHub: <https://github.com/RyuWoong>

## Summary

React / React Native 기반 모바일 서비스를 개발해온 6년 차 프론트엔드 개발자입니다. 앱 구조 설계, 네이티브 연동, OTA 배포 자동화, 데이터 기반 퍼널 개선, 재사용 가능한 UI 컴포넌트 설계에 강점이 있습니다.

서비스를 단순히 구현하는 데서 끝내지 않고, 운영 중 발생하는 배포 속도, 앱 크기, 업데이트 안정성, 협업 병목, 마케팅 캠페인 운영 문제를 기술적으로 정의하고 개선해왔습니다. CJ푸드빌의 외식·베이커리 브랜드처럼 고객 접점이 많은 서비스에서 안정적인 앱 경험과 빠른 운영 대응 체계를 만드는 데 기여하고 싶습니다.

## Core Strengths

- React Native 기반 모바일 앱 개발 및 운영
- CodePush / HotUpdater 기반 OTA 배포 구조 구축 및 최적화
- GitHub Actions, Fastlane 기반 모바일 CI/CD 자동화
- 네이티브와 Web/JS 간 통신 구조를 포함한 RN WebApp Boilerplate 설계
- 딥링크, 유니버설 링크, 캠페인 링크 운영 체계 설계 및 문서화
- Firebase Analytics, Amplitude 기반 구매 퍼널 분석 및 UI/UX 개선
- 디자인 시스템 및 재사용 가능한 컴포넌트 구축
- Codex, Claude Code 등 생성형 AI를 활용한 코드 구조화, 리팩토링, 문서화 생산성 개선

## Skills

### Frontend / Mobile

- React, React Native, TypeScript, JavaScript
- Reanimated, React Query(TanStack Query)
- Design System, Reusable Component, Interaction UI

### Delivery / Operation

- CodePush, HotUpdater
- GitHub Actions, Fastlane
- Firebase App Distribution, TestFlight, Slack Notification
- Firebase Analytics, Amplitude

### Collaboration

- Product / Design / Marketing 협업
- Git-based 문서 협업, MDX/Nextra 기반 사내 위키
- 기술 문서화, 온보딩 가이드, 개발 컨벤션 정리

## Experience

## 딜러타이어

Software Developer  
2024.08 - 현재  
카티니 영업양수도 이후 근무

### React Native OTA 배포 인프라 구축 및 운영 고도화

- Microsoft App Center 서비스 종료에 대응해 CodePush Standalone 서버를 구축하고 운영했습니다.
- 이후 EC2 기반 인프라 유지 비용과 관리 포인트를 줄이기 위해 HotUpdater 기반 OTA 아키텍처로 재설계했습니다.
- 기존 AWS ECS 중심 구조를 AWS S3 + Lambda 기반 Serverless 구조로 개편하여 운영 부담을 줄이고 배포 인프라의 단순성을 높였습니다.
- OTA 배포 속도를 기존 4~5초에서 1~2초대로 50% 이상 단축해 긴급 배포와 운영 대응 속도를 개선했습니다.
- GitHub Actions와 Fastlane을 결합해 빌드, Firebase App Distribution / TestFlight 배포, Slack 알림까지 이어지는 모바일 CI/CD 파이프라인을 자동화했습니다.

### React Native New Architecture 대응 및 앱 구조 개선

- React Native 0.76+ 환경 도입에 맞춰 업데이트가 중단되었거나 호환성이 낮은 외부 라이브러리를 제거했습니다.
- 핵심 기능을 직접 구현해 외부 의존성을 낮추고, 런타임 에러 가능성과 유지보수 비용을 줄였습니다.
- Codex, Claude Code 등 LLM 기반 개발 도구가 코드 맥락을 더 잘 파악할 수 있도록 예측 가능한 폴더 구조와 모듈화 컨벤션을 설계했습니다.
- 팀 내 일관된 코드 품질을 유지하기 위해 ESLint 설정과 코딩 컨벤션을 자체 라이브러리 형태로 공통화했습니다.
- 신규 프로젝트 세팅 시간을 줄이고, 코드 리뷰 시 스타일 논쟁보다 구조와 동작 검토에 집중할 수 있는 기반을 마련했습니다.

### 구매 퍼널 분석 기반 UI/UX 개선

- Firebase Analytics와 Amplitude를 활용해 사용자 행동 로그를 설계하고, 구매 여정 전반의 이탈 지점을 분석했습니다.
- 퍼포먼스 마케팅팀과 유입 경로, 캠페인 성과, 구매 전환 흐름을 함께 확인하고 이탈 구간을 기술 문제와 UX 문제로 나누어 개선 가설을 수립했습니다.
- 이탈이 큰 구간을 기술적·UX적 관점에서 정의하고, 화면 구성과 로딩 경험을 개선하는 실험을 진행했습니다.
- 최종 결제 전환율과 마케팅 비용 효율(ROAS)을 높이는 방향으로 서비스 성장에 기여했습니다.

### 사내 위키 및 협업 프로세스 구축

- 파편화된 기술 문서와 온보딩 가이드를 통합하기 위해 Nextra와 MDX 기반 사내 위키를 직접 설계하고 개발했습니다.
- 문서 변경을 GitHub PR 기반으로 검토하고 반영하는 흐름을 도입해, 개발자와 비개발 직군이 같은 기준의 운영 문서를 참고할 수 있게 했습니다.
- 신규 입사자 가이드, 기술 스택 문서, 운영 가이드를 표준화해 온보딩 리소스를 줄였습니다.
- 반복 질문이 발생하던 업무 흐름을 문서와 가이드로 정리하고, 비개발 직군도 마크다운 기반 협업 흐름에 참여할 수 있도록 안내했습니다.

## 카티니

Software Developer  
2023.04 - 2024.07

### 앱 크기 및 OTA 번들 최적화

- 불필요한 UI 라이브러리와 고해상도 에셋을 정리해 기존 70~80MB 수준의 앱 크기를 50MB 이하로 경량화했습니다.
- 중복 의존성 제거와 에셋 관리 체계 개선을 통해 30~40MB 수준이던 CodePush 번들을 10MB 수준으로 70% 이상 축소했습니다.
- 초기 업데이트 다운로드 시간을 평균 10초에서 3~4초대로 단축해 앱 진입 경험을 개선했습니다.
- 번들 경량화와 배포 안정화 이후 CodePush 롤백 발생 건수를 약 50% 줄였습니다.

### 딥링크 및 마케팅 캠페인 운영 구조 설계

- 복잡한 앱 진입 시나리오를 체계화하고 커스텀 딥링크 스킴과 유니버설 링크 구조를 설계했습니다.
- 캠페인 링크 생성 요청이 반복되는 문제를 줄이기 위해 링크 생성 규칙과 검수 기준을 문서화했습니다.
- 마케팅팀이 개발자 추가 지원 없이 온·오프라인 프로모션과 외부 채널 유입 링크를 직접 운영할 수 있는 기반을 마련했습니다.

### 디자인 시스템 및 데이터 페칭 구조 개선

- 디자이너와 컴포넌트 명명 규칙, 상태 값, 사용 기준을 맞추며 색상 팔레트, Typography, Button, Label 등 원자 단위 공통 컴포넌트를 구축했습니다.
- 신규 화면 개발 속도와 UI 일관성을 높이기 위해 재사용 가능한 컴포넌트 중심의 디자인 시스템 토대를 마련했습니다.
- React Query(TanStack Query)를 도입해 서버 상태 관리, 캐싱, API 호출 정책을 정리했습니다.
- 불필요한 네트워크 요청을 줄여 데이터 소모량과 앱 성능을 개선했습니다.

## 디몬스터

Software Developer  
2021.04 - 2022.12

### e-Commerce / Fintech / 예약 도메인 앱 개발

- 오픈마켓, 쇼핑몰, 예약 시스템 등 4~5개의 다양한 도메인 프로젝트에 참여했습니다.
- 서비스 특성에 맞춰 React Native 앱 구조를 설계하고 화면, 상태 관리, 서버 연동 로직을 구현했습니다.
- 실시간 채팅, 구독 모델 기반 결제, App Store / Play Store 인앱 결제(IAP) 등 복잡한 클라이언트 로직을 개발했습니다.
- 여러 프로젝트를 병행하며 요구사항을 빠르게 분석하고, Context API, Redux 등 프로젝트 성격에 맞는 상태 관리 방식을 선택해 개발 리드타임을 줄였습니다.

### React Native WebApp Boilerplate 및 JS-Native 통신 구조 표준화

- 신규 프로젝트 초기 세팅 비용을 줄이기 위해 React Native WebApp 전용 Boilerplate를 직접 제작했습니다.
- 공통 컴포넌트, 인증 로직, 네이티브 브릿지 통신 규격을 표준화했습니다.
- WebView 또는 JS 레이어와 네이티브 앱 간 통신 구조를 반복적으로 재사용할 수 있도록 정리해 신규 프로젝트 착수 리소스를 약 30% 이상 절감했습니다.

### 협업 프로세스 개선 및 기술 공유

- 파편화된 업무 히스토리를 통합하기 위해 Notion 기반 프로젝트 관리 체계를 제안했습니다.
- 요구사항과 QA 히스토리가 흩어지는 문제를 줄이기 위해 기획, 개발, QA 단계를 연결하는 프로젝트 템플릿을 제작했습니다.
- 프론트엔드와 백엔드 동료를 대상으로 React 렌더링 원리와 최신 프론트엔드 트렌드를 공유하는 사내 세미나를 진행했습니다.
- API 설계 컨벤션과 프론트엔드 구현 관점을 공유해 백엔드 개발자와의 협업 효율을 높였습니다.

## Open Source

### react-native-naver-login

- 기능 추가, 오류 수정, 에러 핸들링 개선에 기여했습니다.
- Repository: <https://github.com/crossplatformkorea/react-native-naver-login>

### react-native-naver-map

- 앱 크래시를 유발할 수 있는 엣지 케이스를 이슈로 제보했습니다.
- Issue: <https://github.com/mym0404/react-native-naver-map/issues/143>

## Growth Direction

빠르게 변화하는 모바일 개발 환경에서 안정성과 생산성을 함께 높이는 개발자가 되는 것을 목표로 하고 있습니다. React Native New Architecture, OTA 배포 인프라, 서버리스 운영 구조, AI 기반 개발 환경처럼 실제 서비스 운영에 영향을 주는 기술을 중심으로 학습하고 적용해왔습니다.

특히 생성형 AI를 단순 코드 작성 보조 도구가 아니라, 코드 구조를 예측 가능하게 만들고 문서화와 리팩토링 속도를 높이는 협업 도구로 활용하고 있습니다. 앞으로도 고객 접점이 많은 서비스에서 빠르게 실험하고 안정적으로 배포할 수 있는 개발 환경을 만드는 데 집중하고자 합니다.

## Education / Certification

- 2019.02 경제학 학사 졸업
- 2019.05 정보처리기사 취득

## Military Service

- 2014.03 - 2016.02 해군 병장 만기 전역
