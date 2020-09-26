import { Grid, Typography, useTheme } from "@material-ui/core";
import Calendar from "components/Calendar";
import { eventTime } from "constant";
import { css, cx } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, ReactNode, useCallback, useMemo } from "react";
import { stringOrDate } from "react-big-calendar";
import muiToEmotion from "utils/css/muiToEmotion";
import Event, { MyEvent } from "./Event";

const cssCalendar = css`
  label: calendar;
  & .rbc-timeslot-group {
    min-height: 80px;
  }
`;

const views = {
  day: true,
};

const components = {
  event: Event,
};

const Room = ({ title, events }: { title: ReactNode; events: MyEvent[] }) => {
  const intl = useIntl();
  const theme = useTheme();
  const mergedEvents = useMemo(
    () => [
      ...events,
      {
        start: new Date("2020-11-27T12:00:00+08:00"),
        end: new Date("2020-11-27T13:00:00+08:00"),
        title: intl.formatMessage({ id: "blocks.agenda.room.breakTime" }),
      },
    ],
    [events, intl]
  );
  const eventPropGetter = useCallback(
    (
      event: MyEvent,
      start: stringOrDate,
      end: stringOrDate,
      isSelected: boolean
    ) => {
      const init = cx(
        css({
          label: "mui",
          "&&&": muiToEmotion(theme.typography.body1),
        }),
        css`
          label: init;
          &&& {
            flex-wrap: nowrap;
          }
        `
      );
      return event.title ===
        intl.formatMessage({ id: "blocks.agenda.room.breakTime" })
        ? {
            className: cx(
              init,
              css({
                label: "breakTime",
                "&&&": {
                  color: theme.palette.secondary.contrastText,
                  borderColor: theme.palette.secondary.contrastText,
                  backgroundColor: theme.palette.secondary.main,
                },
              })
            ),
          }
        : {
            className: cx(
              init,
              css({
                label: "event",
                "&&&": {
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.light,
                },
              })
            ),
          };
    },
    [
      intl,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.secondary.contrastText,
      theme.palette.secondary.main,
      theme.typography.body1,
    ]
  );
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      spacing={1}
      alignItems="stretch"
    >
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item>
        <Calendar
          className={cssCalendar}
          toolbar={false}
          components={components}
          eventPropGetter={eventPropGetter}
          events={mergedEvents}
          min={new Date("2020-11-27T09:00:00+08:00")}
          max={new Date("2020-11-27T16:00:00+08:00")}
          date={eventTime}
          defaultView="day"
          view="day"
          views={views}
        />
      </Grid>
    </Grid>
  );
};

export default memo(Room);
