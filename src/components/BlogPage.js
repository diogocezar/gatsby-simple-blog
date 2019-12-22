import React from 'react'
import { graphql } from 'gatsby'

export const Blog = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <div
      dangerouslySetInnerHTML={{ __html: html }}
      />
      <a href="/">Voltar</a>
    </>
  )
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      date(formatString: "DD/MM/YYYY")
      title
    }
  }
}
`

export default Blog