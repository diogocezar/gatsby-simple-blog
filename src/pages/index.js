import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts }
  } = data;


  return (
      <div className="index__posts">
        <ul>
        {posts.map(post => (
          <li>
            <h2>{post.node.frontmatter.title}</h2>
            <h3>{post.node.frontmatter.date}</h3>
            <a href={`/posts/${post.node.frontmatter.slug}`}>{post.node.frontmatter.slug}</a>
          </li>
        ))}
        </ul>
      </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;