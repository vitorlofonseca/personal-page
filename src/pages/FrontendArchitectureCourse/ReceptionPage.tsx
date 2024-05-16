import styles from "./FrontendArchitecture.module.scss";
import pic from "../../assets/pic.jpg";
import house from "../../assets/house.png";
import { ArrowDown } from "../../components/ArrowDown";
import { CallToAction } from "../../components/CallToAction";

const ReceptionPage = () => {
  return (
    <div className={`${styles.section} ${styles.receptionSection}`}>
      <img className={styles.rocket} src={house} alt="house picture" />
      <span className={styles.courseName}>Frontend Architecture</span>
      <div className={styles.description}>
        Ultimate guide to learn frontend architectures and patterns, its pros
        and cons, and the best: all in Javascript!
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
        <CallToAction url="https://www.udemy.com/course/frontend-architecture-and-patterns/?couponCode=FONSECAS-GIFT" />
      </div>

      <ArrowDown color={"blue"} />
    </div>
  );
};

export default ReceptionPage;
