import { CourseProgram } from "../../components/CourseProgram";
import styles from "./FrontendArchitecture.module.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CreateIcon from "@mui/icons-material/Create";
import { CallToAction } from "../../components/CallToAction";

export const ProgramPage = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles["section__title"]}>Course program</h1>

      <h3>
        In all modules of this course, we'll have four parts
        <ul>
          <li>A real-life problem, that the given module subject solves</li>
          <li>What is that module subject?</li>
          <li>Hands-on implementation of that architecture or pattern</li>
          <li>Common issues and how to mitigate them in its implementation</li>
        </ul>
      </h3>

      <h4>The modules are:</h4>

      <div className={`${styles.endSection} ${styles.programTopics}`}>
        <CourseProgram name={"Frontend Architecture Introduction"}>
          <PlayArrowIcon />
        </CourseProgram>
        <CourseProgram name={"Component-Based Pattern"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"Single Page Application Architecture"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"State Management Pattern"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"Micro frontends Architecture"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"Serverless Architecture"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"Progressive Web Apps"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"Server side Rendering"}>
          <CreateIcon />
        </CourseProgram>
        <CourseProgram name={"Conclusion"}>
          <CheckBoxIcon />
        </CourseProgram>
      </div>

      <CallToAction url="https://www.udemy.com/course/frontend-architecture-and-patterns/?couponCode=FONSECAS-GIFT" />
    </div>
  );
};
