import Block from "components/Block";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import Sponsor from "./Sponsor";
import SponsorClassBlock from "./SponsorClassBlock";

const cls = css`
  label: Sponsors;
  display: grid;
  grid-gap: 3rem;
`;

const Sponsors = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.sponsors.title" })}>
      <div className={cls}>
        <SponsorClassBlock
          title={intl.formatMessage({ id: "blocks.sponsors.class.diamond" })}
        >
          <Sponsor id="soft-leader" />
        </SponsorClassBlock>
        <SponsorClassBlock
          title={intl.formatMessage({ id: "blocks.sponsors.class.gold" })}
        >
          <Sponsor id="aws" />
          <Sponsor id="fable" />
        </SponsorClassBlock>
        <SponsorClassBlock
          title={intl.formatMessage({ id: "blocks.sponsors.class.special" })}
        >
          <Sponsor id="jet-brains" />
        </SponsorClassBlock>
      </div>
    </Block>
  );
};

export default memo(Sponsors);
