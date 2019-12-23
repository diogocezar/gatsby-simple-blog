import React from 'react'
import { graphql } from 'gatsby'
import SEO from "@components/SEO"
import * as S from "./styles"

export const Posts = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title}/>
      <S.Title>{frontmatter.title}</S.Title>
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

export default Posts