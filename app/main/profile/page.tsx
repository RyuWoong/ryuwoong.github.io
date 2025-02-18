import Image from "next/image";
import styles from "./page.module.css";
import character from "@/public/ryuwoong.png";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이력서 - 박정륭",
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
              서울에서 <span className={styles.highlight}>React Native</span>를 다루며 4년차 개발자로 경험을 쌓고
              있습니다. 현재는 <b>딜러타이어</b>에서 <span className={styles.highlight}>타이어픽</span> 앱 개발을 담당
              하고 있으며, <b>주도적으로</b> 업무를 진행하고 있습니다.
            </p>
            <div>
              <h2 className={styles["text-m"]}>사람들과 이야길 나누는 것을 좋아해요.</h2>
              <p className={styles["text-s"]}>
                저는 사람들과 어울리며 대화를 나누는 것을 좋아합니다. 이점은 다양한 문제해결에 도움이 된다고 생각합니다.
                대화를 통해 해결 방법에 영감을 얻을 때도 있고, 복잡한 문제를 단순하고 쉽게 풀어 나갈 수 있는 방법을
                발견하는 경험을 할 수 있다고 생각하기 때문입니다.
              </p>
            </div>

            <div>
              <h2 className={styles["text-m"]}>글 쓰는 것을 좋아해요.</h2>
              <p className={styles["text-s"]}>
                글은 제가 배운 것을 정리하고, 다른 사람들과 공유하는 좋은 방법이라고 생각합니다. 또, 글을 쓰면서 놓쳤던
                부분을 다시 생각하게 해주는 복기의 역할도 합니다.
              </p>
            </div>
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
              <p className={styles["text-s"]}>
                Microsoft에서 제공하는 AppCenter가 종료됨에 따라, Codepush 서버를 구축해야했습니다. Codepush Standalone
                Repogitory를 활용하되, Azure 대신 AWS S3를 통해 구축했습니다. 덕분에, 기존 평균적으로 2-5초 걸리던
                환경이 1-3초 이내로 더 빠르고 안정적인 앱 업데이트를 사용자가 경험 할 수 있게 되었습니다.
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>App CI/CD</h4>
              <p className={styles["text-s"]}>
                Codepush를 구축하면서 좀 더 안정적이고 편안한 App 배포 환경을 구축하고 싶었습니다.{" "}
                <span className={styles.highlight}>github Action</span>과{" "}
                <span className={styles.highlight}>fastlane</span>을 활용해 자동화 라인을 구축했습니다.
              </p>
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
              <h4 className={styles["text-m"]}>APP Size 다이어트</h4>
              <p className={styles["text-s"]}>
                기존 앱 사이즈가 70-80MB로 너무 컸으며, Codepush BundleSize 또한{" "}
                <span className={styles.highlight}>30~40MB</span>로 매우 컸습니다. 이는 사용자가 Codepush를 통해
                업데이트를 내려 받을 때 오래 기다려야하거나 네트워크 문제로 업데이트가 중단되는 문제가 발생했습니다.
                이를 개선하여, Codepush BundleSize를 <span className={styles.highlight}>10MB</span>로 줄여 사용자가 더
                빠르고 안정적인 업데이트를 받을수 있도록 개선 하였습니다.
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>DeepLink 설계</h4>
              <p className={styles["text-s"]}>
                유저를 원하는 화면으로 이동시키기 위해 마케팅팀의 요구가 있었으며, 이를 위해 Deeplink를 설계 했습니다.
                Deeplink 동작과 작성방법을 문서화하여 개발팀과 마케팅팀에서도 Deeplink를 직접 작성할 수 있어 다양하게
                활용할 수 있게 됐습니다.
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>컴포넌트 제작 및 라이브러리 관리</h4>
              <p className={styles["text-s"]}>
                일부 컴포넌트들을 디자인 라이브러리에 의존하고 있었는데, 라이브러리 용량에 비해 사용하는 컴포넌트가 적어
                비효율적이라고 판단했습니다. 따라서 라이브러리를 제거하고 컴포넌트를 직접 만들었으며 Text, TextInput,
                Button 같은 컴포넌트를 디자인 시스템에서 영감을 받아 직접 제작해 재사용할 수 있게 만들었습니다.
              </p>
            </div>

            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Data Fetching 개선</h4>
              <p className={styles["text-s"]}>
                React Query로 서버 상태를 관리하고 있었지만, 불필요하게 많은 호출과 Background에서 Foreground로
                돌아왔을때 갱신하지 않는 등 문제가 있었습니다. 이를 개선하기 위해 Caching 정책을 수립하여 기존보다
                1/3정도 api 호출수를 줄였습니다.
              </p>
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
                React Native를 사용해 4-5개의 앱개발 프로젝트에 참여했으며, 오픈마켓, 자전거 정비소 예약 및 운영 결제,
                화장품, 식자재 1대1 거래 등 다양한 도메인 경험을 쌓았습니다. 또, Express, TypeORM을 활용해 서버를
                담당하기도 했으며, React+ Antd를 사용해 관리자웹을 구성했습니다.
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>WebApp BoilerPlate 제작</h4>
              <p className={styles["text-s"]}>
                React Native로 간단한 WebApp BoilerPlate을 제작했습니다. 이를 통해, React Native를 사용해 WebApp을 쉽고
                빠르게 만들 수 있게 됐습니다.
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>Project 관리 Notion Template 제작</h4>
              <p className={styles["text-s"]}>
                기존 업무 방식은 Project History나 Project 관련 내용을 보기가 매우 불편했습니다. 특히 과거에 완료된
                프로젝트를 유지 보수 해야 하는 경우엔 더 어려웠습니다. 이를 Notion을 활용하면 해결 할 수 있을 거라
                생각해 Project 관리 페이지를 Notion Template으로 제작해 사내에서 사용할 수 있게 요청했으며, 새로운
                프로젝트부터 도입되었습니다.
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles["text-m"]}>사내 React 세미나</h4>
              <p className={styles["text-s"]}>
                사내 React 세미나를 진행하여, 신규 개발자 또는 BackEnd 개발자에게 React의 작동 방식이나 원리, 최근
                FrontEnd의 동향에 대한 내용을 발표했습니다.
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
            대학<span className={styles.point}>.</span>
          </h4>
          <p className={styles["text-s"]}>
            장학금을 받을 정도로 준수한 성적으로 경제학 학사 졸업하였습니다. 다만, 학과와 무관하게 대학생활 동안 개발에
            대한 꿈을 가졌고 디스코드 봇을 시작으로 개발자를 목표로 삼고 학교 생활을 보냈습니다. 현재는 더 나은 개발자가
            되기 위해 정진하고 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
