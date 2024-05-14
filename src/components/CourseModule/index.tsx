import styles from "./CourseModule.module.scss";

export const CourseModule = ({ name, description, children }) => {
  return (
    <div className={styles.courseModule}>
      {children}
      <h3>{name}</h3>
      <h5 className={styles.description}>{description}</h5>
    </div>
  );
};
