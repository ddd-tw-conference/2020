const pkg = require("./package.json");

const allowRobots = process.env.ALLOW_ROBOTS === "true";

const exists = (a) => Boolean(a);

module.exports = {
  siteMetadata: {
    siteUrl: pkg.homepage,
  },
  plugins: [
    `gatsby-alias-imports`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `zh-TW`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/logo.png",
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          yandex: false,
          windows: false,
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: pkg.homepage,
        sitemap: `${pkg.homepage}sitemap.xml`,
        policy: [
          allowRobots
            ? { userAgent: "*", allow: "/" }
            : { userAgent: "*", disallow: ["/"] },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
  ].filter(exists),
};
