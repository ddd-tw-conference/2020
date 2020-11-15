import { useTheme } from "@material-ui/core";
import {
  DirectionsCar as DirectionsCarIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
  Schedule as ScheduleIcon,
} from "@material-ui/icons";
import { eventTime } from "constant";
import { add, format } from "date-fns";
import { css } from "emotion";
import React, { Fragment, memo, useMemo } from "react";
import TaipeiMrtIcon from "./icons/TaipeiMrtIcon";
import Item from "./Item";

const Info = () => {
  const theme = useTheme();
  const cssInfo = useMemo(
    () =>
      css({
        label: "info",
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "left",
        [theme.breakpoints.down("xs")]: {
          gridTemplateColumns: "1fr",
          justifyItems: "center",
        },
      }),
    [theme.breakpoints]
  );
  return (
    <div className={cssInfo}>
      <Item
        icon={<TaipeiMrtIcon />}
        title={"搭乘捷運"}
        to="/travel-guide/mrt"
      />
      <Item
        icon={<DirectionsCarIcon />}
        title={"開車前往"}
        to="/travel-guide/drive"
      />
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
