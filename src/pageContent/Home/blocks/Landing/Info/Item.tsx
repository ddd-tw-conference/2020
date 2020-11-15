import { Button, Typography } from "@material-ui/core";
import { css } from "emotion";
import { Link } from "gatsby-plugin-intl";
import React, { Fragment, memo, ReactNode, useMemo } from "react";

const cssItem = css`
  label: item;
  display: flex;
  align-items: center;
`;

const cssIcon = css`
  label: icon;
  width: 2em;
  margin-right: 0.3em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const classesBtn = {
  root: css`
    label: root;
    padding: 0;
  `,
  label: css`
    label: label;
  `,
};

export default memo(function Item({
  icon,
  title,
  to,
}: {
  icon: ReactNode;
  title: ReactNode;
  to?: string;
}) {
  const children = useMemo(
    () => (
      <Fragment>
        <div className={cssIcon}>{icon}</div>
        <Typography>{title}</Typography>
      </Fragment>
    ),
    [icon, title]
  );
  if (to) {
    return (
      <Button classes={classesBtn} component={Link} to={to}>
        {children}
      </Button>
    );
  }
  return <div className={cssItem}>{children}</div>;
});
