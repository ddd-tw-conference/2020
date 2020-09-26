import { Grid, Tooltip } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, useMemo } from "react";

const Sponsor = ({ imgSrc, alt }: { imgSrc: string; alt: string }) => {
  const cssSponsor = useMemo(
    () =>
      css({
        label: "sponsor",
        width: "300px",
        height: "100px",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: "no-repeat",
        margin: "auto",
      }),
    [imgSrc]
  );
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Tooltip title={alt}>
        <div className={cssSponsor} />
      </Tooltip>
    </Grid>
  );
};

export default memo(Sponsor);
