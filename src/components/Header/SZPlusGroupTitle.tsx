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
  <header>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <h2>{title}</h2>
      <IoIosArrowForward aria-hidden />
    </a>
    <SZPlusLogo href={href} />
  </header>
);
