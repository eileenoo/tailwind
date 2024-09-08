import { IoIosArrowForward } from "react-icons/io";
import { SZPlusLogo } from "./SZPlusLogo";

export interface SZPlusGroupTitleProps {
  title: string;
  href: string;
}

export const SZPlusGroupTitle: React.FC<SZPlusGroupTitleProps> = ({
  title,
  href,
}) => {
  return (
    <div>
      <a className="" href={href} target="_blank" rel="noopener noreferrer">
        <h2 className="">{title}</h2>
        <IoIosArrowForward />
      </a>
      <SZPlusLogo href={href} />
    </div>
  );
};
