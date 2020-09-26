import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { css } from "emotion";
import React, { memo } from "react";

const cls = css`
  label: container;
  min-height: 320px;
  padding: 1.5em 0;
`;

const NotFound = () => {
  return (
    <Container className={cls}>
      <Alert severity="error">404 Not Found</Alert>
    </Container>
  );
};

export default memo(NotFound);
