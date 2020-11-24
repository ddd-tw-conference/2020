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
  const stevenMakTitle = useMemo(
    () =>
      intl.formatMessage({ id: "speakersInterviews.items.stevenMak.title" }),
    [intl]
  );
  const samTitle = useMemo(
    () => intl.formatMessage({ id: "speakersInterviews.items.sam.title" }),
    [intl]
  );
  const kacperGuniaTitle = useMemo(
    () =>
      intl.formatMessage({ id: "speakersInterviews.items.kacperGunia.title" }),
    [intl]
  );
  const kennyBaasSchweglerTitle = useMemo(
    () =>
      intl.formatMessage({
        id: "speakersInterviews.items.kennyBaasSchwegler.title",
      }),
    [intl]
  );
  const zhangYiTitle = useMemo(
    () => intl.formatMessage({ id: "speakersInterviews.items.zhangYi.title" }),
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
      <Block title={stevenMakTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={stevenMakTitle}
          src="https://www.youtube.com/embed/8VVVZsxbNdk"
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
      <Block title={kacperGuniaTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={kacperGuniaTitle}
          src="https://www.youtube.com/embed/LJ8SIa7pYOg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Block>
      <Block title={kennyBaasSchweglerTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={kennyBaasSchweglerTitle}
          src="https://www.youtube.com/embed/aYkUMWsGG6Y"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Block>
      <Block title={zhangYiTitle}>
        <FixRatioIframe
          ratio="56.25%"
          title={zhangYiTitle}
          src="https://www.youtube.com/embed/VSssPtopnag"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Block>
    </Container>
  );
};

export default memo(App);
