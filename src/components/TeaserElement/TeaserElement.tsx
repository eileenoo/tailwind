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
  <div>
    <a href={href}>
      <img src={imageSrc} alt={imageAlt} />
      <h4>{overline}</h4>
      <h3>{title}</h3>
      <p>{text}</p>
    </a>
  </div>
);
