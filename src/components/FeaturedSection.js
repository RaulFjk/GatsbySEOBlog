import React from "react"
import MainPost from "./MainPost"
import SmallPost from "./SmallPost"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedSection = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const data = useStaticQuery(graphql`
    query MyQuery {
      allArticle(limit: 4, filter: { featured: { eq: true } }) {
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
`)
let mainPost = data.allArticle.edges[0];
let category = capitalizeFirstLetter(mainPost.node.category)

let filteredList = [...data.allArticle.edges];
console.log(filteredList);
filteredList.splice(0,1);
console.log(data.allArticle.edges);

  return (
    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mt-24">
      <MainPost title={mainPost.node.title} category={category} />
      <div class="w-full md:w-4/7">
        {filteredList.map(e => (
          <SmallPost title={e.node.title} category={capitalizeFirstLetter(e.node.category)} />
        ))}
       
      </div>
    </div>
  )
}


export default FeaturedSection
