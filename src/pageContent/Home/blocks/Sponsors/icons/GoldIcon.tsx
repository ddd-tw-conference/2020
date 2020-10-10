import { SvgIcon, SvgIconProps } from "@material-ui/core";
import React, { memo } from "react";

const GoldIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 36 36" {...props}>
      <path fill="#55ACEE" d="M18 8l-7-8H0l14 17 11.521-4.75z" />
      <path fill="#3B88C3" d="M25 0l-7 8 5.39 7.312 1.227-1.489L36 0z" />
      <path
        fill="#FFAC33"
        d="M23.205 16.026c.08-.217.131-.448.131-.693 0-1.104-.896-2-2-2h-6.667c-1.105 0-2 .896-2 2 0 .245.05.476.131.693-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307z"
      />
    </SvgIcon>
  );
};

export default memo(GoldIcon);
