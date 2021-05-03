import React from "react"

import BigPost from "./BigPost"

const PostSection = ({ articles }) => {
  if (articles) {
    return (
      <div>
        {articles.allArticle.edges.map( edge => (
          <BigPost
            title={edge.node.title}
            author={edge.node.author}
            content={edge.node.content}
            category={edge.node.category}
          />
        ) ) }
      </div>
    )
  } else {
    return <div>Loading articles...</div>
  }
}

export default PostSection
