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
      className="border-b-solid hover:border-primary-headline dark:hover:border-primary-dark-headline flex items-center border-b border-b-transparent"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-primary-headline dark:text-primary-dark-headline whitespace-normal font-serif text-[27px]/[1.3] font-normal tracking-tight">
        {title}
      </h2>
      <IoIosArrowForward
        aria-hidden
        className="text-primary-headline dark:text-primary-dark-headline mb-[1px] ml-2"
      />
    </a>
  </header>
);
