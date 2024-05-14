import { CourseModule } from "../../components/CourseModule";
import styles from "./WebPerformanceCourse.module.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import JavascriptIcon from "@mui/icons-material/Javascript";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const ModulesPage = () => {
  return (
    <div className={styles.section}>
      <h1>Course modules</h1>

      <div className={styles.modules}>
        <CourseModule
          name={"Web Performance Introduction"}
          description={
            "Understand the fundamentals of web performance and its impact on user experience and business success"
          }
        >
          <PlayArrowIcon />
        </CourseModule>

        <CourseModule
          name={"Optimizing Frontend Performance"}
          description={
            "Learn techniques to improve frontend performance, including optimizing CSS, JavaScript, and images"
          }
        >
          <JavascriptIcon />
        </CourseModule>

        <CourseModule
          name={"Optimizing Server-Side Performance"}
          description={
            "Dive into strategies for optimizing server-side performance, such as caching, database optimization, and code optimization"
          }
        >
          <StorageIcon />
        </CourseModule>

        <CourseModule
          name={"Optimizing Infrastructure Performance"}
          description={
            "Explore ways to optimize infrastructure performance with content delivery networks (CDNs), load balancing, and cloud computing"
          }
        >
          <MemoryIcon />
        </CourseModule>
        <CourseModule
          name={"Planning and Monitoring Performance"}
          description={
            "Develop skills in planning and implementing performance improvement initiatives, including setting goals and using monitoring tools"
          }
        >
          <DriveFileRenameOutlineIcon />
        </CourseModule>
        <CourseModule
          name={"Conclusion and Next Steps"}
          description={
            "Summarize key learnings from the course and provide guidance on applying performance optimization strategies in real-world scenarios"
          }
        >
          <CheckBoxIcon />
        </CourseModule>
      </div>
    </div>
  );
};
