import { useEffect, useState } from "react";
import { getViewportBottom } from "../../utils/viewport";
import { CallToAction } from "../CallToAction";
import styles from "./Topbar.module.scss";

interface Props {
  title: string;
  url?: string;
}

export const Topbar = ({ title, url }: Props) => {
  const viewportBottom = getViewportBottom();
  const [topbarIsVisible, setTopbarIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < viewportBottom) {
        setTopbarIsVisible(false);
        return;
      }
      setTopbarIsVisible(true);
    });
  }, []);

  return (
    <header
      className={`${styles.header} ${
        topbarIsVisible && styles["header--visible"]
      }`}
    >
      <h3>{title}</h3>
      <CallToAction size="small" url={url} />
    </header>
  );
};
