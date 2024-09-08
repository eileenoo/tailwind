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
    background-color: #f2f2f3; (tailwind: bg-gray-100)
    padding: 48px 0;
*/

/* 
  Tailwind Knowledge: 
    `flex`: display flex
    `flex-col`: flex-direction: column;
    `py-` : padding top and bottom
    `px-` : padding left and right
    `bg-` : background...
    tailwind color #f2f2f3: `gray-100`
*/

export const SZPlusGroup: React.FC<SZPlusGroupProps> = ({
  title,
  href,
  teasers,
}) => (
  // TODO: add section styles here
  <section className="">
    <SZPlusGroupTitle title={title} href={href} />
    <TeaserGroup teasers={teasers} />
  </section>
);
