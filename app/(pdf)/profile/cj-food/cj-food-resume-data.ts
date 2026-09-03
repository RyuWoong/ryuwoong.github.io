import type { Experience } from "@/app/(main)/profile/profile-data";

export const cjProfile = {
  name: "박정륭",
  role: "React Native / Frontend Developer",
  email: "wjdfbd1121@gmail.com",
  website: "https://ryuwoong.me",
  github: "https://github.com/RyuWoong",
};

export const cjSummary = [
  "React / React Native 기반 모바일 서비스를 개발해온 6년 차 프론트엔드 개발자입니다.",
  "앱 구조 설계, 네이티브 연동, OTA 배포 자동화, 데이터 기반 퍼널 개선, 재사용 가능한 UI 컴포넌트 설계에 강점이 있습니다.",
  "고객 접점이 많은 서비스에서 안정적인 앱 경험과 빠른 운영 대응 체계를 만드는 데 기여하고 싶습니다.",
];

export const cjCoreStrengths = [
  "React Native 기반 모바일 앱 개발 및 운영",
  "CodePush / HotUpdater 기반 OTA 배포 구조 구축 및 최적화",
  "GitHub Actions, Fastlane 기반 모바일 CI/CD 자동화",
  "네이티브와 Web/JS 간 통신 구조를 포함한 RN WebApp Boilerplate 설계",
  "딥링크, 유니버설 링크, 캠페인 링크 운영 체계 설계 및 문서화",
  "Firebase Analytics, Amplitude 기반 구매 퍼널 분석 및 UI/UX 개선",
  "디자인 시스템 및 재사용 가능한 컴포넌트 구축",
  "Codex, Claude Code 등 생성형 AI를 활용한 코드 구조화, 리팩토링, 문서화 생산성 개선",
];

export const cjSelectedOutcomes = [
  "OTA 배포 속도 4~5초에서 1~2초대로 50% 이상 단축",
  "CodePush 번들 30~40MB에서 10MB 수준으로 70% 이상 축소",
  "앱 크기 70~80MB 수준에서 50MB 이하로 경량화",
  "CodePush 롤백 발생 건수 약 50% 감소",
  "RN WebApp Boilerplate 구축으로 신규 프로젝트 착수 리소스 약 30% 절감",
  "마케팅팀이 직접 캠페인 링크를 운영할 수 있는 딥링크 가이드라인 문서화",
];

export const cjSkillGroups = [
  { label: "Frontend / Mobile", items: ["React", "React Native", "TypeScript", "JavaScript", "Reanimated", "React Query"] },
  { label: "Delivery / Operation", items: ["CodePush", "HotUpdater", "GitHub Actions", "Fastlane", "Firebase App Distribution", "TestFlight"] },
  { label: "Data / Growth", items: ["Firebase Analytics", "Amplitude", "DeepLink", "Universal Links", "Funnel Analysis"] },
  { label: "Collaboration", items: ["Product / Design / Marketing 협업", "Git-based 문서 협업", "MDX/Nextra", "개발 컨벤션 정리"] },
];

export const cjExperiences: Experience[] = [
  {
    company: "딜러타이어",
    role: "Software Developer",
    period: "2024.08 - 현재",
    note: "카티니 영업양수도 이후 근무",
    bullets: [
      {
        groupTitle: "React Native OTA 배포 인프라 구축 및 운영 고도화",
        items: [
          {
            title: "CodePush Standalone 서버 구축 및 HotUpdater 기반 재설계",
            details: [
              "Microsoft App Center 서비스 종료에 대응해 CodePush Standalone 서버를 구축하고 운영했습니다.",
              "EC2 기반 인프라 유지 비용과 관리 포인트를 줄이기 위해 HotUpdater 기반 OTA 아키텍처로 재설계했습니다.",
              "AWS ECS 중심 구조를 AWS S3 + Lambda 기반 Serverless 구조로 개편해 운영 부담과 배포 인프라 복잡도를 낮췄습니다.",
            ],
          },
          {
            title: "모바일 CI/CD 자동화 및 배포 속도 최적화",
            details: [
              "OTA 배포 속도를 기존 4~5초에서 1~2초대로 50% 이상 단축해 긴급 배포 대응 속도를 개선했습니다.",
              "GitHub Actions와 Fastlane을 결합해 빌드, Firebase App Distribution / TestFlight 배포, Slack 알림까지 자동화했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "React Native New Architecture 대응 및 앱 구조 개선",
        items: [
          {
            title: "외부 의존성 정리 및 핵심 기능 직접 구현",
            details: [
              "React Native 0.76+ 환경 도입에 맞춰 업데이트가 중단되었거나 호환성이 낮은 외부 라이브러리를 제거했습니다.",
              "핵심 기능을 직접 구현해 외부 의존성을 낮추고, 런타임 에러 가능성과 유지보수 비용을 줄였습니다.",
            ],
          },
          {
            title: "AI-Native 개발 환경을 위한 구조 표준화",
            details: [
              "Codex, Claude Code 등 LLM 기반 개발 도구가 코드 맥락을 더 잘 파악할 수 있도록 예측 가능한 폴더 구조와 모듈화 컨벤션을 설계했습니다.",
              "ESLint 설정과 코딩 컨벤션을 자체 라이브러리 형태로 공통화해 신규 프로젝트 세팅 시간과 코드 리뷰 비용을 줄였습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "구매 퍼널 분석 기반 UI/UX 개선",
        items: [
          {
            title: "마케팅 협업을 통한 유입-전환 흐름 분석",
            details: [
              "Firebase Analytics와 Amplitude를 활용해 사용자 행동 로그를 설계하고 구매 여정 전반의 이탈 지점을 분석했습니다.",
              "퍼포먼스 마케팅팀과 유입 경로, 캠페인 성과, 구매 전환 흐름을 함께 확인하고 이탈 구간을 기술 문제와 UX 문제로 나누어 개선 가설을 수립했습니다.",
            ],
          },
          {
            title: "전환율과 운영 효율을 고려한 화면 개선",
            details: [
              "이탈이 큰 구간을 기술적·UX적 관점에서 정의하고 화면 구성과 로딩 경험을 개선했습니다.",
              "결제 전환율과 마케팅 비용 효율(ROAS)을 높이는 방향으로 서비스 성장에 기여했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "사내 위키 및 협업 프로세스 구축",
        items: [
          {
            title: "Nextra / MDX 기반 기술 문서 시스템 구축",
            details: [
              "파편화된 기술 문서와 온보딩 가이드를 통합하기 위해 Nextra와 MDX 기반 사내 위키를 직접 설계하고 개발했습니다.",
              "문서 변경을 GitHub PR 기반으로 검토하고 반영하는 흐름을 도입해, 개발자와 비개발 직군이 같은 기준의 운영 문서를 참고할 수 있게 했습니다.",
            ],
          },
          {
            title: "온보딩 및 부서 간 정보 비대칭 개선",
            details: [
              "신규 입사자 가이드, 기술 스택 문서, 운영 가이드를 표준화해 온보딩 리소스를 줄였습니다.",
              "반복 질문이 발생하던 업무 흐름을 문서와 가이드로 정리하고, 비개발 직군도 마크다운 기반 협업 흐름에 참여할 수 있도록 안내했습니다.",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "카티니",
    role: "Software Developer",
    period: "2023.04 - 2024.07",
    bullets: [
      {
        groupTitle: "앱 크기 및 OTA 번들 최적화",
        items: [
          {
            title: "앱과 OTA 번들 경량화",
            details: [
              "불필요한 UI 라이브러리와 고해상도 에셋을 정리해 기존 70~80MB 수준의 앱 크기를 50MB 이하로 경량화했습니다.",
              "중복 의존성 제거와 에셋 관리 체계 개선을 통해 30~40MB 수준이던 CodePush 번들을 10MB 수준으로 70% 이상 축소했습니다.",
            ],
          },
          {
            title: "업데이트 경험과 운영 안정성 개선",
            details: [
              "초기 업데이트 다운로드 시간을 평균 10초에서 3~4초대로 단축해 앱 진입 경험을 개선했습니다.",
              "번들 경량화와 배포 안정화 이후 CodePush 롤백 발생 건수를 약 50% 줄였습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "딥링크 및 마케팅 캠페인 운영 구조 설계",
        items: [
          {
            title: "마케팅팀이 직접 운영 가능한 링크 체계 구축",
            details: [
              "복잡한 앱 진입 시나리오를 체계화하고 커스텀 딥링크 스킴과 유니버설 링크 구조를 설계했습니다.",
              "캠페인 링크 생성 요청이 반복되는 문제를 줄이기 위해 링크 생성 규칙과 검수 기준을 문서화했습니다.",
              "마케팅팀이 개발자 추가 지원 없이 온·오프라인 프로모션과 외부 채널 유입 링크를 직접 운영할 수 있는 기반을 마련했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "디자인 시스템 및 데이터 페칭 구조 개선",
        items: [
          {
            title: "공통 컴포넌트와 서버 상태 관리 정리",
            details: [
              "디자이너와 컴포넌트 명명 규칙, 상태 값, 사용 기준을 맞추며 색상 팔레트, Typography, Button, Label 등 원자 단위 공통 컴포넌트를 구축했습니다.",
              "React Query(TanStack Query)를 도입해 서버 상태 관리, 캐싱, API 호출 정책을 정리하고 불필요한 네트워크 요청을 줄였습니다.",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "디몬스터",
    role: "Software Developer",
    period: "2021.04 - 2022.12",
    bullets: [
      {
        groupTitle: "e-Commerce / Fintech / 예약 도메인 앱 개발",
        items: [
          {
            title: "다양한 비즈니스 도메인의 React Native 앱 구축",
            details: [
              "오픈마켓, 쇼핑몰, 예약 시스템 등 4~5개의 다양한 도메인 프로젝트에 참여했습니다.",
              "실시간 채팅, 구독 모델 기반 결제, App Store / Play Store 인앱 결제(IAP) 등 복잡한 클라이언트 로직을 개발했습니다.",
              "여러 프로젝트를 병행하며 요구사항을 빠르게 분석하고 프로젝트 성격에 맞는 상태 관리 방식을 선택했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "React Native WebApp Boilerplate 및 JS-Native 통신 구조 표준화",
        items: [
          {
            title: "반복 가능한 WebApp 앱 구조 구축",
            details: [
              "신규 프로젝트 초기 세팅 비용을 줄이기 위해 React Native WebApp 전용 Boilerplate를 직접 제작했습니다.",
              "공통 컴포넌트, 인증 로직, 네이티브 브릿지 통신 규격을 표준화했습니다.",
              "WebView 또는 JS 레이어와 네이티브 앱 간 통신 구조를 반복적으로 재사용할 수 있도록 정리했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "협업 프로세스 개선 및 기술 공유",
        items: [
          {
            title: "프로젝트 관리 체계와 기술 세미나 운영",
            details: [
              "요구사항과 QA 히스토리가 흩어지는 문제를 줄이기 위해 기획, 개발, QA 단계를 연결하는 Notion 프로젝트 템플릿을 제작했습니다.",
              "React 렌더링 원리와 최신 프론트엔드 트렌드를 공유하는 사내 세미나를 진행했습니다.",
              "API 설계 컨벤션과 프론트엔드 구현 관점을 공유해 백엔드 개발자와의 협업 효율을 높였습니다.",
            ],
          },
        ],
      },
    ],
  },
];

export const cjOpenSourceActivities = [
  {
    name: "react-native-naver-login",
    description: "기능 추가, 오류 수정, 에러 핸들링 개선에 기여했습니다.",
    href: "https://github.com/crossplatformkorea/react-native-naver-login",
  },
  {
    name: "react-native-naver-map",
    description: "앱 크래시를 유발할 수 있는 엣지 케이스를 이슈로 제보했습니다.",
    href: "https://github.com/mym0404/react-native-naver-map/issues/143",
  },
];

export const cjGrowthDirection = [
  "React Native New Architecture, OTA 배포 인프라, 서버리스 운영 구조, AI 기반 개발 환경처럼 실제 서비스 운영에 영향을 주는 기술을 중심으로 학습하고 적용해왔습니다.",
  "생성형 AI를 단순 코드 작성 보조 도구가 아니라, 코드 구조를 예측 가능하게 만들고 문서화와 리팩토링 속도를 높이는 협업 도구로 활용하고 있습니다.",
  "고객 접점이 많은 서비스에서 빠르게 실험하고 안정적으로 배포할 수 있는 개발 환경을 만드는 데 집중하고자 합니다.",
];

export const cjEducation = [
  { period: "2019.02", detail: "경제학 학사 졸업" },
  { period: "2019.05", detail: "정보처리기사 취득" },
];

export const cjMilitaryService = [{ period: "2014.03 - 2016.02", detail: "해군 병장 만기 전역" }];
