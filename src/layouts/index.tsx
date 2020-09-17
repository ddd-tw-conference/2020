import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ErrorBoundary from "components/ErrorBoundary";
import React, { memo, ReactNode, StrictMode } from "react";
import Theme from "Theme";
import Helmet from "./Helmet";

const ErrorMessage = () => (
  <Container>
    <Alert severity="error">Something went wrong.</Alert>
  </Container>
);

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <StrictMode>
      <Helmet />
      <Theme>
        <ErrorBoundary fallback={<ErrorMessage />}>{children}</ErrorBoundary>
      </Theme>
    </StrictMode>
  );
};

export default memo(Layout);
