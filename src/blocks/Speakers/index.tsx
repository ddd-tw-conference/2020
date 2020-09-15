import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import imgSean from "./img/sean.png";
import Speaker from "./Speaker";

const Speakers = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.speakers.title" })}>
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
