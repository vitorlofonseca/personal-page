import styles from "./ArrowDown.module.scss";
import arrowDown from "../../assets/arrow-down.webm";

export const ArrowDown = () => {
  return (
    <div className={styles.arrowDown}>
      <video width="80" height="80" autoPlay loop muted>
        <source src={arrowDown} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
