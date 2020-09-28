import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
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
        <Grid container justifyContent="center" spacing={5}>
          {[
            // step 1
            "nor",
            "teddy-chen",

            // step 2
            "clark",
            "sam-huang",

            // // step 3
            // "wang-wei",
            // "zhang-yi",

            // // step 4

            // // step 5

            // // step 6
            // "kenny-baas-schwegler",
            // "kacper-gunia",

            // "gelis",
            // "joao-rosa",
            // "huang-guan-rong",
            // "lin-shi-pong",
            // "zheng-qi-wen",
            // "zhang-yun-wei",
            // "paul-shih",
            // "lin-de-zheng",
          ].map((id) => (
            <Speaker
              key={id}
              id={id}
              name={intl.formatMessage({ id: `speakers.${id}.name` })}
              title={intl.formatMessage({ id: `speakers.${id}.title` })}
              imgSrc={require(`speakers/${id}/profile`).default}
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
