import marked, { MarkedOptions } from "marked";
import React, { forwardRef, memo, useCallback, useMemo } from "react";
import CommonProps from "types/CommonProps";

const markedOptions: MarkedOptions = {
  headerIds: false,
};

const Markdown = forwardRef<
  HTMLDivElement,
  CommonProps<"div"> & { markdown: string }
>(({ markdown, ...props }, ref) => {
  const html = useMemo(() => marked(markdown, markedOptions), [markdown]);
  const createMarkup = useCallback(() => ({ __html: html }), [html]);
  return <div {...props} ref={ref} dangerouslySetInnerHTML={createMarkup()} />;
});

export default memo(Markdown);
