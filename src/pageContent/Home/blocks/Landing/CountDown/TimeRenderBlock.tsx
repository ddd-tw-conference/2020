import { Grid, Typography, useTheme } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, useMemo } from "react";

const cssNum = css`
  label: num;
  font-size: 4rem;
`;

const cssUnit = css`
  label: unit;
`;

const TimeRenderBlock = ({ num, unit }: { num: number; unit: string }) => {
  const theme = useTheme();
  const cssBlock = useMemo(
    () =>
      css({
        label: "block",
        border: `3px solid ${theme.palette.primary.contrastText}`,
        "--size": "8rem",
        minWidth: "var(--size)",
        height: "var(--size)",
      }),
    [theme.palette.primary.contrastText]
  );
  return (
    <Grid
      container
      className={cssBlock}
      direction="column"
      wrap="nowrap"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography className={cssNum}>{num}</Typography>
      </Grid>
      <Grid item>
        <Typography className={cssUnit}>{unit}</Typography>
      </Grid>
    </Grid>
  );
};

export default memo(TimeRenderBlock);
