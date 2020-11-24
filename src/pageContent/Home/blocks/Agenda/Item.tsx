import { Grid, Typography } from "@material-ui/core";
import A from "components/A";
import Button from "components/Button";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { Fragment, memo, useMemo } from "react";
import Speaker from "./Speaker";

export const cssContainer = css`
  label: container;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  background-color: #6cb9ea;
`;

const classesBtn = {
  root: css`
    label: root;
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: left;
  `,
  label: cssContainer,
};

const cssSpeakers = css`
  label: speakers;
  height: 100%;
`;

export default memo(function Item({
  type = "speaks",
  id,
  href,
  session,
}: {
  type?: "speaks" | "workshops";
  id: string;
  href?: string;
  session?: "a" | "b";
}) {
  const intl = useIntl();
  const title = useMemo(() => {
    const title = intl.formatMessage({ id: `${type}.${id}.title` });
    return session === "a"
      ? intl.formatMessage({ id: "blocks.agenda.session.a" }, { title })
      : session === "b"
      ? intl.formatMessage({ id: "blocks.agenda.session.b" }, { title })
      : title;
  }, [id, intl, session, type]);
  const speakers = useMemo(
    () =>
      type === "speaks"
        ? require(`speaks/${id}/speakers`).default
        : require(`workshops/${id}/speakers`).default,
    [id, type]
  );

  const content = useMemo(
    () => (
      <Fragment>
        <Typography variant="h5" color="textPrimary" align="left">
          {title}
        </Typography>
        {speakers?.length > 0 && (
          <Grid container spacing={1} className={cssSpeakers}>
            {speakers.map((id: string) => (
              <Speaker id={id} key={id} />
            ))}
          </Grid>
        )}
      </Fragment>
    ),
    [speakers, title]
  );

  return href ? (
    <Button classes={classesBtn} component={A} href={href}>
      {content}
    </Button>
  ) : (
    <div className={cssContainer}>{content}</div>
  );
});
