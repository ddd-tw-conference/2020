import { createMuiTheme, ThemeProvider, useTheme } from "@material-ui/core";
import { css, cx } from "emotion";
import React, { memo, useMemo } from "react";
import CommonProps from "types/CommonProps";

const cssInvert = css`
  label: invert;
  color: #ffffff;
  background: #27539d;
`;

const InvertTheme = ({ className, ...props }: CommonProps<"div">) => {
  const theme = useTheme();
  const myTheme = useMemo(
    () =>
      createMuiTheme({
        ...theme,
        palette: {
          ...theme.palette,
          type: "dark",
          primary: {
            ...theme.palette.primary,
            main: "#ffffff",
            contrastText: "#ffffff",
          },
        },
      }),
    [theme]
  );
  const cls = useMemo(() => cx(cssInvert, className), [className]);
  return (
    <ThemeProvider theme={myTheme}>
      <div className={cls} {...props} />
    </ThemeProvider>
  );
};

export default memo(InvertTheme);
