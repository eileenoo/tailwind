import {
  TeaserElement,
  TeaserElementProps,
} from "../TeaserElement/TeaserElement";
import styles from "./TeaserGroup.module.css";

export interface TeaserGroupProps {
  teasers: Array<TeaserElementProps>;
}

export const TeaserGroup: React.FC<TeaserGroupProps> = ({ teasers }) => (
  <article className={styles.article}>
    {teasers.map(({ imageSrc, imageAlt, overline, title, text, href }) => (
      <TeaserElement
        imageSrc={`../${imageSrc}`}
        imageAlt={imageAlt}
        overline={overline}
        title={title}
        text={text}
        href={href}
      />
    ))}
  </article>
);
