import { Button, Grid, Hidden } from "@material-ui/core";
import { eventTime } from "constant";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import add from "date-fns/add";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";
import isEqual from "date-fns/isEqual";
import startOfDay from "date-fns/startOfDay";
import { css } from "emotion";
import { Link, useIntl } from "gatsby-plugin-intl";
import React, { memo, useEffect, useMemo, useState } from "react";
import TimeRenderBlock from "./TimeRenderBlock";

const cssButtonWrapper = css`
  label: buttonWrapper;
  display: flex;
  align-items: center;
`;

const cssButton = css`
  label: button;
  font-size: 2rem;
`;

const getNow = () => new Date();
const day1 = startOfDay(eventTime);
const day2 = add(day1, { days: 1 });
const day3 = add(day2, { days: 1 });

const CountDown = () => {
  const intl = useIntl();
  const [now, setNow] = useState(getNow());
  useEffect(() => {
    const updateNow = () => {
      setNow(getNow());
    };
    const interval = setInterval(updateNow, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const showDay2 = useMemo(
    () => (isAfter(now, day2) || isEqual(now, day2)) && isBefore(now, day3),
    [now]
  );
  const showDay1 = useMemo(
    () => !showDay2 && (isAfter(now, eventTime) || isEqual(now, eventTime)),
    [now, showDay2]
  );

  const Days = useMemo(() => differenceInDays(eventTime, now), [now]);
  const Hours = useMemo(() => differenceInHours(eventTime, now) % 24, [now]);
  const Mins = useMemo(() => differenceInMinutes(eventTime, now) % 60, [now]);
  const Secs = useMemo(() => differenceInSeconds(eventTime, now) % 60, [now]);
  if (showDay1)
    return (
      <div className={cssButtonWrapper}>
        <Button
          className={cssButton}
          component={Link}
          to="/#agenda"
          variant="outlined"
        >
          {intl.formatMessage({ id: "blocks.landing.countDown.goToAgenda" })}
        </Button>
      </div>
    );
  if (showDay2)
    return (
      <div className={cssButtonWrapper}>
        <Hidden implementation="css" mdUp>
          <Button
            className={cssButton}
            component={Link}
            to="/#agenda_d2a"
            variant="outlined"
          >
            {intl.formatMessage({ id: "blocks.landing.countDown.goToAgenda" })}
          </Button>
        </Hidden>
        <Hidden implementation="css" smDown>
          <Button
            className={cssButton}
            component={Link}
            to="/#agenda_d2"
            variant="outlined"
          >
            {intl.formatMessage({ id: "blocks.landing.countDown.goToAgenda" })}
          </Button>
        </Hidden>
      </div>
    );
  return (
    <div>
      <Grid container spacing={5} justifyContent="center">
        <Grid item>
          <Grid container spacing={5} justifyContent="center">
            <Grid item>
              <TimeRenderBlock num={Days} unit="Days" />
            </Grid>
            <Grid item>
              <TimeRenderBlock num={Hours} unit="Hrs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={5} justifyContent="center">
            <Grid item>
              <TimeRenderBlock num={Mins} unit="Mins" />
            </Grid>
            <Grid item>
              <TimeRenderBlock num={Secs} unit="Secs" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(CountDown);
