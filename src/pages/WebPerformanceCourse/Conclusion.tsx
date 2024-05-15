import styles from "./WebPerformanceCourse.module.scss";
import { CallToAction } from "../../components/CallToAction";

export const Conclusion = () => {
  return (
    <div className={styles.lastSection}>
      <h2>
        Don't waste time, supercharge the performance of your websites today,
        clicking in the button bellow!
      </h2>

      <CallToAction />
    </div>
  );
};
