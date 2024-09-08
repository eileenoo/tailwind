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
  <header className="flex flex-col items-center gap-2 mb-8 w-full">
    <SZPlusLogo href={href} />
    <a
      className="flex items-center border-b border-b-transparent border-b-solid hover:border-[#29293a]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="font-serif font-normal text-[27px]/[1.3] tracking-tight whitespace-normal text-[#29293a]">
        {title}
      </h2>
      <IoIosArrowForward aria-hidden className="mb-[1px] ml-2" />
    </a>
  </header>
);
