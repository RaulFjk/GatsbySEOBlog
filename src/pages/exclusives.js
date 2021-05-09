import React from "react"
import { graphql } from "gatsby"

import PostPageTemplate from "../templates/postPageTemplate"
import Layout from "../components/layout"

const ExclusivesPage = (props) => {
  return (
    <section>
      <PostPageTemplate articles={props.data} category="Exclusives" />
    </section>
  )
}

export const query = graphql`{
  allArticle(filter: {category: {eq: "exclusives"}}) {
    edges {
      node {
        author {
          firstName
          lastName
        }
        id
        title
        content
        category
        posted
        localImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}`

export default ExclusivesPage
