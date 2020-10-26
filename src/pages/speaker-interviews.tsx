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
  display: grid;
  gap: 2rem;
`;

const App = () => {
  const intl = useIntl();
  const bryanTitle = useMemo(
    () => intl.formatMessage({ id: "speakersInterviews.items.bryan.title" }),
    [intl]
  );
  const rexTitle = useMemo(
    () => intl.formatMessage({ id: "speakersInterviews.items.rex.title" }),
    [intl]
  );
  const samTitle = useMemo(
    () => intl.formatMessage({ id: "speakersInterviews.items.sam.title" }),
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
      <Block title={rexTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={rexTitle}
          src="https://www.youtube.com/embed/ZLcQn8EeuiA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Block>
      <Block title={samTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={samTitle}
          src="https://www.youtube.com/embed/jcMAt-bfEso"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Block>
    </Container>
  );
};

export default memo(App);
