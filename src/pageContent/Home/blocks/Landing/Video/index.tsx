import { useTheme } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, useMemo } from "react";

const Video = () => {
  const theme = useTheme();
  const cls = useMemo(
    () =>
      css({
        label: "video",
        borderRadius: "21px",
        [theme.breakpoints.down("md")]: {
          maxWidth: "560px",
          width: "100%",
        },
        "@media(max-width: 560px)": {
          borderRadius: 0,
        },
      }),
    [theme.breakpoints]
  );
  return (
    <iframe
      className={cls}
      title="DDD TW 2020 Conference"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/LQcsmJyUJfQ"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default memo(Video);
