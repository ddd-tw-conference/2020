import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import fallbackImg from "./img/fallback.png";
import Speaker from "./Speaker";

const Speakers = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.speakers.title" })}>
      <Grid container spacing={5}>
        {[
          // step 1
          "12",
          "08",

          // step 2
          "15",
          "13",

          // step 3
          "16",
          "03",

          // step 4

          // step 5

          // step6
          "01",
          "04",

          "02",
          "05",
          "06",
          "07",
          "09",
          "10",
          "11",
          "14",
        ].map((id) => (
          <Speaker
            key={id}
            name={intl.formatMessage({ id: `speakers.s${id}.name` })}
            title={intl.formatMessage({ id: `speakers.s${id}.title` })}
            article={require(`!!raw-loader!speakers/s${id}/Article.${intl.locale}.md`)}
            imgSrc={
              require(`speakers/s${id}/speaker`).default?.imgSrc ?? fallbackImg
            }
          />
        ))}
      </Grid>
    </Block>
  );
};

export default memo(Speakers);
