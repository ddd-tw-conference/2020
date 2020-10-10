import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Tooltip,
} from "@material-ui/core";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useCallback, useMemo, useState } from "react";

const cssImgInInfo = css`
  label: imgInInfo;
  max-height: 200px;
  max-width: 100%;
  margin-bottom: 1rem;
`;

const cssContent = css`
  label: content;
  padding-bottom: 24px;
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
  const cssSponsor = useMemo(
    () =>
      css({
        label: "sponsor",
        width: "200px",
        height: "150px",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: "no-repeat",
        margin: "auto",
      }),
    [imgSrc]
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
          <Button
            className={cssSponsor}
            onClick={infoOpen}
            disabled={infoOpened}
          />
        </div>
      </Tooltip>
      <Dialog open={infoOpened} onClick={infoClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent className={cssContent}>
          <img src={imgSrc} alt={name} className={cssImgInInfo} />
          <Content />
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default memo(Sponsor);
