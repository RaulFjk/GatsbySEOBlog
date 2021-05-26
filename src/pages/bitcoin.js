import React from "react"
import { graphql } from "gatsby"
import PostPageTemplate from "../templates/postPageTemplate"
import Layout from "../components/layout"

const BitcoinPage = (props) => {
  return (
    <section>
      <PostPageTemplate articles={props.data} category="Bitcoin" />
    </section>
  )
}

export const query = graphql`
{
  allArticle(filter: {category: {eq: "bitcoin"}}) {
    edges {
      node {
        author {
          firstName
          lastName
          avatar
          localImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
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

export default BitcoinPage
