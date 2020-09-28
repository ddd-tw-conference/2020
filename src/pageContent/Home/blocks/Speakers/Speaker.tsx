import { Button, Grid, Typography } from "@material-ui/core";
import Image from "components/speaker/Image";
import { css } from "emotion";
import { Link } from "gatsby-plugin-intl";
import React, { memo } from "react";

const cssButton = css`
  label: btn;
  width: 280px;
  text-transform: none;
`;

const cssName = css`
  label: name;
  font-weight: bold;
`;

const Speaker = ({
  id,
  name,
  title,
  imgSrc,
}: {
  id: string;
  name?: string;
  title?: string;
  imgSrc?: string;
}) => {
  return (
    <Grid item>
      <Button component={Link} to={`/speakers/${id}`} className={cssButton}>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Image src={imgSrc} />
          </Grid>
          <Grid item>
            <Typography variant="h4" className={cssName} align="center">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" color="textPrimary">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

export default memo(Speaker);
