import styles from "./WebPerformanceCourse.module.scss";
import pic from "../../assets/pic.jpg";
import rocket from "../../assets/rocket.png";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { ArrowDown } from "../../components/ArrowDown";

const ReceptionPage = () => {
  return (
    <div className={styles.section}>
      <img className={styles.rocket} src={rocket} alt="Rocket picture" />
      <span className={styles.courseName}>Web Performance Bootcamp</span>
      <div className={styles.description}>
        Accelerate Your Success Online: Master Web Performance for
        Lightning-Fast Websites and Incredible User Experience!
      </div>
      <div className={styles.courseCreator}>
        <img
          className={styles.picture}
          src={pic}
          alt="Vitor's Fonseca picture"
        />

        <span className={styles.creator}>by Vitor Fonseca</span>
      </div>
      <Button
        variant="contained"
        className={styles.callToAction}
        endIcon={<EastIcon />}
      >
        Check course!
      </Button>

      <ArrowDown />
    </div>
  );
};

export default ReceptionPage;