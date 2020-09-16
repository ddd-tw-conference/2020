import { Grid, IconButton, Typography, useTheme } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, useCallback, useMemo, useState } from "react";
import SpeakerDialog from "./SpeakerDialog";

const cssName = css`
  label: name;
  font-weight: bold;
`;

const Speak = ({
  name,
  title,
  imgSrc,
  article,
}: {
  name: string;
  title: string;
  imgSrc: string;
  article: string;
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
  const [openedDetail, setOpenedDetail] = useState(false);
  const openDetail = useCallback(() => setOpenedDetail(true), []);
  const closeDetail = useCallback(() => setOpenedDetail(false), []);
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
          <IconButton className={cssImg} onClick={openDetail} />
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
      <SpeakerDialog
        open={openedDetail}
        onClose={closeDetail}
        name={name}
        title={title}
        imgSrc={imgSrc}
        article={article}
      />
    </Grid>
  );
};

export default memo(Speak);
