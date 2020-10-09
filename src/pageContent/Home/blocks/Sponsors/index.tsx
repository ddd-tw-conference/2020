import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import Sponsor from "./Sponsor";

const Sponsors = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.sponsors.title" })}>
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Sponsor id="aws" />
        <Sponsor id="jet-brains" />
        <Sponsor id="fable" />
        <Sponsor id="soft-leader" />
      </Grid>
    </Block>
  );
};

export default memo(Sponsors);
