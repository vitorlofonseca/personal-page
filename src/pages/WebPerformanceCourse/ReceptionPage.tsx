import styles from "./WebPerformanceCourse.module.scss";
import pic from "../../assets/pic.jpg";
import rocket from "../../assets/rocket.png";
import { ArrowDown } from "../../components/ArrowDown";
import { CallToAction } from "../../components/CallToAction";

const ReceptionPage = () => {
  return (
    <div className={`${styles.section} ${styles.receptionSection}`}>
      <img className={styles.rocket} src={rocket} alt="Rocket picture" />
      <span className={styles.courseName}>Web Performance</span>
      <div className={styles.description}>
        Ultimate guide to learn how to improve web performance, through
        Javascript, Web Vitals, Chrome Dev Tools, CDNs and more!
      </div>
      <div className={styles.courseCreator}>
        <img
          className={styles.picture}
          src={pic}
          alt="Vitor's Fonseca picture"
        />

        <span className={styles.creator}>by Vitor Fonseca</span>
      </div>
      <div>
        <CallToAction />
      </div>

      <ArrowDown />
    </div>
  );
};

export default ReceptionPage;
