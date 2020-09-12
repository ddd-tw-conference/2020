import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { memo } from "react";
import { Calendar, CalendarProps, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = (props: Omit<CalendarProps, "localizer">) => (
  <Calendar
    startAccessor="start"
    endAccessor="end"
    {...props}
    localizer={localizer}
  />
);

export default memo(MyCalendar);
