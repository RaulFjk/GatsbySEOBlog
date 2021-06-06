import React from "react"
import { graphql } from 'gatsby'
import PostPageTemplate from "../templates/postPageTemplate"

const NftPage = (props) => {
  return (
    <section>
      <PostPageTemplate articles={props.data} category="NFTs" />
    </section>
  )
}

export const query = graphql`{
  allArticle(filter: {category: {eq: "nft"}}) {
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

export default NftPage
