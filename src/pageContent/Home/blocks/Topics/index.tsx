import { Grid } from "@material-ui/core";
import Block from "components/Block";
import Topic from "components/Topic";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const Topics = () => {
  const intl = useIntl();
  const Markdown1 = useMemo(
    () => require(`./Track1.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  const Markdown2 = useMemo(
    () => require(`./Track2.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  const Markdown3 = useMemo(
    () => require(`./Track3.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  return (
    <Block title={intl.formatMessage({ id: "blocks.topics.title" })}>
      <Grid container direction="column" wrap="nowrap" spacing={2}>
        <Grid item>
          <Topic>
            <Markdown1 />
          </Topic>
        </Grid>
        <Grid item>
          <Topic>
            <Markdown2 />
          </Topic>
        </Grid>
        <Grid item>
          <Topic>
            <Markdown3 />
          </Topic>
        </Grid>
      </Grid>
    </Block>
  );
};

export default memo(Topics);
