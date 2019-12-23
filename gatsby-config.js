module.exports = {
  siteMetadata: {
    title: `John Doe`,
    position: `Backend Developer`,
    description: `A blog about backend development and other cool stuff.`,
    author: `@myblog`,
    siteUrl: `https://gatsby-course-will.netlify.com`,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@templates": "src/templates",
        },
        extensions: ["js"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/pages`
      }
    }
  ]
}
