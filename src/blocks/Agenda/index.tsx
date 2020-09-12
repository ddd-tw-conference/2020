import { Grid } from "@material-ui/core";
import Block from "components/Block";
import React, { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { MyEvent } from "./Event";
import imgSean from "./img/sean.png";
import Room from "./Room";

const Agenda = () => {
  const { t } = useTranslation();
  const room241Events: MyEvent[] = useMemo(
    () => [
      {
        start: new Date("2020-11-27T09:00:00+08:00"),
        end: new Date("2020-11-27T11:00:00+08:00"),
        title: "DDD Topic",
        resource: {
          speaker: {
            name: "Sean Lin",
            title: "Senior Engineer",
            imgSrc: imgSean,
          },
        },
      },
      {
        start: new Date("2020-11-27T13:00:00+08:00"),
        end: new Date("2020-11-27T16:00:00+08:00"),
        title: "DDD Topic",
        resource: {
          speaker: {
            name: "Sean Lin",
            title: "Senior Engineer",
            imgSrc: imgSean,
          },
        },
      },
    ],
    []
  );
  const room228Events: MyEvent[] = useMemo(
    () => [
      {
        start: new Date("2020-11-27T09:00:00+08:00"),
        end: new Date("2020-11-27T12:00:00+08:00"),
        title: "DDD Topic",
        resource: {
          speaker: {
            name: "Sean Lin",
            title: "Senior Engineer",
            imgSrc: imgSean,
          },
        },
      },
      {
        start: new Date("2020-11-27T14:00:00+08:00"),
        end: new Date("2020-11-27T16:00:00+08:00"),
        title: "DDD Topic",
        resource: {
          speaker: {
            name: "Sean Lin",
            title: "Senior Engineer",
            imgSrc: imgSean,
          },
        },
      },
    ],
    []
  );
  const room371Events: MyEvent[] = useMemo(
    () => [
      {
        start: new Date("2020-11-27T10:00:00+08:00"),
        end: new Date("2020-11-27T12:00:00+08:00"),
        title: "DDD Topic",
        resource: {
          speaker: {
            name: "Sean Lin",
            title: "Senior Engineer",
            imgSrc: imgSean,
          },
        },
      },
      {
        start: new Date("2020-11-27T13:00:00+08:00"),
        end: new Date("2020-11-27T16:00:00+08:00"),
        title: "DDD Topic",
        resource: {
          speaker: {
            name: "Sean Lin",
            title: "Senior Engineer",
            imgSrc: imgSean,
          },
        },
      },
    ],
    []
  );
  return (
    <Block title={t("blocks.agenda.title")}>
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
