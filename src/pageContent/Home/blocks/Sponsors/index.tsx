import Block from "components/Block";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import DiamondIcon from "./icons/DiamondIcon";
import GoldIcon from "./icons/GoldIcon";
import MedalIcon from "./icons/MedalIcon";
import Sponsor from "./Sponsor";
import SponsorClassBlock from "./SponsorClassBlock";

const cls = css`
  label: Sponsors;
  display: grid;
  gap: 3rem;
`;

const Sponsors = () => {
  const intl = useIntl();
  return (
    <Block title={intl.formatMessage({ id: "blocks.sponsors.title" })}>
      <div className={cls}>
        <SponsorClassBlock
          title={intl.formatMessage({ id: "blocks.sponsors.class.diamond" })}
          titleIcon={<DiamondIcon />}
        >
          <Sponsor id="soft-leader" />
        </SponsorClassBlock>
        <SponsorClassBlock
          title={intl.formatMessage({ id: "blocks.sponsors.class.gold" })}
          titleIcon={<GoldIcon />}
        >
          <Sponsor id="aws" />
          <Sponsor id="conquer-tech" />
          <Sponsor id="fable" />
        </SponsorClassBlock>
        <SponsorClassBlock
          title={intl.formatMessage({ id: "blocks.sponsors.class.special" })}
          titleIcon={<MedalIcon />}
        >
          <Sponsor id="jet-brains" />
        </SponsorClassBlock>
      </div>
    </Block>
  );
};

export default memo(Sponsors);
