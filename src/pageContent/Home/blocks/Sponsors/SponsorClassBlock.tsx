import { Grid } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, ReactNode } from "react";
import SponsorClassTitle from "./SponsorClassTitle";

const cls = css`
  label: SponsorClassBlock;
  display: grid;
  grid-gap: 1rem;
`;

const SponsorClassBlock = ({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className={cls}>
      <SponsorClassTitle>{title}</SponsorClassTitle>
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        justifyContent="center"
      >
        {children}
      </Grid>
    </div>
  );
};

export default memo(SponsorClassBlock);
