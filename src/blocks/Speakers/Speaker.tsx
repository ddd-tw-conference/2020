import { Grid, Typography, useTheme } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, ReactNode, useMemo } from "react";

const cssName = css`
  label: name;
  font-weight: bold;
`;

const Speak = ({
  name,
  title,
  imgSrc,
}: {
  name?: ReactNode;
  title?: ReactNode;
  imgSrc?: string;
}) => {
  const theme = useTheme();
  const cssImg = useMemo(
    () =>
      css({
        label: "img",
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderWidth: "24px",
        borderColor: theme.palette.primary.main,
        borderStyle: "solid",
        borderRadius: "50%",
        "--size": "280px",
        width: "var(--size)",
        height: "var(--size)",
      }),
    [imgSrc, theme.palette.primary.main]
  );
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <div className={cssImg} />
        </Grid>
        <Grid item>
          <Typography variant="h4" className={cssName}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{title}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(Speak);
