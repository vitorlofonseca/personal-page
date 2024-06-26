import { Topbar } from "../../components/Topbar";
import { ModulesPage } from "./ModulesPage";
import ReceptionPage from "./ReceptionPage";
import { ReviewsPage } from "./ReviewsPage";
import { ProgramPage } from "./ProgramPage";
import styles from "./WebPerformanceCourse.module.scss";
import { Conclusion } from "./Conclusion";
import { ThemeProvider } from "@mui/material/styles";
import { orangeTheme } from "../../styling/theme";

const WebPerformance = () => {
  return (
    <ThemeProvider theme={orangeTheme}>
      <div className={styles.coursePage}>
        <Topbar title={"Web Performance Bootcamp"} />
        <div className={styles.container}>
          <ReceptionPage />
          <ModulesPage />
          <ProgramPage />
          <ReviewsPage />
          <Conclusion />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default WebPerformance;
