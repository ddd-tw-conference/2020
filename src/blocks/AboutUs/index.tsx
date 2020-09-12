import Introduction from "components/Introduction";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import imgSrc from "./ddd.png";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Introduction
      title={t("blocks.aboutUs.title")}
      description={t("blocks.aboutUs.description")}
      imgSrc={imgSrc}
    />
  );
};

export default memo(AboutUs);
