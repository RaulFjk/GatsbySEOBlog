import React from "react"
import { graphql } from "gatsby"
import PostPageTemplate from "../templates/postPageTemplate"
import Layout from "../components/layout"

const BitcoinPage = (props) => {
  return (
    <Layout>
      <PostPageTemplate articles={props.data} category="Bitcoin" />
    </Layout>
  )
}

export const query = graphql`
{
  allArticle(filter: {category: {eq: "bitcoin"}}) {
    edges {
      node {
        author
        id
        title
        content
        category
      }
    }
  }
}`

export default BitcoinPage
