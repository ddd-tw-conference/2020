import { Tab, Tabs } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useState } from "react";
import Day1 from "./Day1";
import Day2 from "./Day2";

const Agenda = () => {
  const intl = useIntl();
  const [tabValue, setTabValue] = useState("day1");
  return (
    <Block title={intl.formatMessage({ id: "blocks.agenda.title" })}>
      <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
        <Tab
          value="day1"
          label={intl.formatMessage({ id: "blocks.agenda.tabs.day1" })}
        />
        <Tab
          value="day2"
          label={intl.formatMessage({ id: "blocks.agenda.tabs.day2" })}
        />
      </Tabs>
      <div>{tabValue === "day1" ? <Day1 /> : <Day2 />}</div>
    </Block>
  );
};

export default memo(Agenda);
