import { css as style, Global } from "@emotion/core";
import { Alert } from "@material-ui/lab";
import Container from "components/Container";
import ErrorBoundary from "components/ErrorBoundary";
import { css } from "emotion";
import React, { memo, ReactNode } from "react";

const ErrorMessage = (() => {
  const globalStyle = style`
    html, body {
      height: 100%;
      position: relative;
    }
  `;

  const cls = css`
    label: container;
    min-height: 320px;
    height: 100%;
  `;
  const ErrorMessage = () => (
    <Container className={cls}>
      <Global styles={globalStyle} />
      <Alert severity="error">Something went wrong.</Alert>
    </Container>
  );
  return memo(ErrorMessage);
})();

const ErrorHandler = ({ children }: { children?: ReactNode }) => (
  <ErrorBoundary fallback={<ErrorMessage />}>{children}</ErrorBoundary>
);

export default memo(ErrorHandler);
