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
  <section className="bg-primary-bg dark:bg-primary-dark-bg flex w-screen flex-col py-12">
    <SZPlusGroupTitle title={title} href={href} />
    <TeaserGroup teasers={teasers} />
  </section>
);
