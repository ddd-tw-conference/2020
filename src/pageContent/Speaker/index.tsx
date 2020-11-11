import { Typography, useTheme } from "@material-ui/core";
import Container from "components/Container";
import Seo from "components/Seo";
import Image from "components/speaker/Image";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const Speaker = ({ id }: { id: string }) => {
  const intl = useIntl();
  const name = useMemo(
    () => intl.formatMessage({ id: `speakers.${id}.name` }),
    [id, intl]
  );
  const title = useMemo(
    () => intl.formatMessage({ id: `speakers.${id}.title` }),
    [id, intl]
  );
  const Content = useMemo(() => require(`speakers/${id}/Content`).default, [
    id,
  ]);
  const introduce = useMemo(() => <Content />, []);
  const image = useMemo(() => require(`speakers/${id}/profile`).default, [id]);
  const theme = useTheme();
  const cssSpeaker = useMemo(
    () =>
      css({
        label: "speaker",
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
        },
      }),
    [theme.breakpoints]
  );
  const cssImage = useMemo(
    () =>
      css({
        label: "image",
        marginRight: "5em",
        [theme.breakpoints.down("xs")]: {
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "2rem",
        },
      }),
    [theme.breakpoints]
  );
  const cssName = useMemo(
    () =>
      css({
        label: "name",
        fontSize: "2rem",
        [theme.breakpoints.down("xs")]: {
          textAlign: "center",
        },
      }),
    [theme.breakpoints]
  );
  const cssTitle = useMemo(
    () =>
      css({
        label: "title",
        fontSize: "1.78rem",
        opacity: 0.6,
        marginBottom: "0.5em",
        [theme.breakpoints.down("xs")]: {
          textAlign: "center",
        },
      }),
    [theme.breakpoints]
  );
  return (
    <Container>
      <Seo article image={image} title={name} description={title} />
      <div className={cssSpeaker}>
        <div>
          <Image src={image} className={cssImage} />
        </div>
        <div>
          <Typography variant="h2" className={cssName}>
            {name}
          </Typography>
          <Typography className={cssTitle}>{title}</Typography>
          {introduce}
        </div>
      </div>
    </Container>
  );
};

export default memo(Speaker);
