import styles from "./TeaserElement.module.css";

export interface TeaserElementProps {
  imageSrc: string;
  imageAlt: string;
  overline: string;
  title: string;
  text: string;
  href: string;
}

export const TeaserElement: React.FC<TeaserElementProps> = ({
  imageSrc,
  imageAlt,
  overline,
  title,
  text,
  href,
}) => (
  <a className={styles.linkWrapper} href={href}>
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
      <h4 className={styles.overline}>{overline}</h4>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  </a>
);
