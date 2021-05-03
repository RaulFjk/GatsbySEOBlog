import React from "react"
import { graphql } from 'gatsby'
import PostPageTemplate from "../templates/postPageTemplate"
import Layout from "../components/layout"

const AltcoinPage = (props) => {
  return (
    <Layout>
      <PostPageTemplate articles={props.data} category="Altcoins" />
    </Layout>
  )
}

export const query = graphql`{
  allArticle(filter: {category: {eq: "altcoin"}}) {
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

export default AltcoinPage
