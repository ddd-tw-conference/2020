import Introduction from "components/Introduction";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import imgSrc from "./conference.png";

const DddConf = () => {
  const { t } = useTranslation();
  return (
    <Introduction
      title={t("blocks.dddConf.title")}
      description={t("blocks.dddConf.description")}
      imgSrc={imgSrc}
    />
  );
};

export default memo(DddConf);
