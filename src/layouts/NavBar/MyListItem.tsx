import { ListItem, ListItemProps, useTheme } from "@material-ui/core";
import A, { AProps } from "components/A";
import { css, cx } from "emotion";
import React, { forwardRef, memo, useMemo } from "react";

export type MyListItemProps<
  D extends React.ElementType<any> = "li",
  P = {}
> = Omit<ListItemProps<D, P & AProps>, "component" | "button">;

const MyListItem = (<D extends React.ElementType<any> = "li", P = {}>() => {
  const MyListItem = forwardRef<HTMLLIElement, MyListItemProps<D, P>>(
    function MyListItem({ className, ...props }, ref) {
      const theme = useTheme();
      const cls = useMemo(
        () =>
          cx(
            css(
              {
                label: "listItem",
                color: theme.palette.primary.main,
              },
              className
            )
          ),
        [className, theme.palette.primary.main]
      );

      return props.href ? (
        <ListItem button component={A} className={cls} ref={ref} {...props} />
      ) : (
        <ListItem button className={cls} ref={ref} {...props} />
      );
    }
  );
  return memo(MyListItem);
})();

export default MyListItem;
