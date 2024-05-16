import styles from "./FrontendArchitecture.module.scss";
import { CallToAction } from "../../components/CallToAction";

export const Conclusion = () => {
  return (
    <div className={styles.lastSection}>
      <h2>
        Don't waste time, start creating modular and scalable frontend
        applications today, clicking in the button below!
      </h2>

      <CallToAction url="https://www.udemy.com/course/frontend-architecture-and-patterns/?couponCode=FONSECAS-GIFT" />
    </div>
  );
};
