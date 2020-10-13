import { Typography, useTheme } from "@material-ui/core";
import Container from "components/Container";
import Seo from "components/Seo";
import Image from "components/speaker/Image";
import { css } from "emotion";
import React, { memo, ReactNode, useMemo } from "react";

const cssContainer = css`
  label: container;
  & > * {
    margin-bottom: 3em;
  }
`;

const Speaker = ({
  topic,
  content,
  name,
  title,
  introduce,
  image,
  ogTitle,
  ogDescription,
}: {
  topic?: string;
  content?: ReactNode;
  name?: string;
  title?: string;
  introduce?: ReactNode;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
}) => {
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
    <Container className={cssContainer}>
      <Seo article image={image} title={ogTitle} description={ogDescription} />
      {topic !== "." && (
        <div>
          <Typography variant="h1" className={cssTopic}>
            {topic}
          </Typography>
          <div>{content}</div>
        </div>
      )}
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
