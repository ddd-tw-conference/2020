import Introduction from "components/Introduction";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import imgSrc from "./conference.png";

const DddConf = () => {
  const intl = useIntl();
  return (
    <Introduction
      title={intl.formatMessage({ id: "blocks.dddConf.title" })}
      description={intl.formatMessage({ id: "blocks.dddConf.description" })}
      imgSrc={imgSrc}
    />
  );
};

export default memo(DddConf);
