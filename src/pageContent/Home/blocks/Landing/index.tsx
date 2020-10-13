import { useTheme } from "@material-ui/core";
import Container from "components/Container";
import InvertTheme from "components/InvertTheme";
import { css } from "emotion";
import { navBarHeight } from "layouts/Theme";
import React, { memo, useMemo } from "react";
import CountDown from "./CountDown";
import Info from "./Info";
import Title from "./Title";
import Video from "./Video";

const cssLanding = css`
  label: landing;
  min-height: calc(100vh - ${navBarHeight}px);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cssGap = css`
  label: gap;
  width: 2em;
`;

const Landing = () => {
  const theme = useTheme();
  const cssBlock = useMemo(
    () =>
      css({
        label: "block",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2em",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          "&>*": {
            marginBottom: "1.5em",
          },
        },
        [theme.breakpoints.up("lg")]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      }),
    [theme.breakpoints]
  );
  return (
    <InvertTheme className={cssLanding}>
      <div>
        <div className={cssBlock}>
          <Title />
          <div className={cssGap} />
          <Video />
        </div>
        <Container className={cssBlock}>
          <Info />
          <div className={cssGap} />
          <CountDown />
        </Container>
      </div>
    </InvertTheme>
  );
};

export default memo(Landing);
