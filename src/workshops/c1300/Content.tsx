import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

export default memo(function Content() {
  const intl = useIntl();
  const Content = useMemo(
    () => require(`./Content.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  return <Content />;
});
