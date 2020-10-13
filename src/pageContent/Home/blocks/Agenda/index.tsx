import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import { MyEvent } from "./Event";
import Room from "./Room";

const room241Events: MyEvent[] = [
  {
    start: new Date("2020-11-27T09:00:00+08:00"),
    end: new Date("2020-11-27T11:00:00+08:00"),
    resource: {
      speaker: "anonymous",
    },
  },
  {
    start: new Date("2020-11-27T13:00:00+08:00"),
    end: new Date("2020-11-27T16:00:00+08:00"),
    resource: {
      speaker: "anonymous",
    },
  },
];

const room228Events: MyEvent[] = [
  {
    start: new Date("2020-11-27T09:00:00+08:00"),
    end: new Date("2020-11-27T12:00:00+08:00"),
    resource: {
      speaker: "anonymous",
    },
  },
  {
    start: new Date("2020-11-27T14:00:00+08:00"),
    end: new Date("2020-11-27T16:00:00+08:00"),
    resource: {
      speaker: "anonymous",
    },
  },
];

const room371Events: MyEvent[] = [
  {
    start: new Date("2020-11-27T10:00:00+08:00"),
    end: new Date("2020-11-27T12:00:00+08:00"),
    resource: {
      speaker: "anonymous",
    },
  },
  {
    start: new Date("2020-11-27T13:00:00+08:00"),
    end: new Date("2020-11-27T16:00:00+08:00"),
    resource: {
      speaker: "anonymous",
    },
  },
];

const Agenda = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.agenda.title" })}>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={4}>
          <Room title="Room 241" events={room241Events} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Room title="Room 228" events={room228Events} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Room title="Room 371" events={room371Events} />
        </Grid>
      </Grid>
    </Block>
  );
};

export default memo(Agenda);
