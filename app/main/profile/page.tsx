import Image from "next/image";
import styles from "./page.module.css";
import character from "@/public/ryuwoong.png";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이력서 - RyuWoong",
  description: "어울리는 개발자 RyuWoong 입니다.",
};

export default function Profile() {
  return (
    <div className={styles.container}>
      <section className={styles.section} id="about">
        <div className={styles.about}>
          <div className={styles.description}>
            <Link href={"#about"}>
              <h1 className={`${styles["text-xl"]} ${styles.title}`}>
                안녕하세요,
                <br />
                저는 박정륭입니다
                <span className={styles.point}>.</span>
              </h1>
            </Link>
            <p className={styles["text-s"]}>
              서울에서 <span className={styles.highlight}>React Native</span>를 활용한 모바일 개발을 전문으로{" "}
              <span className={styles.highlight}>4년간</span> 다양한 프로젝트를 수행했습니다. 기술적 도전을 즐기며,{" "}
              <span className={styles.highlight}>퍼포먼스 최적화</span>와{" "}
              <span className={styles.highlight}>효율적인 개발 프로세스</span>에 관심이 많습니다. 또한{" "}
              <span className={styles.highlight}>코드 품질에 대한 고민</span>을 꾸준히 하며,{" "}
              <span className={styles.highlight}>협업을 통한 문제 해결</span>을 즐깁니다. 현재는 <b>딜러타이어</b>에서
              40만명의 회원을 보유한 <span className={styles.highlight}>타이어픽</span> 앱 개발을 담당 하고 있으며 홀로
              2년간 안정적으로 운영 및 관리하고 있습니다.
            </p>
          </div>
          <div className={styles.information}>
            <Image src={character} alt="character" width={120} height={120} />
            <h2 className={styles["text-m"]}>
              박정륭 <span className={styles["text-s"]}>(Software Engineer)</span>
            </h2>
            <p className={styles["text-s"]}>
              <span className={styles.highlight}>@</span>{" "}
              <Link href={"mailto:wjdfbd1121@gmail.com"}>wjdfbd1121@gmail.com</Link>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="experience">
        <Link href={"#experience"}>
          <h1 className={`${styles["text-xl"]} ${styles.title}`}>
            Work Experience<span className={styles.point}>.</span>
          </h1>
        </Link>
        <div className={styles.row}>
          <div className={styles["row-left"]}>
            <h2 className={styles["text-l"]}>
              딜러타이어<span className={styles.point}>.</span>
            </h2>
            <span className={styles.role}>Front-End</span>
            <span className={styles.period}>24.08 - Now</span>
          </div>
          <div className={styles["row-right"]}>
            <h3 className={styles["text-l"]}>
              타이어픽<span className={styles.point}>.</span>
            </h3>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Codepush 자체 서버 구축</h4>
              <p className={styles["text-s"]}>- 기존 AppCenter 종료로 인해 AWS S3 기반 CodePush 서버 구축</p>
              <p className={styles["text-s"]}>- 배포 속도: 평균 2~3초 → 1~2초 단축 </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>App CI/CD</h4>
              <p className={styles["text-s"]}>
                - <span className={styles.highlight}>GitHub Actions</span> 활용, 배포 과정 자동화
              </p>
              <p className={styles["text-s"]}>- Codepush 배포 프로세스 자동화, 타겟 버전과 배포 환경 설정으로 배포</p>
              <p className={styles["text-s"]}>- 기존에 수동 배포로 생길 수 있는 실수 예방 및 배포 후 슬랙을 통한 처리 알림</p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles["row-left"]}>
            <h2 className={styles["text-l"]}>
              카티니<span className={styles.point}>.</span>
            </h2>
            <span className={styles.role}>Front-End</span>
            <span className={styles.period}>23.04 - 24.07</span>
          </div>
          <div className={styles["row-right"]}>
            <h3 className={styles["text-l"]}>
              타이어픽<span className={styles.point}>.</span>
            </h3>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>앱 사이즈 최적화</h4>
              <p className={styles["text-s"]}>- 기존 70~80MB → 50MB 이하로 경량화</p>
              <p className={styles["text-s"]}>- CodePush BundleSize 30~40MB → 10MB로 축소</p>
              <p className={styles["text-s"]}>- CodePush 배포 속도: 평균 4~5초에서 2~3초로 단축</p>
              <p className={styles["text-s"]}>- CodePush 롤백 수 약 50% 감소, 운영 안정성 증가</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>DeepLink 시스템 설계 및 문서화</h4>
              <p className={styles["text-s"]}>- DeepLink 기능 설계 및 구현</p>
              <p className={styles["text-s"]}>- 가이드 문서 작성, 비개발자(마케팅팀)도 딥링크를 작성할 수 있게 시스템 설계</p>
              <p className={styles["text-s"]}>- 마케팅팀이 캠페인 설정시 개발팀 도움 없이 캠페인 가능</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>컴포넌트 제작 및 라이브러리 최적화</h4>
              <p className={styles["text-s"]}>- 불필요한 라이브러리 제거, 디자인 시스템 기반 자체 컴포넌트 개발</p>
            </div>

            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Data Fetching 개선</h4>
              <p className={styles["text-s"]}>- 불필요한 API 호출 최소화, 데이터 캐싱 및 최적화로 성능 향상</p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles["row-left"]}>
            <h2 className={styles["text-l"]}>
              디몬스터<span className={styles.point}>.</span>
            </h2>
            <span className={styles.role}>Front-End</span>
            <span className={styles.period}>21.04 - 22.12</span>
          </div>
          <div className={styles["row-right"]}>
            <h3 className={styles["text-l"]}>
              업무내용<span className={styles.point}>.</span>
            </h3>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>프로젝트 참여</h4>
              <p className={styles["text-s"]}>
                - React Native를 활용한 오픈마켓, 예약 시스템, 결제 시스템 등 4~5개 프로젝트 참여
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>WebApp BoilerPlate 제작</h4>
              <p className={styles["text-s"]}>- React Native 기반 WebApp 개발 템플릿 제작</p>
              <p className={styles["text-s"]}>- 신속한 프로젝트 셋업 가능하도록 내부 공유</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Project 관리 Notion Template 제작</h4>
              <p className={styles["text-s"]}>- 업무 효율 개선을 위한 Notion 도입 제안 및 템플릿 제작 후 내부 공유</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>사내 React 세미나 진행</h4>
              <p className={styles["text-s"]}>
                - 신규 개발자 및 백엔드 개발자 대상 React 원리 및 최신 Front 트렌드 공유
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="other">
        <Link href={"#other"}>
          <h1 className={`${styles["text-xl"]} ${styles.title}`}>
            Other Experience<span className={styles.point}>.</span>
          </h1>
        </Link>
        <div className={styles.project}>
          <h4 className={styles["text-m"]}>
            블로그<span className={styles.point}>.</span>
          </h4>
          <p className={styles["text-s"]}>
            개발자가 된 후 초기에는 개발을 하면서 막막했던 순간들이 많았습니다. 저의 삽질이 누군가에게 도움이 되었으면
            하는 바람에 블로그를 운영하고 있습니다.
          </p>
        </div>

        <div className={styles.project}>
          <h4 className={styles["text-m"]}>
            병역<span className={styles.point}>.</span>
          </h4>
          <p className={styles["text-s"]}>해군 운전병으로 복무하였으며, 다양한 경험을 하며 만기전역했습니다.</p>
        </div>

        <div className={styles.project}>
          <h4 className={styles["text-m"]}>
            학력<span className={styles.point}>.</span>
          </h4>
          <p className={styles["text-s"]}>
            장학금을 받을 정도로 준수한 성적으로 경제학 학사 졸업하였습니다.대학 시절부터 개발에 대한 꿈을 가졌고
            디스코드 봇을 개발해보며 개발을 시작했습니다. 현재는 더 나은 개발자가 되기 위해 정진하고 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
