import { IoIosArrowForward } from "react-icons/io";
import { SZPlusLogo } from "./SZPlusLogo";

export interface SZPlusGroupTitleProps {
  title: string;
  href: string;
}

/* 
  header 
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      margin-bottom: 32px;
      width: 100%;

  a (wrapper for h2 and icon)
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: solid 1px transparent;

  a:hover 
    border-color: #29293a;

  h2 (Titel)
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 27px;
    font-weight: 400;
    letter-spacing: 0.025em;
    line-height: 1.3;
    white-space: normal; 
    color: #29293a
    
  Icon (IoIosArrowForward -> Icon Arrow right)
    margin-bottom: 1px; 
    margin-left: 8px;
*/

/* Tailwind Knowledge: https://tailwindcss.com/docs/installation */

export const SZPlusGroupTitle: React.FC<SZPlusGroupTitleProps> = ({
  title,
  href,
}) => (
  // TODO: add styles for header
  <header className="">
    {/* TODO: add styles for link (wrapper for h2 and icon) */}
    <a className="" href={href} target="_blank" rel="noopener noreferrer">
      {/* TODO: add styles for h2-title, */}
      <h2 className="">{title}</h2>
      {/* TODO: add styles for icon */}
      <IoIosArrowForward className="" aria-hidden />
    </a>
    <SZPlusLogo href={href} />
  </header>
);
