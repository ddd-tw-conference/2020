import { Button, Typography, useTheme } from "@material-ui/core";
import A from "components/A";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const Title = () => {
  const intl = useIntl();
  const theme = useTheme();
  const cssTitle = useMemo(
    () =>
      css({
        label: "title",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        "&>*": {
          marginBottom: "0.5em",
        },
        [theme.breakpoints.down("md")]: {
          alignItems: "center",
        },
      }),
    [theme.breakpoints]
  );
  return (
    <div className={cssTitle}>
      <Typography variant="h4" align="center">
        Domain Driven Design Taiwan
      </Typography>
      <Typography variant="h4" align="center">
        {intl.formatMessage({ id: "blocks.landing.title" })}
      </Typography>
      <Button
        variant="outlined"
        component={A}
        href="https://dddtaiwan.kktix.cc/events/dddtw-conf-2020"
      >
        {intl.formatMessage({ id: "blocks.landing.join" })}
      </Button>
    </div>
  );
};

export default memo(Title);
