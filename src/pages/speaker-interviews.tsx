import Block from "components/Block";
import Container from "components/Container";
import FixRatioIframe from "components/FixRatioIframe";
import Seo from "components/Seo";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, { memo, useMemo } from "react";

const cls = css`
  label: container;
  min-height: 320px;
`;

const App = () => {
  const intl = useIntl();
  const bryanTitle = useMemo(
    () => intl.formatMessage({ id: "speakersInterviews.items.bryan.title" }),
    [intl]
  );
  return (
    <Container className={cls}>
      <Seo title={intl.formatMessage({ id: "speakersInterviews.title" })} />
      <Block title={bryanTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={bryanTitle}
          src="https://www.youtube.com/embed/l0MCCDkOoNs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Block>
    </Container>
  );
};

export default memo(App);
