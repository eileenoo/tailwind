export interface TeaserElementProps {
  imageSrc: string;
  overline: string;
  title: string;
  text: string;
  href: string;
}

export const TeaserElement: React.FC<TeaserElementProps> = ({
  imageSrc,
  overline,
  title,
  text,
  href,
}) => {
  return (
    <div>
      <a href={href}>
        <img className="" src={imageSrc} />
        <h4 className="">{overline}</h4>
        <h3 className="">{title}</h3>
        <p className="">{text}</p>
      </a>
    </div>
  );
};
