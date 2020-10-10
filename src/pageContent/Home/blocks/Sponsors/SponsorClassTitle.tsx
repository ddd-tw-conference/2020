import { Typography } from "@material-ui/core";
import React, { memo, ReactNode } from "react";

const SponsorClassTitle = ({ children }: { children?: ReactNode }) => {
  return (
    <Typography variant="h5" align="center">
      {children}
    </Typography>
  );
};

export default memo(SponsorClassTitle);
