import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import character from "@/public/profile.png";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "박정륭 | Software Developer",
  description: "React / React Native 기반 모바일 서비스를 개발해온 6년 차 프론트엔드 개발자 박정륭의 프로필입니다.",
};

const summary = [
  "React / React Native 기반 모바일 서비스를 개발해온 6년 차 프론트엔드 개발자입니다.",
  "사용자 경험을 높이는 인터랙션 구현, 재사용 가능한 UI 설계, 배포 자동화와 구조 개선에 강점이 있습니다.",
  "기능 구현에 그치지 않고 서비스 완성도와 개발 생산성을 함께 높이는 방향으로 문제를 정의하고 해결해왔습니다.",
];

const skillGroups = [
  { label: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript"] },
  { label: "UI/UX", items: ["Reanimated", "Design System", "Reusable Component", "Interaction"] },
  { label: "Delivery", items: ["GitHub Actions", "Fastlane", "CodePush", "HotUpdater"] },
  { label: "Collaboration", items: ["Product / Design / Marketing 협업", "문서화", "운영 자동화"] },
];

const experiences = [
  {
    company: "딜러타이어",
    role: "Software Developer",
    period: "2024.08 - 현재",
    note: "카티니 영업양수도 이후 근무",
    bullets: [
      "React Native 0.76+ 환경에서 New Architecture 도입을 목표로 기술 부채를 정리하고 불필요한 의존성을 제거·대체했습니다.",
      "외부 라이브러리 의존 기능 일부를 직접 구현해 유지보수성과 구조 안정성을 높였습니다.",
      "회사 업무 효율 향상을 위해 GitBook 느낌의 사내 위키를 개발하고, 마크다운 기반 문서 작성 흐름을 정착시켜 히스토리 관리와 온보딩 효율을 높였습니다.",
      "AI 시대에 맞춘 구조 설계로 코드 변경점을 쉽게 인지할 수 있도록 폴더 구조를 개편해 규칙성과 직관성을 높였습니다.",
      "App Center 종료에 대응해 사내 인프라 담당자와 협업하여 CodePush Standalone 서버를 구축했고, 배포 속도를 평균 2~3초에서 1~2초 수준으로 단축했습니다.",
      "유지보수성이 낮아진 CodePush를 HotUpdater 기반으로 전환해 배포 안정성과 운영 효율을 개선하고, 인프라를 AWS ECS + S3 구조에서 AWS S3 + Lambda 중심으로 단순화했습니다.",
      "GitHub Actions와 Fastlane을 활용해 OTA 배포 및 Firebase App Distribution / TestFlight 배포 과정을 자동화하고 Slack 알림 체계를 구축했습니다.",
      "Reanimated 기반 인터랙션 컴포넌트를 구현해 키보드 대응 Submit 버튼, Floating 버튼 등 사용성 개선 요소를 서비스에 반영했습니다.",
      "AI를 활용한 차량 DB 구축 아이디어를 제안했고, 해당 안건이 팀의 신규 목표로 채택되도록 기여했습니다.",
    ],
  },
  {
    company: "카티니",
    role: "Software Developer",
    period: "2023.04 - 2024.07",
    bullets: [
      "빠른 기능 출시와 안정적인 배포를 위해 앱 배포 환경과 운영 구조 개선에 집중했습니다.",
      "마케팅팀과 긴밀하게 협업하며 Firebase, Amplitude, Airbridge, Flarelane 등을 활용해 신규 유입과 리텐션 개선에 기여했습니다.",
      "앱 크기와 초기 진입 성능 문제를 개선해 기존 70~80MB 수준의 앱 크기를 50MB 이하로 경량화했고, CodePush 번들 크기를 30~40MB에서 10MB 수준으로 축소했습니다.",
      "CodePush 배포 속도를 평균 4~5초에서 2~3초로 단축했고, 롤백 수를 약 50% 감소시켜 운영 안정성을 높였습니다.",
      "과도한 UI 라이브러리를 제거하고 대체 가능한 기능은 직접 구현하는 방식으로 전환해 의존성을 줄였으며, React Native 버전 업그레이드와 New Architecture 대응 기반을 마련했습니다.",
      "DeepLink 기능을 설계하고 문서화해 마케팅팀이 개발팀 도움 없이 캠페인을 운영할 수 있는 기반을 마련했습니다.",
      "디자이너 가이드를 바탕으로 색상 팔레트, Button, Label, Typography 등 재사용 가능한 컴포넌트를 구축해 디자인 시스템의 토대를 마련했습니다.",
      "React Query를 활용해 불필요한 API 호출을 줄이고 캐싱 전략과 에러 핸들링을 개선해 네트워크 효율, 앱 성능, 사용자 경험을 함께 높였습니다.",
    ],
  },
  {
    company: "디몬스터",
    role: "Software Developer",
    period: "2021.04 - 2022.12",
    bullets: [
      "React Native 기반 오픈마켓, 쇼핑몰, 예약, 결제 도메인의 4~5개 프로젝트에 참여했습니다.",
      "채팅, 구독 결제, 인앱 결제 기능 구현과 서버 연동 등 다양한 서비스 요구사항을 경험했습니다.",
      "여러 프로젝트를 병행하며 서비스 성격에 맞는 앱 구조와 기능을 빠르게 구현하는 역량을 쌓았습니다.",
      "React Native 기반 WebApp Boilerplate를 제작해 프로젝트 초기 세팅 비용을 줄였습니다.",
      "업무 효율 개선을 위해 Notion 도입을 제안하고 프로젝트 관리 템플릿을 제작해 내부 히스토리 관리와 협업 효율 향상에 기여했습니다.",
      "신규 개발자와 백엔드 개발자를 대상으로 React 원리와 최신 프론트엔드 트렌드를 공유하는 사내 세미나를 진행했습니다.",
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
                <span className={styles.heroRole}>Software Developer</span>
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
                  <li key={bullet} className="typo-body">
                    {bullet}
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
