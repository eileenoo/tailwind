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
  <a className="flex flex-col items-center text-center w-full" href={href}>
    <div className="w-4/5 md:w-full lg:w-full self-center">
      <img className="mb-4" src={imageSrc} alt={imageAlt} />
      <h4 className="mb-1 text-xs tracking-wide font-bold font-sans">
        {overline}
      </h4>
      <h3 className="font-sans font-extrabold tracking-[0.015em] text-lg overflow-hidden text-ellipsis">
        {title}
      </h3>
      <p className="font-sans font-normal text-[17px]/[1.5] mt-2">{text}</p>
    </div>
  </a>
);
