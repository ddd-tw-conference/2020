import { Grid, Typography } from "@material-ui/core";
import fallBackImg from "components/speaker/Image/fallback.png";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";
import { Event } from "react-big-calendar";

export type MyEvent = Omit<Event, "resource"> & {
  resource?: {
    topic?: string;
    speaker?: string;
  };
};

const cssImg = css`
  label: img;
  max-height: 3em;
  max-width: 3em;
  border-radius: 50%;
`;

const EventRenderer = ({ event }: { event: MyEvent }) => {
  const intl = useIntl();
  console.log(event.resource);
  const isSpeaker = useMemo(() => !event.resource?.topic, [event.resource]);
  const profile = useMemo(
    () =>
      !isSpeaker
        ? ""
        : // require(`speakers/anonymous/profile`).default
          require(`speakers/${event.resource?.speaker}/profile`).default ||
          fallBackImg,
    [event.resource, isSpeaker]
  );
  const topic = useMemo(
    () =>
      !isSpeaker
        ? event.resource?.topic
        : // intl.formatMessage({ id: `speakers.anonymous.topic` }),
          intl.formatMessage({
            id: `speakers.${event.resource?.speaker}.topic`,
          }),
    [event.resource, intl, isSpeaker]
  );
  const name = useMemo(
    () =>
      !isSpeaker
        ? ""
        : // intl.formatMessage({ id: `speakers.anonymous.name` }),
          intl.formatMessage({
            id: `speakers.${event.resource?.speaker}.name`,
          }),
    [event.resource, intl, isSpeaker]
  );
  const title = useMemo(
    () =>
      !isSpeaker
        ? ""
        : // intl.formatMessage({ id: `speakers.anonymous.title` }),
          intl.formatMessage({
            id: `speakers.${event.resource?.speaker}.title`,
          }),
    [event.resource, intl, isSpeaker]
  );
  return (
    <Grid container direction="column" wrap="nowrap" spacing={1}>
      <Grid item>
        <Typography variant="h6">{topic}</Typography>
      </Grid>
      <Grid item>
        <Grid container wrap="nowrap" spacing={1} alignItems="center">
          <Grid item>
            <img
              className={cssImg}
              src={profile}
              // alt={intl.formatMessage({ id: `speakers.anonymous.name` })}
              alt={name}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column" wrap="nowrap">
              <Grid item>
                <Typography>{name || ""}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{title || ""}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(EventRenderer);
