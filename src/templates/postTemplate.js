import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostItem from "../components/PostItem"
import Seo from "../components/seo"

const PostTemplate = props => {
  return (
    <section className="max-w-screen-lg mx-auto">
       <Seo title={props.data.article.title} description={props.data.article.description} />
      <PostItem
        title={props.data.article.title}
        content={props.data.article.content}
        category={props.data.article.category}
        authorFirstName={props.data.article.author.firstName}
        authorLastName={props.data.article.author.lastName}
        authorAvatar={
          props.data.article.author.localImage.childImageSharp.gatsbyImageData
        }
        image={props.data.article.localImage.childImageSharp.gatsbyImageData}
        posted={props.data.article.posted}
      />
    </section>
  )
}

export const query = graphql`
  query ArticlesQuery($articleId: String!) {
    article(id: { eq: $articleId }) {
      author {
        firstName
        lastName
        localImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      category
      content
      description
      title
      posted
      localImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default PostTemplate
