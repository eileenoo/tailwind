import {
  TeaserElement,
  TeaserElementProps,
} from "../TeaserElement/TeaserElement";

export interface TeaserGroupProps {
  teasers: Array<TeaserElementProps>;
}
export const TeaserGroup: React.FC<TeaserGroupProps> = ({ teasers }) => (
  <article className="grid items-start gap-12 grid-cols-1">
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
