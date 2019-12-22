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
      component: path.resolve(`src/components/${component}.js`),
      context: { slug },
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await create(actions, graphql, 'posts', 'BlogPost')
  await create(actions, graphql, 'pages', 'BlogPage')
}