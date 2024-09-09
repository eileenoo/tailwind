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
  <a
    className="text-primary-body dark:text-primary-dark-body flex w-full flex-col items-center text-center"
    href={href}
  >
    <div className="w-4/5 self-center md:w-full lg:w-full">
      <img className="mb-4" src={imageSrc} alt={imageAlt} />
      <h4 className="sz-font-overline mb-1">{overline}</h4>
      <h3 className="sz-font-title overflow-hidden text-ellipsis">{title}</h3>
      <p className="sz-font-body mt-2">{text}</p>
    </div>
  </a>
);
