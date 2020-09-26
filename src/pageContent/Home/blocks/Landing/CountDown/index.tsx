import { Grid } from "@material-ui/core";
import { eventTime } from "constant";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import React, { memo, useEffect, useMemo, useState } from "react";
import TimeRenderBlock from "./TimeRenderBlock";

const getNow = () => new Date();

const CountDown = () => {
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

  const Days = useMemo(() => differenceInDays(eventTime, now), [now]);
  const Hours = useMemo(() => differenceInHours(eventTime, now) % 24, [now]);
  const Mins = useMemo(() => differenceInMinutes(eventTime, now) % 60, [now]);
  const Secs = useMemo(() => differenceInSeconds(eventTime, now) % 60, [now]);
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
