import styles from "./CourseModule.module.scss";

interface Props {
  name: string;
  description: string;
  children: string | JSX.Element | JSX.Element[];
}

export const CourseModule = ({ name, description, children }: Props) => {
  return (
    <div className={styles.courseModule}>
      {children}
      <h3>{name}</h3>
      <h5 className={styles.description}>{description}</h5>
    </div>
  );
};
