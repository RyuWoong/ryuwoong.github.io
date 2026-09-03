import type { Metadata } from "next";
import Link from "next/link";

import type { Experience } from "@/app/(main)/profile/profile-data";

import styles from "../pdf/page.module.css";

import {
  cjCoreStrengths,
  cjEducation,
  cjExperiences,
  cjGrowthDirection,
  cjMilitaryService,
  cjOpenSourceActivities,
  cjProfile,
  cjSkillGroups,
  cjSummary,
} from "./cj-food-resume-data";
import PrintButton from "./PrintButton";
import ProfileVisual from "./ProfileVisual";
import ScrollTopButton from "./ScrollTopButton";

export const metadata: Metadata = {
  title: {
    absolute: "박정륭 CJ푸드빌 맞춤 이력서",
  },
  description: "CJ푸드빌 지원을 위한 박정륭 맞춤형 A4 PDF 출력용 이력서입니다.",
  alternates: {
    canonical: "/profile/cj-food",
  },
};

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

export default function CjFoodResumePage() {
  const currentExperience = cjExperiences[0];

  return (
    <main className={`${styles.page} ${styles.cjResume}`}>
      <div className={styles.toolbar}>
        <Link href="/profile" className={styles.backLink}>
          프로필로 돌아가기
        </Link>
        <Link href="/profile/pdf" className={styles.backLink}>
          기본 PDF 보기
        </Link>
        <PrintButton />
      </div>
      <ScrollTopButton />

      <section className={`${styles.sheet} ${styles.coverSheet}`} aria-label="CJ푸드빌 맞춤 이력서 첫 페이지">
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>CJ Foodville Resume</p>
            <h1>{cjProfile.name}</h1>
            <p className={styles.role}>{cjProfile.role}</p>
            <address className={styles.heroContact}>
              <a href={`mailto:${cjProfile.email}`}>
                <MailIcon />
                {cjProfile.email}
              </a>
              <a href={cjProfile.website}>
                <AtSignIcon />
                {cjProfile.website.replace("https://", "")}
              </a>
            </address>
          </div>
          <ProfileVisual />
        </header>

        <section className={styles.capabilityBox}>
          <ul>
            {cjSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>매칭 포인트</h2>
          <ul className={styles.outcomeGrid}>
            {cjCoreStrengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.skillGrid}>
            {cjSkillGroups.map((group) => (
              <div key={group.label} className={styles.skillGroup}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.pageFooter}>1 / 4</footer>
      </section>

      <section className={styles.sheet} aria-label="현재 경력 상세">
        <div className={styles.sheetHeader}>
          <p>Experience Detail</p>
          <span>{cjProfile.name}</span>
        </div>
        {renderExperience(currentExperience, true)}
        <footer className={styles.pageFooter}>2 / 4</footer>
      </section>

      <section className={styles.sheet} aria-label="이전 경력 상세">
        <div className={styles.sheetHeader}>
          <p>Previous Experience</p>
          <span>{cjProfile.name}</span>
        </div>
        <div className={styles.compactCareer}>{cjExperiences.slice(1).map((experience) => renderExperience(experience, true))}</div>
        <footer className={styles.pageFooter}>3 / 4</footer>
      </section>

      <section className={`${styles.sheet} ${styles.activitiesSheet}`} aria-label="기타 활동 및 성장 방향">
        <section className={styles.sideSection}>
          <h3>Growth Direction</h3>
          <ul className={styles.activityList}>
            {cjGrowthDirection.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.sideSection}>
          <h3>Open Source</h3>
          <ul className={styles.activityList}>
            {cjOpenSourceActivities.map((activity) => (
              <li key={activity.name}>
                <strong>{activity.name}</strong>
                <p>{activity.description}</p>
                <span>{activity.href.replace("https://github.com/", "github.com/")}</span>
              </li>
            ))}
          </ul>
        </section>

        {renderTimeline("Education / Certification", cjEducation)}
        {renderTimeline("Military Service", cjMilitaryService)}

        <footer className={styles.pageFooter}>4 / 4</footer>
      </section>
    </main>
  );
}
