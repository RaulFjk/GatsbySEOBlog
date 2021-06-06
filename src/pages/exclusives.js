import React from "react"
import { graphql } from "gatsby"
import PostPageTemplate from "../templates/postPageTemplate"


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

export default ExclusivesPage
