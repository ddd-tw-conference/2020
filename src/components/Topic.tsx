import { useTheme } from "@material-ui/core";
import { css, cx } from "emotion";
import marked, { MarkedOptions } from "marked";
import React, { forwardRef, memo, useCallback, useMemo } from "react";
import CommonProps from "types/CommonProps";
import muiToEmotion from "utils/css/muiToEmotion";

const markedOptions: MarkedOptions = {
  headerIds: false,
};

const Topic = forwardRef<
  HTMLDivElement,
  CommonProps<"div"> & { markdown: string }
>(({ className, children, markdown, ...props }, ref) => {
  const theme = useTheme();
  const cssRoot = useMemo(
    () =>
      css({
        label: "topic",
        border: "3px solid #DBDBDB",
        borderRadius: "15px",
        padding: "1em 1.5em",
        "&": {
          h1: muiToEmotion(theme.typography.h6),
          h2: muiToEmotion(theme.typography.h6),
          h3: muiToEmotion(theme.typography.h6),
          h4: muiToEmotion(theme.typography.h6),
          h5: muiToEmotion(theme.typography.h6),
          h6: muiToEmotion(theme.typography.h6),
          p: muiToEmotion(theme.typography.body1),
          li: muiToEmotion(theme.typography.body1),
          "ul, ol": {
            paddingLeft: "1.5em",
          },
        },
      }),
    [theme.typography.body1, theme.typography.h6]
  );
  const cls = useMemo(() => cx(cssRoot, className), [className, cssRoot]);
  const html = useMemo(() => marked(markdown, markedOptions), [markdown]);
  const createMarkup = useCallback(() => ({ __html: html }), [html]);
  return (
    <div
      className={cls}
      {...props}
      ref={ref}
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
});

export default memo(Topic);
