import React from "react"
import BigPost from "./BigPost"

const LatestNewsSection = () => {
  return (
    <div>
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 className="font-bold text-3xl">Latest news</h2>
      </div>
      <div>
          <BigPost />
          <BigPost />
          <BigPost />
          <BigPost />
      </div>
      
    </div>
  )
}

export default LatestNewsSection
