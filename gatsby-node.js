const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

const getQuery = (context) => (`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {fileAbsolutePath: {regex: "/(${context}).*.md$/"}}
    ){
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

const create = async (actions, graphql, context, component) => {
  const query = getQuery(context)
  const { data } = await graphql(query)
  data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.frontmatter
    actions.createPage({
      path: `/${context}/${slug}`,
      component: path.resolve(`src/${component}`),
      context: { slug },
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await create(actions, graphql, 'posts', 'templates/Blog/Posts/index.js')
  await create(actions, graphql, 'pages', 'templates/Pages/Default/index.js')
}