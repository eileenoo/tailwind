import { IoIosArrowForward } from "react-icons/io";
import { SZPlusLogo } from "./SZPlusLogo";
import styles from "./SZPlusGroupTitle.module.css";

export interface SZPlusGroupTitleProps {
  title: string;
  href: string;
}

export const SZPlusGroupTitle: React.FC<SZPlusGroupTitleProps> = ({
  title,
  href,
}) => (
  <header className={styles.header}>
    <SZPlusLogo href={href} />
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={styles.title}>{title}</h2>
      <IoIosArrowForward className={styles.icon} aria-hidden />
    </a>
  </header>
);
