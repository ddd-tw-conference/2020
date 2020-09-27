import { useTheme } from "@material-ui/core";
import { css, cx } from "emotion";
import React, { memo, useMemo } from "react";
import CommonProps from "types/CommonProps";
import fallbackImage from "./fallback.png";

const Image = ({
  src = fallbackImage,
  className,
  ...props
}: CommonProps<"div", { src?: string }>) => {
  const theme = useTheme();
  const cls = useMemo(
    () =>
      cx(
        css({
          label: "img",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
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
        className
      ),
    [className, src, theme.palette.primary.main]
  );
  return <div className={cls} {...props} />;
};

export default memo(Image);
