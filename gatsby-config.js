module.exports = {
  siteMetadata: {
    title: "challenge-gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "q5rrN52Kj4_R5naVgsJpRD4Sgozmed15a8C85-v-BLw",
        spaceId: "tfp4c795fmrh",
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
  ],
};
