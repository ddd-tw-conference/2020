import { Grid, Typography } from "@material-ui/core";
import Button from "components/Button";
import Image from "components/speaker/Image";
import { css } from "emotion";
import { Link, useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const classesButton = {
  label: css`
    label: button;
    display: grid;
    gap: 8px;
    justify-items: center;
    --width: 200px;
  `,
};

const cssImg = css`
  label: img;
  --size: var(--width);
  border-width: 8px;
`;

const cssName = css`
  label: name;
  width: var(--width);
  font-size: 1rem;
`;

const cssTitle = css`
  label: title;
  font-size: 0.89rem;
  width: var(--width);
  height: 4em;
  overflow: hidden;
`;

export default memo(function Speaker({ id }: { id: string }) {
  const intl = useIntl();
  const imgSrc = useMemo(() => require(`speakers/${id}/profile`).default, [id]);
  const name = useMemo(
    () => intl.formatMessage({ id: `speakers.${id}.name` }),
    [id, intl]
  );
  const title = useMemo(
    () => intl.formatMessage({ id: `speakers.${id}.title` }),
    [id, intl]
  );
  return (
    <Grid item>
      <Button classes={classesButton} component={Link} to={`/speakers/${id}`}>
        <Image src={imgSrc} className={cssImg} />
        <div>
          <Typography variant="h6" className={cssName} align="center">
            {name}
          </Typography>
          <Typography className={cssTitle} color="textPrimary" align="center">
            {title}
          </Typography>
        </div>
      </Button>
    </Grid>
  );
});
