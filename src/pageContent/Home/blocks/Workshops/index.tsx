import Block from "components/Block";
import Topic from "components/Topic";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const Workshops = () => {
  const intl = useIntl();
  const Article = useMemo(
    () => require(`./Article.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  return (
    <Block title={intl.formatMessage({ id: "blocks.workshops.title" })}>
      <Topic>
        <Article />
      </Topic>
    </Block>
  );
};

export default memo(Workshops);
