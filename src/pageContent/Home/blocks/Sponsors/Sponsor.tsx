import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Tooltip,
} from "@material-ui/core";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useCallback, useMemo, useState } from "react";

const cssBtnImg = css`
  label: btnImg;
  max-width: 200px;
  max-height: 150px;
`;

const cssImgInInfo = css`
  label: imgInInfo;
  max-height: 200px;
  max-width: 100%;
  margin-bottom: 1rem;
`;

const Sponsor = ({ id }: { id: string }) => {
  const imgSrc = useMemo(() => require(`./${id}/logo.png`), [id]);
  const intl = useIntl();
  const [infoOpened, setInfoOpened] = useState(false);
  const infoOpen = useCallback(() => {
    setInfoOpened(true);
  }, []);
  const infoClose = useCallback(() => {
    setInfoOpened(false);
  }, []);
  const name = useMemo(
    () => intl.formatMessage({ id: `sponsors.${id}.name` }),
    [id, intl]
  );
  const Content = useMemo(
    () => require(`./${id}/info.${intl.locale}.mdx`).default,
    [id, intl.locale]
  );
  const [tooltipOpened, setTooltipOpened] = useState(false);
  const tooltipOpen = useCallback(() => {
    setTooltipOpened(true);
  }, []);
  const tooltipClose = useCallback(() => {
    setTooltipOpened(false);
  }, []);
  return (
    <Grid item>
      <Tooltip
        arrow
        title={name}
        open={tooltipOpened}
        onClose={tooltipClose}
        onOpen={tooltipOpen}
        onClick={tooltipClose}
      >
        <div>
          <Button onClick={infoOpen} disabled={infoOpened}>
            <img src={imgSrc} alt={name} className={cssBtnImg} />
          </Button>
        </div>
      </Tooltip>
      <Dialog open={infoOpened} onClose={infoClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <img src={imgSrc} alt={name} className={cssImgInInfo} />
            <Content />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default memo(Sponsor);
