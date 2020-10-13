import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import defaultImage from "img/white_DDD_logo.jpg";
import React, { memo, useMemo } from "react";
import { Helmet } from "react-helmet";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const defaultTitle = "DDD TW Conference 2020";
const defaultDescription = "Domain-Driven Design Taiwan Conference 2020";

const Seo = ({
  title,
  description,
  image,
  article,
}: {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const { siteUrl } = site.siteMetadata;
  const seo = useMemo(
    () => ({
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image || defaultImage}`,
      url: `${siteUrl}${pathname}`,
    }),
    [description, image, pathname, siteUrl, title]
  );
  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={`%s | ${defaultTitle}`}>
      {(title ? true : null) && <title>{seo.title}</title>}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="twitter:site" content="@DddTaiwan" />
      <meta name="twitter:creator" content="@DddTaiwan" />
    </Helmet>
  );
};

export default memo(Seo);
