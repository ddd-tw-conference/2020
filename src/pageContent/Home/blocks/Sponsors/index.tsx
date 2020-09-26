import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import imgAmazon from "./img/amazon.png";
import imgIbm from "./img/ibm.png";
import imgMicrosoft from "./img/microsoft.png";
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
        <Sponsor imgSrc={imgIbm} alt="IBM" />
        <Sponsor imgSrc={imgAmazon} alt="Amazon" />
        <Sponsor imgSrc={imgMicrosoft} alt="Microsoft" />
        <Sponsor imgSrc={imgIbm} alt="IBM" />
        <Sponsor imgSrc={imgAmazon} alt="Amazon" />
        <Sponsor imgSrc={imgMicrosoft} alt="Microsoft" />
        <Sponsor imgSrc={imgIbm} alt="IBM" />
        <Sponsor imgSrc={imgAmazon} alt="Amazon" />
        <Sponsor imgSrc={imgMicrosoft} alt="Microsoft" />
        <Sponsor imgSrc={imgIbm} alt="IBM" />
        <Sponsor imgSrc={imgAmazon} alt="Amazon" />
        <Sponsor imgSrc={imgMicrosoft} alt="Microsoft" />
        <Sponsor imgSrc={imgIbm} alt="IBM" />
        <Sponsor imgSrc={imgAmazon} alt="Amazon" />
        <Sponsor imgSrc={imgMicrosoft} alt="Microsoft" />
      </Grid>
    </Block>
  );
};

export default memo(Sponsors);
