import styles from "./CallToAction.module.scss";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";

export const CallToAction = ({
  size = "large",
  url = "https://www.udemy.com/course/mastering-web-performance-optimization/?referralCode=446D0AB3B2F7E67987D6",
}) => {
  function openCourse() {
    window.open(url, "_blank");
  }

  return (
    <Button
      variant="contained"
      className={`${styles.callToAction} ${styles["callToAction--" + size]}`}
      endIcon={<EastIcon />}
      onClick={openCourse}
    >
      Check course!
    </Button>
  );
};
