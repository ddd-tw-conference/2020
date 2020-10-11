import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React, { memo } from "react";

const DiamondIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 36 36" {...props}>
      <path d="M13 3H7l-7 9h10z">
        <animate
          attributeName="fill"
          values="#BDDDF4;#8CCAF7;#5DADEC"
          calcMode="discrete"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M36 12l-7-9h-6l3 9z">
        <animate
          attributeName="fill"
          values="#5DADEC;#BDDDF4;#8CCAF7"
          calcMode="discrete"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M26 12h10L18 33z">
        <animate
          attributeName="fill"
          values="#4289C1;#8CCAF7;#5DADEC"
          calcMode="discrete"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M10 12H0l18 21zm3-9l-3 9h16l-3-9z">
        <animate
          attributeName="fill"
          values="#8CCAF7;#5DADEC;#BDDDF4"
          calcMode="discrete"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M18 33l-8-21h16z">
        <animate
          attributeName="fill"
          values="#5DADEC;#4289C1;#8CCAF7"
          calcMode="discrete"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </SvgIcon>
  );
};

export default memo(DiamondIcon);
