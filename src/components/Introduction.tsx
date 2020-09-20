import { Typography, useTheme } from "@material-ui/core";
import Block from "components/Block";
import RwdGrid from "components/RwdGrid";
import { css } from "emotion";
import React, { memo } from "react";

const cssImg = css`
  label: img;
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
    [`& .${cssImg}`]: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "400px",
      },
    },
  });
  return (
    <Block title={title}>
      <RwdGrid
        container
        spacing={3}
        wrap="nowrap"
        className={cssContentContainer}
      >
        {imgSrc && (
          <RwdGrid item>
            <img alt={title} src={imgSrc} className={cssImg} />
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
