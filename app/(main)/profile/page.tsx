import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FadeInSection from "@/components/FadeInSection";
import character from "@/public/profile.png";

import styles from "./page.module.css";
import { education, experiences, militaryService, openSourceActivities, profile, skillGroups, summary } from "./profile-data";

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

export default function Profile() {
  return (
    <div className={styles.container}>
      <FadeInSection className={styles.heroSection}>
        <div className={styles.heroTop}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Profile</p>
            <div className={styles.heroIdentity}>
              <h1 className={`typo-hero ${styles.heroTitle}`}>{profile.name}</h1>
              <div className={styles.heroMeta}>
                <span className={styles.heroRole}>{profile.role}</span>
                <span className={styles.metaDivider} />
                <Link href={`mailto:${profile.email}`} className={styles.heroEmail}>
                  {profile.email}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.avatarWrap}>
              <Image
                className={styles.avatar}
                src={character}
                alt="박정륭 프로필 캐릭터"
                width={120}
                height={120}
                priority
              />
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
          <span className={styles.badge}>Design System</span>
          <span className={styles.badge}>Funnel 개선</span>
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
                      typeof bullet === "string" ? bullet : "groupTitle" in bullet ? bullet.groupTitle : bullet.title
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
