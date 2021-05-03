import React from "react"
import MainPost from "./MainPost"
import SmallPost from "./SmallPost"
import { graphql } from "gatsby"

const FeaturedSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mt-24">
      <MainPost />
      <div class="w-full md:w-4/7">
        <SmallPost />
        <SmallPost />
        <SmallPost />
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allArticle(filter: { featured: { eq: true } }) {
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
  }
`

export default FeaturedSection
