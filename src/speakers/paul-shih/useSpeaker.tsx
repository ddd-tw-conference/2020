import { useIntl } from "gatsby-plugin-intl";
import React, { useMemo } from "react";
import profile from "./profile";

const useSpeaker = () => {
  const intl = useIntl();
  const Content = useMemo(
    () => require(`./content.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  const Introduce = useMemo(
    () => require(`./introduce.${intl.locale}.mdx`).default,
    [intl.locale]
  );
  const ret = useMemo(
    () => ({
      topic: intl.formatMessage({ id: "speakers.paul-shih.topic" }),
      content: <Content />,
      name: intl.formatMessage({ id: "speakers.paul-shih.name" }),
      title: intl.formatMessage({ id: "speakers.paul-shih.title" }),
      introduce: <Introduce />,
      image: profile,
      ogTitle: intl.formatMessage({ id: "speakers.paul-shih.ogTitle" }),
      ogDescription: intl.formatMessage({
        id: "speakers.paul-shih.ogDescription",
      }),
    }),
    [intl]
  );
  return ret;
};

export default useSpeaker;
