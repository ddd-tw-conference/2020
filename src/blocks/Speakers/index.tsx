import { Grid } from "@material-ui/core";
import Block from "components/Block";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import imgSean from "./img/sean.png";
import Speaker from "./Speaker";

const Speakers = () => {
  const { t } = useTranslation();
  return (
    <Block title={t("blocks.speakers.title")}>
      <Grid container spacing={2}>
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
        <Speaker imgSrc={imgSean} name="Sean Lin" title="Senior Engineer" />
      </Grid>
    </Block>
  );
};

export default memo(Speakers);
