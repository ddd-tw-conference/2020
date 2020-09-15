import { Grid, Typography } from "@material-ui/core";
import { css } from "emotion";
import React, { memo } from "react";
import { Event } from "react-big-calendar";

export type MyEvent = Omit<Event, "resource"> & {
  resource?: {
    speaker: {
      name?: string;
      title?: string;
      imgSrc?: string;
    };
  };
};

const cssImg = css`
  label: img;
  max-height: 3em;
  max-width: 3em;
  border-radius: 50%;
`;

const EventRenderer = ({ event, title }: { event: MyEvent; title: string }) => {
  return (
    <Grid container direction="column" wrap="nowrap" spacing={1}>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item>
        <Grid container wrap="nowrap" spacing={1} alignItems="center">
          <Grid item>
            <img
              className={cssImg}
              src={event?.resource?.speaker?.imgSrc || ""}
              alt={event?.resource?.speaker?.name ?? ""}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column" wrap="nowrap">
              <Grid item>
                <Typography>{event?.resource?.speaker?.name || ""}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {event?.resource?.speaker?.title || ""}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(EventRenderer);
