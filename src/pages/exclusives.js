import React from "react"
import { graphql } from "gatsby"

import PostPageTemplate from "../templates/postPageTemplate"
import Layout from "../components/layout"

const ExclusivesPage = (props) => {
  return (
    <Layout>
      <PostPageTemplate articles={props.data} category="Exclusives" />
    </Layout>
  )
}

export const query = graphql`{
  allArticle(filter: {category: {eq: "exclusives"}}) {
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

export default ExclusivesPage
