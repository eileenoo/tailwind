import {
  SZPlusGroupTitle,
  SZPlusGroupTitleProps,
} from "../Header/SZPlusGroupTitle";
import { TeaserGroup, TeaserGroupProps } from "../TeaserGroup/TeaserGroup";

interface SZPlusGroupProps extends SZPlusGroupTitleProps, TeaserGroupProps {}

export const SZPlusGroup: React.FC<SZPlusGroupProps> = ({
  title,
  href,
  teasers,
}) => (
  <section className="flex flex-col w-screen bg-gray-100 py-12">
    <SZPlusGroupTitle title={title} href={href} />
    <TeaserGroup teasers={teasers} />
  </section>
);
