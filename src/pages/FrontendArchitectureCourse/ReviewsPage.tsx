import styles from "./FrontendArchitecture.module.scss";
import reviewsImage from "../../assets/frontend-architecture-reviews.png";

export const ReviewsPage = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles["section__title"]}>Course Reviews</h1>

      <h4>Check below what students are talking about this course:</h4>

      <img
        className={styles.reviewsImage}
        src={reviewsImage}
        alt="Reviews image"
      />
    </div>
  );
};
