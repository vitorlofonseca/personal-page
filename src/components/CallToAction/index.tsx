import styles from "./CallToAction.module.scss";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";

export const CallToAction = ({ size = "large" }) => {
  return (
    <Button
      variant="contained"
      className={`${styles.callToAction} ${styles["callToAction--" + size]}`}
      endIcon={<EastIcon />}
    >
      Check course!
    </Button>
  );
};
