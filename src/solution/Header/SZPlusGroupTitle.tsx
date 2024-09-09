import { IoIosArrowForward } from "react-icons/io";
import { SZPlusLogo } from "./SZPlusLogo";

export interface SZPlusGroupTitleProps {
  title: string;
  href: string;
}

export const SZPlusGroupTitle: React.FC<SZPlusGroupTitleProps> = ({
  title,
  href,
}) => (
  <header className="mb-8 flex w-full flex-col items-center gap-2">
    <SZPlusLogo href={href} />
    <a
      className="border-b-solid flex items-center border-b border-b-transparent hover:border-[#29293a]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="whitespace-normal font-serif text-[27px]/[1.3] font-normal tracking-tight text-[#29293a]">
        {title}
      </h2>
      <IoIosArrowForward aria-hidden className="mb-[1px] ml-2" />
    </a>
  </header>
);
