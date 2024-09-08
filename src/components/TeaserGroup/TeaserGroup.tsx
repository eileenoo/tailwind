import {
  TeaserElement,
  TeaserElementProps,
} from "../TeaserElement/TeaserElement";

export interface TeaserGroupProps {
  teasers: Array<TeaserElementProps>;
}
export const TeaserGroup: React.FC<TeaserGroupProps> = ({ teasers }) => (
  <div>
    {teasers.map(({ imageSrc, overline, title, text, href }) => (
      <TeaserElement
        // w400 * h225 - md
        // sm w620
        // lg 217 - 122
        imageSrc={`../${imageSrc}`}
        overline={overline}
        title={title}
        text={text}
        href={href}
      />
    ))}
  </div>
);
