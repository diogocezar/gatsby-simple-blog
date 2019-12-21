const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.frontmatter
    actions.createPage({
      path: `/posts/${slug}`,
      component: path.resolve('src/components/BlogPost.js'),
      context: { slug },
    })
  })
}