import { Typography, useTheme } from "@material-ui/core";
import Block from "components/Block";
import RwdGrid from "components/RwdGrid";
import { css } from "emotion";
import React, { memo, useMemo } from "react";

const cssImgWrapper = css`
  label: imgWrapper;
  width: 100%;
  padding-bottom: 66.5%;
  position: relative;
`;

const cssImg = css`
  label: img;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Introduction = ({
  title = "",
  description = "",
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc?: string;
}) => {
  const theme = useTheme();
  const cssContentContainer = css({
    label: "contentContainer",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  });
  const cssImgGrid = useMemo(
    () =>
      css({
        label: "imgGrid",
        position: "relative",
        width: "100%",
        [theme.breakpoints.up("md")]: {
          "--width": "400px",
          width: "var(--width)",
          minWidth: "var(--width)",
          maxWidth: "var(--width)",
        },
      }),
    [theme.breakpoints]
  );
  return (
    <Block title={title}>
      <RwdGrid
        container
        spacing={3}
        wrap="nowrap"
        className={cssContentContainer}
      >
        {imgSrc && (
          <RwdGrid item className={cssImgGrid}>
            <div className={cssImgWrapper}>
              <img alt={title} src={imgSrc} className={cssImg} />
            </div>
          </RwdGrid>
        )}
        <RwdGrid item>
          <Typography>{description}</Typography>
        </RwdGrid>
      </RwdGrid>
    </Block>
  );
};

export default memo(Introduction);
