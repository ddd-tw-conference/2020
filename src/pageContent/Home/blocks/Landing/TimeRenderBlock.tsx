import { Grid, Typography, useTheme } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, useMemo } from "react";

const TimeRenderBlock = ({ num, unit }: { num: number; unit: string }) => {
  const theme = useTheme();
  const cssBlock = useMemo(
    () =>
      css({
        label: "block",
        border: `3px solid ${theme.palette.primary.contrastText}`,
        "--size": "150px",
        width: "var(--size)",
        height: "var(--size)",
      }),
    [theme.palette.primary.contrastText]
  );
  return (
    <Grid
      container
      spacing={2}
      className={cssBlock}
      direction="column"
      wrap="nowrap"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h5">{num}</Typography>
      </Grid>
      <Grid item>
        <Typography>{unit}</Typography>
      </Grid>
    </Grid>
  );
};

export default memo(TimeRenderBlock);
