import { Typography, useTheme } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, ReactNode, useMemo } from "react";

const Block = ({
  title,
  children,
}: {
  title?: ReactNode;
  children?: ReactNode;
}) => {
  const theme = useTheme();
  const cssWrapper = useMemo(
    () =>
      css({
        label: "wrapper",
        display: "grid",
        gap: "1.5rem",
      }),
    []
  );
  const cssTitle = useMemo(
    () =>
      css({
        label: "title",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
      }),
    [theme.breakpoints]
  );
  return (
    <div className={cssWrapper}>
      <Typography className={cssTitle} variant="h4" color="primary">
        {title}
      </Typography>
      <div>{children}</div>
    </div>
  );
};

export default memo(Block);
