import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FadeInSection from "@/components/FadeInSection";
import character from "@/public/profile.png";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "박정륭 | 효율을 만드는 개발자",
  },
  description:
    "React / React Native 기반 모바일 서비스를 개발해온 프론트엔드 개발자 박정륭의 경력, 기술 스택, 오픈소스 활동을 정리한 프로필입니다.",
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    url: "/profile",
    title: "박정륭 | 효율을 만드는 개발자",
    description:
      "React / React Native 기반 모바일 서비스를 개발해온 프론트엔드 개발자 박정륭의 경력, 기술 스택, 오픈소스 활동을 정리한 프로필입니다.",
    images: [
      {
        url: "/profile.png",
        width: 1000,
        height: 1000,
        alt: "박정륭 프로필 캐릭터",
      },
    ],
  },
  twitter: {
    title: "박정륭 | 효율을 만드는 개발자",
    description:
      "React / React Native 기반 모바일 서비스를 개발해온 프론트엔드 개발자 박정륭의 경력, 기술 스택, 오픈소스 활동을 정리한 프로필입니다.",
    images: ["/profile.png"],
  },
};

type ExperienceBullet =
  | string
  | {
      title: string;
      details: string[];
      href?: string;
      linkLabel?: string;
    }
  | {
      groupTitle: string;
      items: {
        title: string;
        details: string[];
        href?: string;
        linkLabel?: string;
      }[];
    };

type Experience = {
  company: string;
  role: string;
  period: string;
  note?: string;
  bullets: ExperienceBullet[];
};

const summary = [
  "React / React Native 기반 모바일 서비스를 개발해온 6년차 개발자 RyuWoong입니다.",
  "저는 두 가지 영역에서 즐거움을 찾습니다. 하나는 사용자의 일상을 편리하게 만드는 생산성 도구를 직접 고민하고 제작하는 것이고, 다른 하나는 사용자가 마주하는 화면 너머의 데이터를 읽어 비즈니스 문제를 해결하는 것입니다.",
  "특히 구매 퍼널 어디에서 이탈이 심한지 분석하여 원인을 찾아내고, 실제 지표가 상승하는 추이를 확인하며 마케팅 비용의 효율을 높이는 과정에 몰입합니다. 빠른 실험과 성능 최적화로 서비스와 사용자가 함께 성장하는 발판을 만듭니다.",
];

const skillGroups = [
  { label: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript"] },
  { label: "UI/UX", items: ["Reanimated", "Design System", "Reusable Component", "Interaction"] },
  { label: "Delivery", items: ["GitHub Actions", "Fastlane", "CodePush", "HotUpdater"] },
  { label: "Collaboration", items: ["Product / Design / Marketing 협업", "문서화", "운영 자동화"] },
];

const experiences: Experience[] = [
  {
    company: "딜러타이어",
    role: "Software Developer",
    period: "2024.08 - 현재",
    note: "카티니 영업양수도 이후 근무",
    bullets: [
      {
        groupTitle: "아키텍처 현대화 및 개발 표준 수립",
        items: [
          {
            title: "뉴 아키텍처(New Architecture) 대응 및 의존성 최적화",
            details: [
              "React Native 0.76+ 환경 도입에 맞춰, 업데이트가 중단되거나 호환성이 낮은 외부 라이브러리를 제거하고 핵심 기능을 직접 구현하여 프레임워크 안정성을 확보했습니다.",
              "런타임 에러 가능성을 줄이고 외부 의존성을 최소화하여 유지보수 비용을 절감했습니다.",
            ],
          },
          {
            title: "AI-Native 개발 환경을 위한 패턴 기반 구조(Pattern-based Structure) 설계",
            details: [
              "LLM(Cursor, Copilot 등)이 코드 맥락을 정확히 파악할 수 있도록 예측 가능한 폴더 구조와 모듈화 컨벤션을 설계하여 변경점 인지 속도 및 코드 생성 정확도를 높였습니다.",
            ],
            href: "/blog/2",
            linkLabel: "보러가기",
          },
          {
            title: "팀 개발 표준 공통화 (ESLint & Convention 라이브러리화)",
            details: [
              "팀 내 일관된 코드 품질 유지를 위해 코딩 컨벤션 및 ESLint 설정을 자체 라이브러리(NPM 패키지 등)로 구축했습니다.",
              "신규 프로젝트 세팅 시간을 단축하고, 코드 리뷰 효율을 높여 팀 전체의 기술 부채 발생을 사전 방지했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "클라우드 인프라 최적화 및 배포 자동화",
        items: [
          {
            title: "배포 인프라 Serverless 전환을 통한 고정 비용 및 관리 리소스 절감",
            details: [
              "Microsoft App Center 서비스 종료에 대응하여 초기 CodePush Standalone 서버를 구축했으나, 지속적인 EC2 인프라 유지 비용을 절감하기 위해 HotUpdater 기반의 아키텍처로 재설계했습니다.",
              "기존 AWS ECS 기반의 무거운 구조를 AWS S3 + Lambda 중심의 Serverless 환경으로 개편하여 인프라 관리 포인트를 최소화하고 운영 비용을 절감했습니다.",
            ],
          },
          {
            title: "OTA(Over-the-Air) 배포 프로세스 고도화 및 속도 최적화",
            details: [
              "OTA 배포 속도를 기존 4~5초에서 1~2초대로 50% 이상 단축하여 긴급 대응 및 서비스 운영 효율을 극대화했습니다.",
              "GitHub Actions와 Fastlane을 결합한 CI/CD 파이프라인을 구축하여 빌드부터 Firebase App Distribution / TestFlight 배포, Slack 알림까지 전 과정을 자동화 및 안정성 개선했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "데이터 기반의 구매 퍼널 최적화 및 비즈니스 성장",
        items: [
          {
            title: "퍼포먼스 마케팅 협업을 통한 유입-전환 퍼널 분석",
            details: [
              "Firebase Analytics 및 Amplitude를 활용해 사용자 행동 로그를 정교하게 설계하고, 구매 여정 전반의 이탈 지점을 정량적으로 분석했습니다.",
              "특정 단계에서 발생하는 이탈 원인을 기술적/UX적 관점에서 파악하여 가설을 수립하고 실험을 진행했습니다.",
            ],
          },
          {
            title: "UI/UX 개선을 통한 전환율(CVR) 및 ROAS 효율 증대",
            details: [
              "퍼널 분석 결과를 바탕으로 이탈이 심한 구간의 UI를 직관적으로 개편하고, 로딩 성능 최적화를 병행하여 사용자 경험을 개선했습니다.",
              "최종 결제 전환율을 높여 마케팅 비용 효율(ROAS)을 극대화하고 서비스 성장에 실질적으로 기여했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "사내 지식 자산화 및 협업 프로세스 혁신",
        items: [
          {
            title: "Nextra 기반의 마크다운(MDX) 사내 위키 시스템 구축",
            details: [
              "파편화된 기술 문서와 온보딩 가이드를 통합하기 위해 Nextra와 MDX를 활용한 고도화된 위키 시스템을 직접 설계 및 개발했습니다.",
              "문서 수정 시 GitHub PR을 통해 검토 후 반영되는 Git-based Workflow를 정착시켜, 문서의 신뢰도를 높이고 체계적인 히스토리 관리 환경을 구축했습니다.",
            ],
          },
          {
            title: "전사적 온보딩 및 협업 효율 극대화",
            details: [
              "신규 입사자를 위한 가이드라인과 기술 스택 문서를 표준화하여 초기 온보딩 리소스를 획기적으로 단축했습니다.",
              "개발자뿐만 아니라 비개발 직군도 마크다운 기반의 협업 흐름에 참여할 수 있도록 가이드하여 팀 간 정보 비대칭을 해소했습니다.",
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
        groupTitle: "앱 성능 최적화 및 리소스 경량화",
        items: [
          {
            title: "앱 빌드 크기 및 OTA 번들 최적화 (30% 이상 경량화)",
            details: [
              "불필요한 UI 라이브러리 제거 및 고해상도 에셋 최적화를 통해 기존 70~80MB 수준의 앱 크기를 50MB 이하로 경량화했습니다.",
              "중복 의존성 제거 및 에셋 관리 체계 개선을 통해 30~40MB에 달하던 CodePush 번들을 10MB 수준으로 70% 이상 축소했습니다.",
            ],
          },
          {
            title: "배포 속도 및 운영 안정성 강화",
            details: [
              "번들 크기 최적화를 통해 사용자 측면의 초기 업데이트 다운로드 속도를 평균 10초에서 3~4초대로 단축했습니다.",
              "업데이트 과정에서의 사용자 이탈을 줄이고 앱 진입 경험을 개선했으며, CodePush 롤백 발생 건수도 약 50% 감소했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "비즈니스 협업 효율 및 딥링크(DeepLink) 시스템 구축",
        items: [
          {
            title: "마케팅 자율성 확보를 위한 딥링크(DeepLink) 시스템 설계 및 문서화",
            details: [
              "복잡한 앱 진입 시나리오를 체계화하여 커스텀 딥링크 스킴(Scheme) 및 유니버설 링크(Universal Links) 구조를 설계했습니다.",
              "마케팅팀이 개발자의 추가 지원 없이도 캠페인 링크를 직접 생성하고 운영할 수 있도록 딥링크 가이드라인을 문서화했습니다.",
              "캠페인 실행 리드타임을 단축하고, 마케팅 유입 데이터의 정확한 트래킹 환경을 마련하여 전사적 협업 효율을 높였습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "디자인 시스템(Design System) 구축 및 생산성 제고",
        items: [
          {
            title: "컴포넌트 중심의 디자인 시스템(Design System) 토대 마련",
            details: [
              "디자이너와의 긴밀한 협업을 통해 색상 팔레트, Typography, Button, Label 등 원자 단위(Atomic)의 재사용 가능한 공통 컴포넌트 라이브러리를 구축했습니다.",
              "디자인 시스템 도입을 통해 신규 화면 개발 속도를 높이고, 서비스 전반의 UI 일관성을 확보하여 팀 전체의 협업 효율과 생산성을 높였습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "데이터 관리 최적화 및 앱 성능 고도화",
        items: [
          {
            title: "React Query 기반의 효율적인 데이터 페칭(Fetching) 및 캐싱 전략 수립",
            details: [
              "무분별한 API 호출을 방지하기 위해 React Query(TanStack Query)를 도입하고, 정교한 캐싱 로직과 서버 상태 관리 구조를 설계했습니다.",
              "불필요한 네트워크 요청을 획기적으로 줄여 데이터 소모량을 절감하고 앱 성능을 높였습니다.",
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
        groupTitle: "멀티 도메인 서비스 개발 및 고도화 (e-Commerce & Fintech)",
        items: [
          {
            title: "다양한 비즈니스 도메인의 React Native 앱 서비스 구축",
            details: [
              "오픈마켓, 쇼핑몰, 예약 시스템 등 4~5개의 다양한 도메인 프로젝트에 참여하여 서비스 특성에 최적화된 앱 구조를 설계하고 구현했습니다.",
              "실시간 채팅, 구독 모델 기반 결제 시스템, App Store/Play Store 인앱 결제(IAP) 등 복잡한 서버 연동과 클라이언트 로직을 구현했습니다.",
            ],
          },
          {
            title: "빠른 시장 진입을 위한 애자일(Agile) 개발 및 병행 업무 수행",
            details: [
              "여러 프로젝트를 동시 병행하며 요구사항을 빠르게 분석하고, 서비스 성격에 맞는 기술 스택(Context API, Redux 등)을 유연하게 적용해 개발 리드타임을 단축했습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "개발 생산성 최적화 및 인프라 표준화",
        items: [
          {
            title: "React Native WebApp Boilerplate 자체 제작 및 도입",
            details: [
              "프로젝트 초기 세팅 비용을 획기적으로 줄이기 위해 WebApp 전용 Boilerplate를 직접 구축했습니다.",
              "공통 컴포넌트, 네이티브 브릿지 통신 규격, 인증 로직 등을 표준화하여 신규 프로젝트 착수 리소스를 약 30% 이상 절감했습니다.",
            ],
          },
          {
            title: "협업 프로세스 체계화 (Notion 도입 및 템플릿 설계)",
            details: [
              "파편화된 업무 히스토리를 통합하기 위해 Notion 기반의 프로젝트 관리 체계를 제안했습니다.",
              "기획-개발-QA 단계를 연결하는 프로젝트 템플릿을 제작하여 내부 커뮤니케이션 비용을 줄이고 협업 효율을 높였습니다.",
            ],
          },
        ],
      },
      {
        groupTitle: "기술 리더십 및 지식 공유",
        items: [
          {
            title: "사내 기술 세미나 주도 및 프론트엔드 역량 강화",
            details: [
              "동료 개발자(프론트엔드/백엔드)를 대상으로 React의 렌더링 원리 및 최신 프론트엔드 트렌드를 공유하는 세미나를 진행했습니다.",
              "팀 전체의 기술 상향 평준화를 도모하고, 백엔드 개발자와의 원활한 소통을 위한 API 설계 컨벤션 가이드라인을 제시했습니다.",
            ],
          },
        ],
      },
    ],
  },
];

const openSourceActivities = [
  {
    name: "react-native-naver-login",
    description: "기능 추가, 오류 수정, 에러 핸들링 개선에 기여했습니다.",
    linkLabel: "Repository",
    href: "https://github.com/crossplatformkorea/react-native-naver-login",
  },
  {
    name: "react-native-naver-map",
    description: "앱 크래시를 유발할 수 있는 엣지 케이스를 이슈로 제보했습니다.",
    linkLabel: "Issue",
    href: "https://github.com/mym0404/react-native-naver-map/issues/143",
  },
];

const education = [
  { period: "2013.03", detail: "대학교 입학" },
  { period: "2019.02", detail: "경제학 학사 졸업" },
  { period: "2019.05", detail: "정보처리기사 취득" },
];

const militaryService = [
  { period: "2014.03", detail: "해군 입대" },
  { period: "2016.02", detail: "해군 병장 만기 전역" },
];

export default function Profile() {
  return (
    <div className={styles.container}>
      <FadeInSection className={styles.heroSection}>
        <div className={styles.heroTop}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Profile</p>
            <div className={styles.heroIdentity}>
              <h1 className={`typo-hero ${styles.heroTitle}`}>박정륭</h1>
              <div className={styles.heroMeta}>
                <span className={styles.heroRole}>효율을 만드는 개발자</span>
                <span className={styles.metaDivider} />
                <Link href="mailto:wjdfbd1121@gmail.com" className={styles.heroEmail}>
                  wjdfbd1121@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.avatarWrap}>
              <Image className={styles.avatar} src={character} alt="박정륭 프로필 캐릭터" width={120} height={120} priority />
            </div>
          </div>
        </div>

        <div className={styles.summary}>
          {summary.map((paragraph) => (
            <p key={paragraph} className="typo-body-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.heroHighlights}>
          <span className={styles.badge}>React / React Native</span>
          <span className={styles.badge}>Mobile Service</span>
          <span className={styles.badge}>Reusable UI</span>
          <span className={styles.badge}>CI/CD & OTA</span>
        </div>
      </FadeInSection>

      <section className={styles.section} id="skills">
        <FadeInSection>
          <Link href="#skills">
            <h2 className={`typo-hero ${styles.sectionTitle}`}>
              Skills<span className={styles.point}>.</span>
            </h2>
          </Link>
        </FadeInSection>

        <div className={styles.skillGrid}>
          {skillGroups.map((group, index) => (
            <FadeInSection key={group.label} className={styles.skillCard} delay={index * 80}>
              <p className={styles.skillLabel}>{group.label}</p>
              <div className={styles.skillItems}>
                {group.items.map((item) => (
                  <span key={item} className={styles.skillChip}>
                    {item}
                  </span>
                ))}
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className={styles.section} id="experience">
        <FadeInSection>
          <Link href="#experience">
            <h2 className={`typo-hero ${styles.sectionTitle}`}>
              Experience<span className={styles.point}>.</span>
            </h2>
          </Link>
        </FadeInSection>

        {experiences.map((experience, index) => (
          <FadeInSection key={experience.company} className={styles.experienceRow} delay={index * 80}>
            <div className={styles.experienceSidebar}>
              <h3 className="typo-h1">
                {experience.company}
                <span className={styles.point}>.</span>
              </h3>
              <span className={styles.experienceRole}>{experience.role}</span>
              <span className={styles.experiencePeriod}>{experience.period}</span>
              {experience.note ? <p className={styles.experienceNote}>{experience.note}</p> : null}
            </div>

            <div className={styles.experienceBody}>
              <ul className={styles.bulletList}>
                {experience.bullets.map((bullet) => (
                  <li
                    key={
                      typeof bullet === "string"
                        ? bullet
                        : "groupTitle" in bullet
                          ? bullet.groupTitle
                          : bullet.title
                    }
                    className="typo-body"
                  >
                    {typeof bullet === "string" ? (
                      bullet
                    ) : "groupTitle" in bullet ? (
                      <div className={styles.bulletCluster}>
                        <p className={styles.bulletClusterTitle}>{bullet.groupTitle}</p>
                        <div className={styles.bulletClusterItems}>
                          {bullet.items.map((item) => (
                            <div key={item.title} className={styles.bulletGroup}>
                              <div className={styles.bulletTitleRow}>
                                <p className={styles.bulletTitle}>{item.title}</p>
                                {item.href ? (
                                  <Link href={item.href} className={styles.bulletLink}>
                                    {item.linkLabel ?? "보러가기"}
                                  </Link>
                                ) : null}
                              </div>
                              <ul className={styles.bulletDetailList}>
                                {item.details.map((detail) => (
                                  <li key={detail} className={styles.bulletDetailItem}>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={styles.bulletGroup}>
                        <div className={styles.bulletTitleRow}>
                          <p className={styles.bulletTitle}>{bullet.title}</p>
                          {bullet.href ? (
                            <Link href={bullet.href} className={styles.bulletLink}>
                              {bullet.linkLabel ?? "보러가기"}
                            </Link>
                          ) : null}
                        </div>
                        <ul className={styles.bulletDetailList}>
                          {bullet.details.map((detail) => (
                            <li key={detail} className={styles.bulletDetailItem}>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        ))}
      </section>

      <section className={styles.section} id="more">
        <FadeInSection>
          <Link href="#more">
            <h2 className={`typo-hero ${styles.sectionTitle}`}>
              More<span className={styles.point}>.</span>
            </h2>
          </Link>
        </FadeInSection>

        <div className={styles.infoGrid}>
          <FadeInSection className={styles.infoCard}>
            <h3 className="typo-h3">
              Blog<span className={styles.point}>.</span>
            </h3>
            <p className={`typo-body ${styles.infoDescription}`}>
              문제 해결 과정과 기술적 의사결정을 정리하고 공유하기 위해 블로그를 운영하고 있습니다.
            </p>
            <div className={styles.linkGroup}>
              <Link
                href="https://ryuwoong.me/blog"
                target="_blank"
                rel="noreferrer"
                className={`${styles.infoLink} ${styles.terminalLink}`}
              >
                cd 블로그
              </Link>
              <Link
                href="https://tistory.ryuwoong.me"
                target="_blank"
                rel="noreferrer"
                className={`${styles.infoLink} ${styles.terminalLink}`}
              >
                cd (구)블로그
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection className={styles.infoCard} delay={80}>
            <h3 className="typo-h3">
              Open Source Activities<span className={styles.point}>.</span>
            </h3>
            <div className={styles.activityList}>
              {openSourceActivities.map((activity) => (
                <article key={activity.name} className={styles.activityItem}>
                  <p className={styles.activityTitle}>{activity.name}</p>
                  <p className={`typo-body ${styles.infoDescription}`}>{activity.description}</p>
                  <Link href={activity.href} target="_blank" rel="noreferrer" className={styles.infoLink}>
                    {activity.linkLabel}
                  </Link>
                </article>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection className={styles.infoCard} delay={160}>
            <h3 className="typo-h3">
              Education<span className={styles.point}>.</span>
            </h3>
            <ul className={styles.timelineList}>
              {education.map((item) => (
                <li key={`${item.period}-${item.detail}`} className={styles.timelineItem}>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                  <span className="typo-body">{item.detail}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection className={styles.infoCard} delay={240}>
            <h3 className="typo-h3">
              Military Service<span className={styles.point}>.</span>
            </h3>
            <ul className={styles.timelineList}>
              {militaryService.map((item) => (
                <li key={`${item.period}-${item.detail}`} className={styles.timelineItem}>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                  <span className="typo-body">{item.detail}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
