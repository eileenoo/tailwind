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
  // TODO: Add styles here
  <div>
    <a className="" href={href}>
      <img className="" src={imageSrc} alt={imageAlt} />
      <h4 className="">{overline}</h4>
      <h3 className="">{title}</h3>
      <p className="">{text}</p>
    </a>
  </div>
);
