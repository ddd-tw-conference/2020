import { css, Global } from "@emotion/core";
import {
  createMuiTheme,
  CssBaseline,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core";
import React, { Fragment, memo, ReactNode } from "react";

export const navBarHeight = 64;

const styles = css({
  html: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    scrollPaddingTop: `${navBarHeight}px`,
    scrollBehavior: "smooth",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#27539D",
      light: "#6CB9EA",
    },
    secondary: {
      main: "#FFE59F",
    },
  },
  typography: {
    fontFamily:
      "'Taipei Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  mixins: {
    toolbar: {
      minHeight: navBarHeight,
    },
  },
});

const MyTheme = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Global styles={styles} />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StylesProvider>
    </Fragment>
  );
};

export default memo(MyTheme);
