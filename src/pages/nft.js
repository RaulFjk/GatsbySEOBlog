import React from "react"
import { graphql } from 'gatsby'

import PostPageTemplate from "../templates/postPageTemplate"
import Layout from "../components/layout"

const NftPage = (props) => {
  return (
    <Layout>
      <PostPageTemplate articles={props.data} category="NFTs" />
    </Layout>
  )
}

export const query = graphql`{
  allArticle(filter: {category: {eq: "nft"}}) {
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

export default NftPage
