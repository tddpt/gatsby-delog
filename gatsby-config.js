/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              debug: false,
              theme: 'dark',
              align: 'center',
              linkColor: '#ebe306'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Special Elite`
           // variants: [`400`, `700`]
          },
          {
            family: `Courier Prime`
            // variants: ['700']
          //  subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-164743872-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Join the Army`,
        short_name: `Fart.Army`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7d7803`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode',
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
