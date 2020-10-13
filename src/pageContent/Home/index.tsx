import { Container, Grid } from "@material-ui/core";
import { showAgenda } from "blockToggle";
import { css } from "emotion";
import React, { memo } from "react";
import AboutUs from "./blocks/AboutUs";
import Agenda from "./blocks/Agenda";
import DddConf from "./blocks/DddConf";
import Landing from "./blocks/Landing";
import Speakers from "./blocks/Speakers";
import Sponsors from "./blocks/Sponsors";
import Topics from "./blocks/Topics";
import Workshops from "./blocks/Workshops";

const cssContainer = css`
  label: container;
  --vertical-padding: calc(142rem / 16);
  padding-top: var(--vertical-padding);
  padding-bottom: var(--vertical-padding);
`;

function Home() {
  return (
    <Grid container direction="column" wrap="nowrap" alignItems="stretch">
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
            {showAgenda && (
              <Grid item>
                <div id="agenda">
                  <Agenda />
                </div>
              </Grid>
            )}
            <Grid item>
              <div id="topics">
                <Topics />
              </div>
            </Grid>
            <Grid item>
              <div id="workshops">
                <Workshops />
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
  );
}

export default memo(Home);
