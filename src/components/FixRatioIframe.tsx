import { css } from "emotion";
import React, { memo, useMemo } from "react";
import CommonProps from "types/CommonProps";

const FixRatioIframe = ({
  ratio = "100%",
  title,
  ...props
}: CommonProps<"iframe", { ratio?: string }>) => {
  const cssWrapper = useMemo(
    () =>
      css({
        position: "relative",
        paddingBottom: ratio,
        "& > iframe": {
          position: "absolute",
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        },
      }),
    [ratio]
  );
  return (
    <div className={cssWrapper}>
      <iframe title={title} {...props} />
    </div>
  );
};

export default memo(FixRatioIframe);
