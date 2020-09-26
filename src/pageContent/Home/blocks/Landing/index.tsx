import { Button, Typography } from "@material-ui/core";
import {
  LocationOnOutlined as LocationOnOutlinedIcon,
  Schedule as ScheduleIcon,
} from "@material-ui/icons";
import A from "components/A";
import Container from "components/Container";
import InvertTheme from "components/InvertTheme";
import RwdGrid from "components/RwdGrid";
import { eventTime } from "constant";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import whiteLogo from "img/white_DDD_logo.jpg";
import { navBarHeight } from "layouts/Theme";
import React, { useEffect, useMemo, useState } from "react";
import TimeRenderBlock from "./TimeRenderBlock";

const cssLanding = css`
  label: landing;
  min-height: calc(100vh - ${navBarHeight}px);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getNow = () => new Date();

const Landing = () => {
  const intl = useIntl();
  const [now, setNow] = useState(getNow());
  useEffect(() => {
    const updateNow = () => {
      setNow(getNow());
    };
    const interval = setInterval(updateNow, 1000);
    return () => clearInterval(interval);
  }, []);

  const Days = useMemo(() => differenceInDays(eventTime, now), [now]);
  const Hours = useMemo(() => differenceInHours(eventTime, now) % 24, [now]);
  const Mins = useMemo(() => differenceInMinutes(eventTime, now) % 60, [now]);
  const Secs = useMemo(() => differenceInSeconds(eventTime, now) % 60, [now]);

  return (
    <InvertTheme className={cssLanding}>
      <Container>
        <RwdGrid container direction="column" wrap="nowrap" spacing={3}>
          <RwdGrid item>
            <RwdGrid
              container
              direction="row-reverse"
              spacing={3}
              justifyContent="space-between"
            >
              <RwdGrid item lg={4} xs={12}>
                <img src={whiteLogo} alt="whiteLogo" height="200" />
              </RwdGrid>
              <RwdGrid item lg={8} xs={12}>
                <RwdGrid container wrap="nowrap" direction="column" spacing={1}>
                  <RwdGrid item>
                    <Typography variant="h5">
                      Domain Driven Design Taiwan
                    </Typography>
                  </RwdGrid>
                  <RwdGrid item>
                    <Typography variant="h5">
                      {intl.formatMessage({ id: "blocks.landing.title" })}
                    </Typography>
                  </RwdGrid>
                  <RwdGrid item>
                    <Button
                      variant="outlined"
                      component={A}
                      href="https://dddtaiwan.kktix.cc/events/dddtw-conf-2020"
                    >
                      {intl.formatMessage({ id: "blocks.landing.join" })}
                    </Button>
                  </RwdGrid>
                </RwdGrid>
              </RwdGrid>
            </RwdGrid>
          </RwdGrid>
          <RwdGrid item>
            <RwdGrid
              container
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              <RwdGrid item lg={2} xs={6}>
                <RwdGrid container spacing={1}>
                  <RwdGrid item>
                    <LocationOnOutlinedIcon />
                  </RwdGrid>
                  <RwdGrid item>
                    <Typography>Taipei, Taiwan</Typography>
                  </RwdGrid>
                </RwdGrid>
              </RwdGrid>
              <RwdGrid item lg={2} xs={6}>
                <RwdGrid container spacing={1}>
                  <RwdGrid item>
                    <ScheduleIcon />
                  </RwdGrid>
                  <RwdGrid item>
                    <Typography>{format(eventTime, "d MMM yyyy")}</Typography>
                  </RwdGrid>
                </RwdGrid>
              </RwdGrid>
              <RwdGrid item lg={8} xs={12}>
                <RwdGrid container spacing={5}>
                  <RwdGrid item sm={3} xs={6}>
                    <TimeRenderBlock num={Days} unit="Days" />
                  </RwdGrid>
                  <RwdGrid item sm={3} xs={6}>
                    <TimeRenderBlock num={Hours} unit="Hrs" />
                  </RwdGrid>
                  <RwdGrid item sm={3} xs={6}>
                    <TimeRenderBlock num={Mins} unit="Mins" />
                  </RwdGrid>
                  <RwdGrid item sm={3} xs={6}>
                    <TimeRenderBlock num={Secs} unit="Secs" />
                  </RwdGrid>
                </RwdGrid>
              </RwdGrid>
            </RwdGrid>
          </RwdGrid>
        </RwdGrid>
      </Container>
    </InvertTheme>
  );
};

export default Landing;
