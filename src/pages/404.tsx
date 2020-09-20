import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { memo } from "react";

const NotFound = () => {
  return (
    <Container>
      <Alert severity="error">404 Not Found</Alert>
    </Container>
  );
};

export default memo(NotFound);
