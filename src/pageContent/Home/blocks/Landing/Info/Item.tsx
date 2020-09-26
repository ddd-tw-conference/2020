import { Typography } from "@material-ui/core";
import { css } from "emotion";
import React, { memo, ReactNode } from "react";

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

const Item = ({ icon, title }: { icon: ReactNode; title: ReactNode }) => {
  return (
    <div className={cssItem}>
      <div className={cssIcon}>{icon}</div>
      <Typography>{title}</Typography>
    </div>
  );
};

export default memo(Item);
