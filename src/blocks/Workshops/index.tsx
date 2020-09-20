import Block from "components/Block";
import Topic from "components/Topic";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const Workshops = () => {
  const intl = useIntl();
  const article = useMemo(
    () => require(`!!raw-loader!./Article.${intl.locale}.md`),
    [intl.locale]
  );
  return (
    <Block title={intl.formatMessage({ id: "blocks.workshops.title" })}>
      <Topic markdown={article} />
    </Block>
  );
};

export default memo(Workshops);
