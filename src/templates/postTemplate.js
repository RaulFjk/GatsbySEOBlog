import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import PostItem from "../components/PostItem"

const PostTemplate = props => {
  return (
    <section>
      <section className="max-w-screen-lg mx-auto">
        <PostItem
          title={props.data.article.title}
          content={props.data.article.content}
          category={props.data.article.category}
          authorFirstName={props.data.article.author.firstName}
          authorLastName={props.data.article.author.lastName}
          image= {props.data.article.localImage.childImageSharp.gatsbyImageData}
        />
      </section>
    </section>
  )
}

export const query = graphql`
  query ArticlesQuery($articleId: String!) {
    article(id: { eq: $articleId }) {
      author {
        firstName
        lastName
      }
      category
      content
      title
      localImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default PostTemplate
