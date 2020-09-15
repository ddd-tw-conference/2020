import { Container, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AboutUs from "blocks/AboutUs";
import Agenda from "blocks/Agenda";
import DddConf from "blocks/DddConf";
import Landing from "blocks/Landing";
import Speakers from "blocks/Speakers";
import Sponsors from "blocks/Sponsors";
import ErrorBoundary from "components/ErrorBoundary";
import { css } from "emotion";
import Footer from "layout/Footer";
import NavBar from "layout/NavBar";
import React, { memo, StrictMode } from "react";
import Theme from "Theme";

const cssOuter = css`
  label: outer;
  overflow: hidden;
`;

const cssContainer = css`
  label: container;
  --vertical-padding: calc(142rem / 16);
  padding-top: var(--vertical-padding);
  padding-bottom: var(--vertical-padding);
`;

const ErrorMessage = () => (
  <Alert severity="error">Something went wrong.</Alert>
);

function App() {
  return (
    <StrictMode>
      <Theme>
        <ErrorBoundary fallback={<ErrorMessage />}>
          <div className={cssOuter}>
            <NavBar />
            <div id="top" />
            <Grid
              container
              direction="column"
              wrap="nowrap"
              alignItems="stretch"
            >
              <Grid item>
                <Landing />
              </Grid>
              <Grid item>
                <Container className={cssContainer}>
                  <Grid
                    container
                    direction="column"
                    wrap="nowrap"
                    alignItems="stretch"
                    spacing={5}
                  >
                    <Grid item>
                      <div id="dddConf">
                        <DddConf />
                      </div>
                    </Grid>
                    <Grid item>
                      <div id="aboutUs">
                        <AboutUs />
                      </div>
                    </Grid>
                    <Grid item>
                      <div id="speakers">
                        <Speakers />
                      </div>
                    </Grid>
                    <Grid item>
                      <div id="agenda">
                        <Agenda />
                      </div>
                    </Grid>
                    <Grid item>
                      <div id="sponsors">
                        <Sponsors />
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
            <Footer />
          </div>
        </ErrorBoundary>
      </Theme>
    </StrictMode>
  );
}

export default memo(App);
