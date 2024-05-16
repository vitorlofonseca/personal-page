import { Topbar } from "../../components/Topbar";
import { ModulesPage } from "./ModulesPage";
import ReceptionPage from "./ReceptionPage";
import { ReviewsPage } from "./ReviewsPage";
import { ProgramPage } from "./ProgramPage";
import styles from "./FrontendArchitecture.module.scss";
import { Conclusion } from "./Conclusion";
import { ThemeProvider } from "@mui/material/styles";
import { blueTheme } from "../../styling/theme";

const FrontendArchitecture = () => {
  return (
    <ThemeProvider theme={blueTheme}>
      <div className={styles.coursePage}>
        <Topbar
          title={"Frontend Architecture Bootcamp"}
          url="https://www.udemy.com/course/frontend-architecture-and-patterns/?couponCode=FONSECAS-GIFT"
        />
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

export default FrontendArchitecture;
