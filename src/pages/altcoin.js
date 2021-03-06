import React from "react"
import { graphql } from 'gatsby'
import PostPageTemplate from "../templates/postPageTemplate"

const AltcoinPage = (props) => {
  return (
    <section>
      <PostPageTemplate articles={props.data} category="Altcoins" />
    </section>
  )
}

export const query = graphql`{
  allArticle(filter: {category: {eq: "altcoin"}}) {
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

export default AltcoinPage
