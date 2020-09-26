import { Alert } from "@material-ui/lab";
import Container from "components/Container";
import Seo from "components/Seo";
import { css } from "emotion";
import React, { memo } from "react";

const cls = css`
  label: container;
  min-height: 320px;
`;

const NotFound = () => {
  return (
    <Container className={cls}>
      <Seo />
      <Alert severity="error">404 Not Found</Alert>
    </Container>
  );
};

export default memo(NotFound);
