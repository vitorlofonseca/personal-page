import { ModulesPage } from "./ModulesPage";
import ReceptionPage from "./ReceptionPage";
import styles from "./WebPerformanceCourse.module.scss";

const WebPerformance = () => {
  return (
    <div className={styles.container}>
      <ReceptionPage />
      <ModulesPage />
    </div>
  );
};

export default WebPerformance;
