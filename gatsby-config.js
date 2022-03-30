module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "haynes-greenhouse-2022",
    },
    plugins: [
        "gatsby-plugin-emotion",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "267445565",
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/page`,
                name: `page`,
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                start_url: `/`,
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                });
                            });
                        },
                        query: `
                    {
                      allMarkdownRemark(
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        nodes {
                          fields {
                            slug
                          }
                          frontmatter {
                            title
                            date
                          }
                        }
                      }
                    }
                  `,
                        output: "/rss.xml",
                        title: "Gatsby Starter Blog RSS Feed",
                    },
                ],
            },
        },
    ],
};
