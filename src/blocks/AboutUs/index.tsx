import Introduction from "components/Introduction";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import imgSrc from "./ddd.png";

const AboutUs = () => {
  const intl = useIntl();
  return (
    <Introduction
      title={intl.formatMessage({ id: "blocks.aboutUs.title" })}
      description={intl.formatMessage({ id: "blocks.aboutUs.description" })}
      imgSrc={imgSrc}
    />
  );
};

export default memo(AboutUs);
