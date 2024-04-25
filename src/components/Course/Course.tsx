import styles from "./Course.module.scss";

interface Props {
  name: string;
  url: string;
  image: string;
}

export const Course = ({ name, url, image }: Props) => {
  return (
    <a target="blank" href={url}>
      <div className={styles.Course}>
        <img className={styles.CourseImage} src={image} alt={`${name} image`} />
      </div>
    </a>
  );
};
