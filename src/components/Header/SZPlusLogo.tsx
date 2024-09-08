import szpluslogo from "../../assets/sz_plus_logo.svg";

interface SZPlusLogoProps {
  href: string;
}

export const SZPlusLogo: React.FC<SZPlusLogoProps> = ({ href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img className="h-4" src={szpluslogo} aria-hidden="false" />
  </a>
);
