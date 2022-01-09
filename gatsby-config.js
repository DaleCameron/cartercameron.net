module.exports = {
  siteMetadata: {
    title: `Carter Cameron`,
    description: `Perosnal Website`,
    author: `@drthecar`,
    siteUrl: `https://cartercameron.net`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/images/carterlogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {

      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          book: require.resolve("./src/components/layout.js"),
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                strong: "text-3xl",
                paragraph: "para",
              }
            }
          }
        ],
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

  ],
}
