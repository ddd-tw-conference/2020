import { Grid } from "@material-ui/core";
import Block from "components/Block";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import Speaker from "./Speaker";

const Speakers = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.speakers.title" })}>
      <div>
        <Grid container justifyContent="center" spacing={5}>
          {[
            "nor",
            "teddy-chen",
            "clark",
            "sam-huang",
            "wang-wei",
            "zhang-yi",
            "kenny-baas-schwegler",
            "kacper-gunia",
            "gelis",
            "joao-rosa",
            "huang-guan-rong",
            "lin-shi-pong",
            "zheng-qi-wen",
            "zhang-yun-wei",
            "paul-shih",
            "lin-de-zheng",
            "sylvia",
            "lee-meng-xuan",
            "rex-wang",
            "otto",
            "guo-de-xiang",
            "zeng-qi-da",
            "michael-suen",
            "richard",
            "michael",
            "arthur",
            "ean",
            "river",
            "eason",
            "fong",
            "kim",
            "juggernaut",
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
      </div>
    </Block>
  );
};

export default memo(Speakers);
