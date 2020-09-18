import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import fallbackImg from "./img/fallback.png";
import Speaker from "./Speaker";

const hasMoreSpeakers = true;

const cssMore = css`
  label: more;
  font-size: 2rem;
  color: #707070;
  text-align: right;
  margin-top: 0.5em;
`;

const Speakers = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.speakers.title" })}>
      <div>
        <Grid container spacing={5}>
          {[
            // step 1
            "12",
            "08",

            // // step 2
            // "15",
            // "13",

            // // step 3
            // "16",
            // "03",

            // // step 4

            // // step 5

            // // step 6
            // "01",
            // "04",

            // "02",
            // "05",
            // "06",
            // "07",
            // "09",
            // "10",
            // "11",
            // "14",
          ].map((id) => (
            <Speaker
              key={id}
              name={intl.formatMessage({ id: `speakers.s${id}.name` })}
              title={intl.formatMessage({ id: `speakers.s${id}.title` })}
              article={require(`!!raw-loader!speakers/s${id}/Article.${intl.locale}.md`)}
              imgSrc={
                require(`speakers/s${id}/speaker`).default?.imgSrc ??
                fallbackImg
              }
            />
          ))}
        </Grid>
        {hasMoreSpeakers && (
          <div className={cssMore}>
            ...{intl.formatMessage({ id: "blocks.speaks.more" })}
          </div>
        )}
      </div>
    </Block>
  );
};

export default memo(Speakers);
