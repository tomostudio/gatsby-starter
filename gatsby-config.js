module.exports = {
  siteMetadata: {
    title: `Gatsby x Tailwind x Framer Motion x Locomotive Scroll`,
    description: `An opinionated starter for Gatsby v3 with TailwindCSS, PostCSS, Locomotive and Framer Motion page transitions. based on Samual Goddard Gatsby Starter`,
    author: `@hendhyhutomo`,
  },
  plugins: [
    "gatsby-plugin-webpack-bundle-analyser-v2",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
