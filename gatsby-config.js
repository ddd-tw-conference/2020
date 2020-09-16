module.exports = {
  plugins: [
    `gatsby-alias-imports`,
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
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
};
