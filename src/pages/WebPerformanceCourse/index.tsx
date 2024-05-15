import { Topbar } from "../../components/Topbar";
import { ModulesPage } from "./ModulesPage";
import ReceptionPage from "./ReceptionPage";
import { ReviewsPage } from "./ReviewsPage";
import { ProgramPage } from "./ProgramPage";
import styles from "./WebPerformanceCourse.module.scss";

const WebPerformance = () => {
  return (
    <div className={styles.coursePage}>
      <Topbar title={"Web Performance Bootcamp"} />
      <div className={styles.container}>
        <ReceptionPage />
        <ModulesPage />
        <ProgramPage />
        <ReviewsPage />
      </div>
    </div>
  );
};

export default WebPerformance;
