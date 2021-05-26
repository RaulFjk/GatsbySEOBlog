import React from "react"
import MainPost from "./MainPost"
import SmallPost from "./SmallPost"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedSection = props => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const data = useStaticQuery(graphql`
    query MyQuery {
      allArticle(limit: 4, filter: { featured: { eq: true } }) {
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
    }
  `)
  let mainPost = data.allArticle.edges[0]
  let category = capitalizeFirstLetter(mainPost.node.category)

  let filteredList = [...data.allArticle.edges]
  filteredList.splice(0, 1)

  return (
    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mt-24">
      <MainPost
        id={mainPost.node.id}
        title={mainPost.node.title}
        category={category}
        authorFirstName={mainPost.node.author.firstName}
        authorLastName={mainPost.node.author.lastName}
        authorAvatar={mainPost.node.author.avatar}
        posted={mainPost.node.posted}
        image={mainPost.node.localImage.childImageSharp.gatsbyImageData}
      />
      <div className="w-full md:w-4/7">
        {filteredList.map(e => (
          <SmallPost
            id={e.node.id}
            key={e.node.id}
            title={e.node.title}
            category={capitalizeFirstLetter(e.node.category)}
            image={e.node.localImage.childImageSharp.gatsbyImageData}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedSection
