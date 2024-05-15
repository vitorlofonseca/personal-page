import { CourseProgram } from "../../components/CourseProgram";
import styles from "./WebPerformanceCourse.module.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import JavascriptIcon from "@mui/icons-material/Javascript";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { CallToAction } from "../../components/CallToAction";

export const ProgramPage = () => {
  return (
    <div className={styles.section}>
      <h1>Course program</h1>

      <div className={`${styles.endSection} ${styles.programTopics}`}>
        <CourseProgram
          name={"Web Performance Introduction"}
          topics={[
            "What is web performance",
            "Why web performance is important",
            "Key metrics to measure",
            "Real world cases",
          ]}
        >
          <PlayArrowIcon />
        </CourseProgram>
        <CourseProgram
          name={"Optimizing Frontend Performance"}
          topics={[
            "Web Vitals Metrics",
            "Critical Resources",
            "Optimizing Javascript",
            "Optimizing CSS",
            "Optimizing Images",
            "Lazy loading",
            "PWA",
          ]}
        >
          <JavascriptIcon />
        </CourseProgram>
        <CourseProgram
          name={"Optimizing Server-Side Performance"}
          topics={[
            "Optimizing Databases",
            "Optimizing Databases - NoSQL",
            "Optimizing external integrations",
            "Caching techniques",
            "Microservices scalability",
            "Profiling",
          ]}
        >
          <StorageIcon />
        </CourseProgram>
        <CourseProgram
          name={"Optimizing Infrastructure Performance"}
          topics={[
            "HTTP Optimizations",
            "Caching at HTTP level",
            "Load balancing",
            "Improving DNS and TCP Latency",
            "Using CDNs",
          ]}
        >
          <MemoryIcon />
        </CourseProgram>
        <CourseProgram
          name={"Planning and Monitoring Performance"}
          topics={[
            "What metrics to lift up?",
            "Automatizing metrics gathering",
            "Monitoring database metrics",
            "Creation of a dashboard to monitor metrics",
            "Creation of a notification solution",
          ]}
        >
          <DriveFileRenameOutlineIcon />
        </CourseProgram>
        <CourseProgram
          name={"Conclusion and Next Steps"}
          topics={[
            "Course Conclusion",
            "Techniques to convince people web performance is important",
          ]}
        >
          <CheckBoxIcon />
        </CourseProgram>
      </div>

      <CallToAction />
    </div>
  );
};
