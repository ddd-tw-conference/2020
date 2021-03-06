import { Grid, Typography, useTheme } from "@material-ui/core";
import Container from "components/Container";
import Seo from "components/Seo";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";
import Speaker from "./Speaker";

const cssSpeakers = css`
  label: speakers;
  margin-top: 32px;
`;

export default memo(function Agenda({
  type = "speaks",
  id,
}: {
  type?: "speaks" | "workshops";
  id: string;
}) {
  const intl = useIntl();
  const title = useMemo(
    () =>
      type === "speaks"
        ? intl.formatMessage({ id: `speaks.${id}.title` })
        : intl.formatMessage({ id: `workshops.${id}.title` }),
    [id, intl, type]
  );
  const content = useMemo(() => {
    const Content =
      type === "speaks"
        ? require(`speaks/${id}/Content`).default
        : require(`workshops/${id}/Content`).default;
    return <Content />;
  }, [id, type]);
  const speakers = useMemo(
    () =>
      type === "speaks"
        ? require(`speaks/${id}/speakers`).default
        : require(`workshops/${id}/speakers`).default,
    [id, type]
  );
  const theme = useTheme();
  const cssTopic = useMemo(
    () =>
      css({
        label: "topic",
        fontSize: "3rem",
        marginBottom: "0.5em",
        [theme.breakpoints.down("xs")]: {
          textAlign: "center",
        },
      }),
    [theme.breakpoints]
  );
  return (
    <Container>
      <Seo article title={title} />
      <Typography variant="h1" className={cssTopic}>
        {title}
      </Typography>
      <div>{content}</div>
      {speakers?.length > 0 && (
        <Grid container className={cssSpeakers} justifyContent="center">
          {speakers.map((id: string) => (
            <Speaker id={id} key={id} />
          ))}
        </Grid>
      )}
    </Container>
  );
});
