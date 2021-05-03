import React from "react"

import PostSection from "../components/PostSection"

const PostPageTemplate = ({articles, category}) => {
  return (
    <div className="mt-24 max-w-screen-lg mx-auto">
      <div className="flex mb-4 space-x-0 ml-5 md:ml-0" >
        <span className="mr-2 text-lg font-bold font-mono">Category:</span>
        <span className="text-lg font-mono text-yellow-500">{category}</span>
      </div>
      <PostSection articles={articles} />
    </div>
  )
}

export default PostPageTemplate
