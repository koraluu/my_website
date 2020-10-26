import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.5rem 1.0875rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const MarkerHeader = styled.h3`
  display: inline;
  background-image: linear-gradient(
    -100deg,
    rgba(206, 147, 221, 0.15),
    rgba(206, 147, 221, 0.8) 100%,
    rgba(206, 147, 221, 0.25)
  );
`
const MarkerHeader2 = styled.h2`
  display: inline;
  background-image: linear-gradient(
    -100deg,
    rgba(206, 147, 221, 0.15),
    rgba(206, 147, 221, 0.8) 100%,
    rgba(206, 147, 221, 0.25)
  );
`
const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1>About Me</h1>
        <MarkerHeader>I am really Kora</MarkerHeader>
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
