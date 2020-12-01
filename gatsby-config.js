module.exports = {
  siteMetadata: {
    title: `Shenendoah Thompson`,
    description: `Sandwiches are nice; music drowns out the sound of chewing.`,
    author: `David Elster | GitHub: @delster | Twitter: @delsterdev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    // {
    //   resolve: 'gatsby-plugin-tinacms',
    //   options: {
    //     sidebar: {
    //       hidden: process.env.NODE_ENV === 'production',
    //       position: 'displace'
    //     },
    //     plugins: ['gatsby-tinacms-git', 'gatsby-tinacms-remark']
    //   }
    // },
    {
      resolve: `gatsby-plugin-facebook-sdk`,
      options: {
        appId: '591234181354818',
        status: true,
        xfbml: true,
        version: 'v2.7'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shenendoah Thompson`,
        short_name: `shenendoah`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/img/website-icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
}