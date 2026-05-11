import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  education,
  experiences,
  militaryService,
  openSourceActivities,
  profile,
  skillGroups,
  type Experience,
} from "@/app/(main)/profile/profile-data";
import character from "@/public/profile.png";

import styles from "./page.module.css";
import PrintButton from "./PrintButton";
import ScrollTopButton from "./ScrollTopButton";

export const metadata: Metadata = {
  title: {
    absolute: "박정륭 이력서 PDF",
  },
  description: "박정륭 프로필 기반 A4 PDF 출력용 이력서입니다.",
  alternates: {
    canonical: "/pdf",
  },
};

const selectedOutcomes = [
  "OTA 배포 속도 4~5초에서 1~2초대로 50% 이상 단축",
  "CodePush 번들 30~40MB에서 10MB 수준으로 70% 이상 축소",
  "앱 크기 70~80MB 수준에서 50MB 이하로 경량화",
  "GitHub Actions와 Fastlane 기반 앱 배포 자동화 구축",
  "Nextra/MDX 기반 사내 위키와 Git-based Workflow 정착",
  "딥링크 가이드 문서화로 마케팅 캠페인 운영 자율성 확보",
  "React Native 0.76+ New Architecture 대응 및 외부 의존성 정리",
  "Firebase Analytics와 Amplitude 기반 구매 퍼널 이탈 지점 분석",
  "퍼널 분석 기반 UI/UX 개선으로 결제 전환과 ROAS 효율 개선",
  "React Query 캐싱 전략으로 불필요한 네트워크 요청 축소",
  "디자인 시스템 기반 공통 컴포넌트 구축으로 신규 화면 개발 속도 향상",
  "프로젝트 관리 템플릿과 개발 컨벤션 정리로 협업 비용 절감",
];

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.75 6.75h14.5v10.5H4.75z" />
      <path d="m5.25 7.25 6.75 5 6.75-5" />
    </svg>
  );
}

function AtSignIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.75" />
      <path d="M15.75 8.25v4.65a2.1 2.1 0 0 0 4.2 0V12a7.95 7.95 0 1 0-2.35 5.65" />
    </svg>
  );
}

function renderExperience(experience: Experience, compact = false) {
  return (
    <article key={experience.company} className={styles.experience}>
      <header className={styles.experienceHeader}>
        <div>
          <h3>{experience.company}</h3>
          <p>{experience.role}</p>
        </div>
        <div className={styles.periodBlock}>
          <span>{experience.period}</span>
          {experience.note ? <small>{experience.note}</small> : null}
        </div>
      </header>

      <div className={compact ? styles.compactGroups : styles.experienceGroups}>
        {experience.bullets.map((bullet) => {
          if (typeof bullet === "string") {
            return (
              <p key={bullet} className={styles.plainBullet}>
                {bullet}
              </p>
            );
          }

          if ("groupTitle" in bullet) {
            return (
              <section key={bullet.groupTitle} className={styles.workGroup}>
                <h4>{bullet.groupTitle}</h4>
                {bullet.items.map((item) => (
                  <div key={item.title} className={styles.workItem}>
                    <p className={styles.workTitle}>{item.title}</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            );
          }

          return (
            <section key={bullet.title} className={styles.workGroup}>
              <div className={styles.workItem}>
                <p className={styles.workTitle}>{bullet.title}</p>
                <ul>
                  {bullet.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}

function renderTimeline(title: string, items: { period: string; detail: string }[]) {
  return (
    <section className={styles.sideSection}>
      <h3>{title}</h3>
      <ul className={styles.timeline}>
        {items.map((item) => (
          <li key={`${item.period}-${item.detail}`}>
            <span>{item.period}</span>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ResumePdfPage() {
  return (
    <main className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/profile" className={styles.backLink}>
          프로필로 돌아가기
        </Link>
        <PrintButton />
      </div>
      <ScrollTopButton />

      <section className={`${styles.sheet} ${styles.coverSheet}`} aria-label="이력서 첫 페이지">
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Frontend / React Native Developer</p>
            <h1>{profile.name}</h1>
            <p className={styles.role}>{profile.role}</p>
            <address className={styles.heroContact}>
              <a href={`mailto:${profile.email}`}>
                <MailIcon />
                {profile.email}
              </a>
              <a href={profile.website}>
                <AtSignIcon />
                {profile.website.replace("https://", "")}
              </a>
            </address>
          </div>
          <div className={styles.profileVisual} aria-label="박정륭 프로필 이미지">
            <Image src={character} alt="박정륭 프로필 캐릭터" width={132} height={132} priority />
          </div>
        </header>

        <section className={styles.section}>
          <h2>Core Impact</h2>
          <ul className={styles.outcomeGrid}>
            {selectedOutcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.skillGrid}>
            {skillGroups.map((group) => (
              <div key={group.label} className={styles.skillGroup}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Career Snapshot</h2>
          <div className={styles.snapshotList}>
            {experiences.map((experience) => (
              <article key={experience.company} className={styles.snapshotItem}>
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <span>{experience.period}</span>
              </article>
            ))}
          </div>
        </section>

        <footer className={styles.pageFooter}>1 / 4</footer>
      </section>

      <section className={styles.sheet} aria-label="현재 경력 상세">
        <div className={styles.sheetHeader}>
          <p>Experience Detail</p>
          <span>{profile.name}</span>
        </div>
        {renderExperience(experiences[0])}
        <footer className={styles.pageFooter}>2 / 4</footer>
      </section>

      <section className={styles.sheet} aria-label="이전 경력 상세">
        <div className={styles.sheetHeader}>
          <p>Previous Experience</p>
          <span>{profile.name}</span>
        </div>

        <div className={styles.compactCareer}>{experiences.slice(1).map((experience) => renderExperience(experience, true))}</div>
        <footer className={styles.pageFooter}>3 / 4</footer>
      </section>

      <section className={`${styles.sheet} ${styles.activitiesSheet}`} aria-label="기타 활동 및 학력">
        <div className={styles.sheetHeader}>
          <p>Activities & Background</p>
          <span>{profile.name}</span>
        </div>

        <div className={styles.bottomGrid}>
          <section className={styles.sideSection}>
            <h3>Open Source</h3>
            <ul className={styles.activityList}>
              {openSourceActivities.map((activity) => (
                <li key={activity.name}>
                  <strong>{activity.name}</strong>
                  <p>{activity.description}</p>
                  <span>{activity.href.replace("https://github.com/", "github.com/")}</span>
                </li>
              ))}
            </ul>
          </section>

          {renderTimeline("Education", education)}
          {renderTimeline("Military Service", militaryService)}
        </div>

        <footer className={styles.pageFooter}>4 / 4</footer>
      </section>
    </main>
  );
}
