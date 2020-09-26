import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ErrorBoundary from "components/ErrorBoundary";
import React, { memo, ReactNode } from "react";

const ErrorMessage = (() => {
  const ErrorMessage = () => (
    <Container>
      <Alert severity="error">Something went wrong.</Alert>
    </Container>
  );
  return memo(ErrorMessage);
})();

const ErrorHandler = ({ children }: { children?: ReactNode }) => (
  <ErrorBoundary fallback={<ErrorMessage />}>{children}</ErrorBoundary>
);

export default memo(ErrorHandler);
