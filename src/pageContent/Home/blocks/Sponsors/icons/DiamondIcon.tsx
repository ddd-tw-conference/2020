import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React, { memo } from "react";

const DiamondIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 36 36" {...props}>
      <path fill="#BDDDF4" d="M13 3H7l-7 9h10z" />
      <path fill="#5DADEC" d="M36 12l-7-9h-6l3 9z" />
      <path fill="#4289C1" d="M26 12h10L18 33z" />
      <path fill="#8CCAF7" d="M10 12H0l18 21zm3-9l-3 9h16l-3-9z" />
      <path fill="#5DADEC" d="M18 33l-8-21h16z" />
    </SvgIcon>
  );
};

export default memo(DiamondIcon);
