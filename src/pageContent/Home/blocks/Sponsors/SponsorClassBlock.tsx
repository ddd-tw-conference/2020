import { Grid, Typography } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, ReactNode } from "react";

const cls = css`
  label: SponsorClassBlock;
  display: grid;
  gap: 1rem;
`;

const cssTitle = css`
  label: title;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  --gap: 0.5rem;
  & > svg:nth-of-type(1) {
    margin-right: var(--gap);
  }
  & > svg:nth-of-type(2) {
    margin-left: var(--gap);
  }
`;

const SponsorClassBlock = ({
  title,
  titleIcon,
  children,
}: {
  title: ReactNode;
  titleIcon?: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className={cls}>
      <div className={cssTitle}>
        {titleIcon || null}
        <Typography variant="h5" align="center">
          {title}
        </Typography>
        {titleIcon || null}
      </div>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {children}
      </Grid>
    </div>
  );
};

export default memo(SponsorClassBlock);
