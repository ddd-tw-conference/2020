import { Grid, Typography } from "@material-ui/core";
import Image from "components/speaker/Image";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const cssContainer = css`
  label: button;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
`;

const cssImg = css`
  label: img;
  --size: 48px;
  border-width: 4px;
`;

const cssName = css`
  label: name;
  font-size: 1rem;
`;

const cssTitle = css`
  label: title;
  font-size: 0.89rem;
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
    <Grid item className={cssContainer}>
      <Image src={imgSrc} className={cssImg} />
      <div>
        <Typography
          variant="h6"
          className={cssName}
          color="textPrimary"
          align="left"
        >
          {name}
        </Typography>
        <Typography className={cssTitle} color="textPrimary" align="left">
          {title}
        </Typography>
      </div>
    </Grid>
  );
});
