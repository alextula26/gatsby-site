module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    title: "Gatsby Site 1111",
    description: "First Gatsby site"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/my-cool-sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`,
      }
    }, 
  ],
};
