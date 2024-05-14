import styles from "./CallToAction.module.scss";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";

export const CallToAction = ({ size = "large" }) => {
  function openCourse() {
    window.open(
      "https://www.udemy.com/course/mastering-web-performance-optimization/?couponCode=FONSECAS-GIFT",
      "_blank"
    );
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
