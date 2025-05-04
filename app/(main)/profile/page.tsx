import Image from "next/image";
import styles from "./page.module.css";
import character from "@/public/ryuwoong.png";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로필 - RyuWoong",
  description: "탐험하는 개발자 RyuWoong 입니다.",
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
             <span className={styles.highlight}>React Native</span> 기반 모바일 앱 개발 5년차로{" "}
              <span className={styles.highlight}>스스로 문제를 발견하고 해결</span>하는데 강점을 가진 개발자입니다.{" "}
             앱 경량화, CI/CD 자동화, DeepLink 시스템 구축 등을 <span className={styles.highlight}>주요 개선 작업을 주도</span>하였으며,{" "}
              <span className={styles.highlight}>퍼포먼스 최적화</span>와{" "}
              <span className={styles.highlight}>개발 프로세스 효율화</span>에 관심이 많습니다. 또한{" "}
              <span className={styles.highlight}>비용 절감</span> 아이디어를 제안하고, 실현해 재정에 도움을 주고자 하며,{" "}
              오픈소스 프로젝트에도 참여해 이슈 제기 및 PR 기여를 통해 커뮤니티 발전에 힘쓰고 있습니다. 
              현재는 <span className={styles.highlight}>딜러타이어</span>에서
              40만명의 회원을 보유한 <span className={styles.highlight}>타이어픽</span> 앱 개발을 담당하고 있으며 단독으로
              2년간 안정적으로 운영 및 관리하고 있습니다.
            </p>
          </div>
          <div className={styles.information}>
            <Image className={styles.character} src={character} alt="character"  width={120} height={120}/>
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
              <p className={styles["text-s"]}>- 기존 AppCenter 종료로 인해 CodePush StandAlone 서버 구축</p>
              <p className={styles["text-s"]}>- 배포 속도: 평균 2~3초 → 1~2초 단축 </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Codepush에서 HotUpdater로 전환</h4>
              <p className={styles["text-s"]}>- 앱 배포 안정성 개선</p>
              <p className={styles["text-s"]}>- 라이브러리 유지보수성 개선</p>
              <p className={styles["text-s"]}>- 서버 운영비용 절감 (AWS ECS에서 AWS S3와 Lambda로 변경)</p>
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
              <p className={styles["text-s"]}>- 과도한 UI 라이브러리 제거 및 경량화</p>
              <p className={styles["text-s"]}>- 디자인 시스템 기반 자체 컴포넌트 개발로 유지보수성 강화</p>
              <p className={styles["text-s"]}>- React Native 버전 업그레이드 및 New Architecture 대응</p>
              <p className={styles["text-s"]}>    • 지원 미흡/기능 제한 라이브러리 대체 및 구현</p>
            </div>

            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Data Layer 개선</h4>
              <p className={styles["text-s"]}>- React Query를 활용하여 불필요한 API 호출을 제거</p>
              <p className={styles["text-s"]}>- 데이터 캐싱 전략을 개선해 네트워크 효율성과 앱 성능을 향상</p>
              <p className={styles["text-s"]}>- 에러 핸들링 로직을 강화하여 안정성과 사용자 경험을 함께 개선</p>
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
          개발 과정에서 얻은 문제 해결 경험과 기술 지식을 체계적으로 정리하고 공유하기 위해 블로그를 운영하고 있으며, 이를 통해 개인 역량 강화뿐만 아니라 커뮤니티 기여에도 힘쓰고 있습니다.
          </p>
        </div>

        <div className={styles.project}>
          <h4 className={styles["text-m"]}>
            병역<span className={styles.point}>.</span>
          </h4>
          <p className={styles["text-s"]}>해군 병장 만기 전역 하였으며, 해군 운전병 복무 중 고위 인사 의전 및 중요 상황 대응을 통해, 책임감과 신속한 의사결정 능력을 키웠습니다.</p>
        </div>

        <div className={styles.project}>
          <h4 className={styles["text-m"]}>
            학력<span className={styles.point}>.</span>
          </h4>
          <p className={styles["text-s"]}>
          경제학을 전공하던 중 디스코드 봇을 직접 개발하며, 처음으로 ‘코드를 통해 문제를 해결하는’ 성취를 경험했습니다. 이 계기를 시작으로 본격적인 개발 공부를 시작해 현재까지 개발자로서의 성장을 이어오고 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
