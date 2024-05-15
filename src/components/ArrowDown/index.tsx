import styles from "./ArrowDown.module.scss";
import arrowDown from "../../assets/arrow-down.webm";
import { useEffect, useState } from "react";
import { getViewportBottom, userGotToTheBottom } from "../../utils/viewport";

export const ArrowDown = () => {
  const viewportBottom = getViewportBottom();
  const [arrowDownIsRight, setArrowDownIsRight] = useState(false);
  const [arrowDownIsVisible, setArrowDownIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < viewportBottom) {
        setArrowDownIsRight(false);
        return;
      }
      setArrowDownIsRight(true);

      setArrowDownIsVisible(!userGotToTheBottom());
    });
  }, []);

  return (
    <>
      {arrowDownIsVisible && (
        <div
          className={`${styles.arrowDown} ${
            arrowDownIsRight && styles["arrowDown--right"]
          }`}
        >
          <video width="80" height="80" autoPlay loop muted>
            <source src={arrowDown} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
};
