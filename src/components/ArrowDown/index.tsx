import styles from "./ArrowDown.module.scss";
import { useEffect, useState } from "react";
import { getViewportBottom, userGotToTheBottom } from "../../utils/viewport";

interface Props {
  color?: string;
}

export const ArrowDown = ({ color = "orange" }: Props) => {
  const viewportBottom = getViewportBottom();
  const [arrowDownIsRight, setArrowDownIsRight] = useState(false);
  const [arrowDownIsVisible, setArrowDownIsVisible] = useState(true);
  const [arrowDown, setArrowDown] = useState("");

  import(`../../assets/${color}-arrow-down.gif`).then((data) => {
    setArrowDown(data.default);
  });

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
          <img src={arrowDown} alt="Arrow to scroll gif" />
        </div>
      )}
    </>
  );
};
