import { SvgIcon } from "@material-ui/core";
import React, { memo } from "react";

const MessengerIcon = () => {
  return (
    <SvgIcon viewBox="0 0 14 14">
      <path d="M7,0A6.756,6.756,0,0,0,0,6.481a6.3,6.3,0,0,0,2.608,5.047V14l2.383-1.308A7.528,7.528,0,0,0,7,12.963a6.756,6.756,0,0,0,7-6.481A6.756,6.756,0,0,0,7,0Zm.7,8.728-1.782-1.9-3.478,1.9L6.262,4.666l1.826,1.9,3.434-1.9Z" />
    </SvgIcon>
  );
};

export default memo(MessengerIcon);
