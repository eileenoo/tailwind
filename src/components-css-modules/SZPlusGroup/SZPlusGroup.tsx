import {
  SZPlusGroupTitle,
  SZPlusGroupTitleProps,
} from "../Header/SZPlusGroupTitle";
import { TeaserGroup, TeaserGroupProps } from "../TeaserGroup/TeaserGroup";

interface SZPlusGroupProps extends SZPlusGroupTitleProps, TeaserGroupProps {}

/*  
  section
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: #f2f2f3;
    padding: 48px 0;
*/

export const SZPlusGroup: React.FC<SZPlusGroupProps> = ({
  title,
  href,
  teasers,
}) => (
  // TODO: add styles with css modules
  <section className="">
    <SZPlusGroupTitle title={title} href={href} />
    <TeaserGroup teasers={teasers} />
  </section>
);
