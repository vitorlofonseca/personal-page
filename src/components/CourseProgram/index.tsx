import styles from "./CourseProgram.module.scss";

interface Props {
  name: string;
  topics: string[];
  children: string | JSX.Element | JSX.Element[];
}

export const CourseProgram = ({ name, topics, children }: Props) => {
  return (
    <div className={styles.courseProgram}>
      {children}
      <h3>{name}</h3>
      <ul>
        {topics.map((topic) => (
          <li>{topic}</li>
        ))}
      </ul>
    </div>
  );
};
