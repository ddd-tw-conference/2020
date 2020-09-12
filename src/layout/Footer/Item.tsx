import { Grid } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, ReactNode } from "react";

const cssItem = css`
  label: item;
  display: flex;
  align-items: center;
`;

const Item = ({
  icon,
  children,
}: {
  icon?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <Grid container wrap="nowrap" alignItems="center" spacing={1}>
      <Grid item className={cssItem}>
        {icon}
      </Grid>
      <Grid item className={cssItem}>
        {children}
      </Grid>
    </Grid>
  );
};

export default memo(Item);
