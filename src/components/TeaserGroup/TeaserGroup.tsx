import {
  TeaserElement,
  TeaserElementProps,
} from "../TeaserElement/TeaserElement";

export interface TeaserGroupProps {
  teasers: Array<TeaserElementProps>;
}

/*
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  gap: 48px;

  für Tablet:
  margin-left: 2rem;
  margin-right: 2rem;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 28px; 
  row-gap: 48px; 

  für Desktop 
  grid-template-columns: repeat(4, 1fr);
*/

export const TeaserGroup: React.FC<TeaserGroupProps> = ({ teasers }) => (
  // TODO: add styles here
  <article className="">
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
