import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import Markdown from "components/Markdown";
import RwdGrid from "components/RwdGrid";
import { css } from "emotion";
import React, { memo, useMemo } from "react";
import muiToEmotion from "utils/css/muiToEmotion";

const cssCloseButton = css`
  label: closeButton;
  position: absolute;
  right: 0;
  top: 0;
  color: #707070;
`;

const cssContainerWrapper = css`
  label: content;
  overflow: hidden;
`;

const cssTitle = css`
  label: title;
  color: #6f6f6f;
`;

const SpeakerDialog = ({
  open,
  onClose,
  imgSrc,
  name,
  title,
  article,
  links,
}: {
  open: boolean;
  onClose: () => void;
  imgSrc: string;
  name: string;
  title: string;
  article: string;
  links?: any;
}) => {
  const cssImg = useMemo(
    () =>
      css({
        label: "img",
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        border: "1px solid #707070",
        borderRadius: "50%",
        "--size": "150px",
        width: "var(--size)",
        height: "var(--size)",
      }),
    [imgSrc]
  );
  const theme = useTheme();
  const cssContainer = useMemo(
    () =>
      css({
        label: "container",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
        },
      }),
    [theme.breakpoints]
  );
  const cssName = useMemo(
    () =>
      css({
        label: "name",
        color: theme.palette.primary.main,
      }),
    [theme.palette.primary.main]
  );
  const cssArticle = useMemo(
    () =>
      css({
        label: "article",
        "&": {
          p: muiToEmotion(theme.typography.body1),
        },
        "&&": {
          p: {
            color: "#707070",
          },
        },
      }),
    [theme.typography.body1]
  );
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <IconButton
          aria-label="close"
          className={cssCloseButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <div className={cssContainerWrapper}>
          <RwdGrid
            rwdSize="xs"
            container
            spacing={2}
            wrap="nowrap"
            className={cssContainer}
          >
            <RwdGrid rwdSize="xs" item>
              <div className={cssImg} />
            </RwdGrid>
            <RwdGrid rwdSize="xs" item>
              <RwdGrid
                rwdSize="xs"
                container
                spacing={2}
                direction="column"
                wrap="nowrap"
              >
                <RwdGrid rwdSize="xs" item>
                  <Typography variant="h5" className={cssName}>
                    {name}
                  </Typography>
                </RwdGrid>
                <RwdGrid rwdSize="xs" item>
                  <Typography variant="h6" className={cssTitle}>
                    {title}
                  </Typography>
                </RwdGrid>
                <RwdGrid rwdSize="xs" item>
                  <Markdown markdown={article} className={cssArticle} />
                </RwdGrid>
              </RwdGrid>
            </RwdGrid>
          </RwdGrid>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default memo(SpeakerDialog);
