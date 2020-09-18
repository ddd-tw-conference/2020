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
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
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
