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
      <h4 className="mb-1 font-sans text-xs font-bold tracking-wide">
        {overline}
      </h4>
      <h3 className="overflow-hidden text-ellipsis font-sans text-lg font-extrabold tracking-[0.015em]">
        {title}
      </h3>
      <p className="mt-2 font-sans text-[17px]/[1.5] font-normal">{text}</p>
    </div>
  </a>
);
