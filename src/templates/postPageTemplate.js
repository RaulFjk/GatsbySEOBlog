import React from "react"

import PostSection from "../components/PostSection"

const PostPageTemplate = () => {
  return (
    <div className="mt-24 max-w-screen-lg mx-auto">
      <div className="flex mb-4">
        <span className="mr-2 text-lg font-bold font-mono">Category:</span>
        <span className="text-lg font-mono text-yellow-500">Exclusives</span>
      </div>
      <PostSection />
    </div>
  )
}

export default PostPageTemplate
