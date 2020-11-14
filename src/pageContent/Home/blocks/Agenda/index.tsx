import { Typography } from "@material-ui/core";
import Block from "components/Block";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import Day1 from "./Day1";
import Day2 from "./Day2";

const cssDay = css`
  label: day;
  display: grid;
  gap: 5rem;

  &:not(:last-child) {
    margin-bottom: 10rem;
  }
`;

const Agenda = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.agenda.title" })}>
      <div className={cssDay}>
        <Typography variant="h5">
          {intl.formatMessage({ id: "blocks.agenda.day.day1" })}
        </Typography>
        <Day1 />
      </div>
      <div className={cssDay}>
        <Typography variant="h5">
          {intl.formatMessage({ id: "blocks.agenda.day.day2" })}
        </Typography>
        <Day2 />
      </div>
    </Block>
  );
};

export default memo(Agenda);
