import { Grid } from "@material-ui/core";
import Block from "components/Block";
import Topic from "components/Topic";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const Topics = () => {
  const intl = useIntl();
  const markdown1 = useMemo(
    () => require(`!!raw-loader!./Track1.${intl.locale}.md`),
    [intl.locale]
  );
  const markdown2 = useMemo(
    () => require(`!!raw-loader!./Track2.${intl.locale}.md`),
    [intl.locale]
  );
  const markdown3 = useMemo(
    () => require(`!!raw-loader!./Track3.${intl.locale}.md`),
    [intl.locale]
  );
  return (
    <Block title={intl.formatMessage({ id: "blocks.topics.title" })}>
      <Grid container direction="column" wrap="nowrap" spacing={2}>
        <Grid item>
          <Topic markdown={markdown1} />
        </Grid>
        <Grid item>
          <Topic markdown={markdown2} />
        </Grid>
        <Grid item>
          <Topic markdown={markdown3} />
        </Grid>
      </Grid>
    </Block>
  );
};

export default memo(Topics);
