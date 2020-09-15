import { Alert } from "@material-ui/lab";
import React, { memo } from "react";

const NotFound = () => {
  return <Alert severity="error">404 Not Found</Alert>;
};

export default memo(NotFound);
