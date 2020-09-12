import { Grid, GridProps, useTheme } from "@material-ui/core";
import { css, cx } from "emotion";
import React, { ElementType, memo, useMemo } from "react";

export type RwdGridProps<C extends ElementType> = GridProps<
  C,
  { component?: C; rwdSize?: number | "lg" | "md" | "sm" | "xl" | "xs" }
>;

const RwdGrid = <C extends ElementType>({
  className,
  rwdSize = "sm",
  ...props
}: RwdGridProps<C>) => {
  const theme = useTheme();
  const cssCenterXs = useMemo(
    () =>
      css({
        label: "center",
        [theme.breakpoints.down(rwdSize)]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }),
    [rwdSize, theme.breakpoints]
  );
  const cls = useMemo(() => cx(cssCenterXs, className), [
    className,
    cssCenterXs,
  ]);
  return <Grid className={cls} {...props} />;
};

export default memo(RwdGrid);
