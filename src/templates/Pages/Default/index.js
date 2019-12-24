import React from 'react'
import { graphql } from 'gatsby'
import SEO from "@components/SEO"

export const Default = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title}/>
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
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      date(formatString: "DD/MM/YYYY")
      title
    }
  }
}
`

export default Default