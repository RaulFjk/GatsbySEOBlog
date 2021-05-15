import React from "react"

import BigPost from "./BigPost"

const PostSection = ({ articles }) => {
  if (articles) {
    return (
      <div>
        {articles.allArticle.edges.map(edge => (
          <BigPost
            id={edge.node.id}
            key={edge.node.id}
            title={edge.node.title}
            authorFirstName={edge.node.author.firstName}
            authorLastName={edge.node.author.lastName}
            authorAvatar={edge.node.author.localImage.childImageSharp.gatsbyImageData}
            content={edge.node.content}
            category={edge.node.category}
            posted={edge.node.posted}
            image={edge.node.localImage.childImageSharp.gatsbyImageData}
          />
        ))}
      </div>
    )
  } else {
    return <div>Loading articles...</div>
  }
}

export default PostSection
