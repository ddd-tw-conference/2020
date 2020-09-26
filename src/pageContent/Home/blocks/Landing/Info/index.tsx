import { useTheme } from "@material-ui/core";
import {
  LocationOnOutlined as LocationOnOutlinedIcon,
  Schedule as ScheduleIcon,
} from "@material-ui/icons";
import { eventTime } from "constant";
import { format } from "date-fns";
import { css } from "emotion";
import React, { Fragment, memo, useMemo } from "react";
import Item from "./Item";

const Info = () => {
  const theme = useTheme();
  const cssInfo = useMemo(
    () =>
      css({
        label: "info",
        "&>*": {
          marginBottom: "0.5em",
        },
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          "&>*": {
            margin: "0.5em 2em",
          },
        },
      }),
    [theme.breakpoints]
  );
  return (
    <div className={cssInfo}>
      <Item
        icon={<LocationOnOutlinedIcon />}
        title={
          <Fragment>
            {"Taipei, Taiwan"}
            <br />
            {"北投會館"}
          </Fragment>
        }
      />
      <Item icon={<ScheduleIcon />} title={format(eventTime, "d MMM yyyy")} />
    </div>
  );
};

export default memo(Info);
