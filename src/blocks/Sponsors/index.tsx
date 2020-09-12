import { Grid } from "@material-ui/core";
import Block from "components/Block";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import imgAmazon from "./img/amazon.png";
import imgIbm from "./img/ibm.png";
import imgMicrosoft from "./img/microsoft.png";
import Sponsor from "./Sponsor";

const Sponsors = () => {
  const { t } = useTranslation();
  return (
    <Block title={t("blocks.sponsors.title")}>
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
