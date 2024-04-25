import styles from "./SocialNetwork.module.scss";

interface Props {
  name: string;
  url: string;
  image: string;
}

export const SocialNetwork = ({ name, url, image }: Props) => {
  return (
    <a target="blank" href={url}>
      <img className={styles.img} src={image} alt={`${name} logo`} />
    </a>
  );
};
