const siteMetadata = require('./config/metadata')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-formium`,
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `challenge-gatsby`,
        short_name: `challenge-gatsby`,
        description: `#100DaysOfGatsby, Gatsby’s guided coding challenge for 2021`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#525659`,
        display: `standalone`,
        icon: 'src/images/icon.png' //512x512
      },
      icon_options: {
        purpose: `any maskable`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
