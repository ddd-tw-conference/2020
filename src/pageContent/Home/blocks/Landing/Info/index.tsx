import { useTheme } from "@material-ui/core";
import {
  LocationOnOutlined as LocationOnOutlinedIcon,
  Schedule as ScheduleIcon,
} from "@material-ui/icons";
import { eventTime } from "constant";
import { add, format } from "date-fns";
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
          margin: "0.5em 2em",
        },
        display: "flex",
        flexWrap: "wrap",
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
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
      <Item
        icon={<ScheduleIcon />}
        title={
          <Fragment>
            {format(eventTime, "d MMM yyyy")}
            <br />
            {format(add(eventTime, { days: 1 }), "d MMM yyyy")}
          </Fragment>
        }
      />
    </div>
  );
};

export default memo(Info);
