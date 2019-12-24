import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const { pages, posts } = data
  const { edges: dataPages} = pages
  const { edges: dataPosts} = posts
  console.log(dataPages)
  return (
    <>
      <SEO title="página principal"/>
      <h1>Posts</h1>
      <ul>
      {dataPosts.map(post => (
        <li>
          <h2>{post.node.frontmatter.title}</h2>
          <h3>{post.node.frontmatter.date}</h3>
          <a href={`/posts/${post.node.fields.slug}`}>{post.node.fields.slug}</a>
        </li>
      ))}
      </ul>
      <h1>Pages</h1>
      <ul>
      {dataPages.map(page => (
        <li>
          <h2>{page.node.frontmatter.title}</h2>
          <h3>{page.node.frontmatter.date}</h3>
          <a href={`/pages/${page.node.fields.slug}`}>{page.node.fields.slug}</a>
        </li>
      ))}
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query {
    pages: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(pages).*.md$/"}}
      ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields{
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
          }
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(posts).*.md$/"}}
      ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields{
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;