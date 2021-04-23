import React from "react"
import MainPost from "./MainPost"
import SmallPost from "./SmallPost"

const FeaturedSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mt-24">
        <MainPost />
        <SmallPost />
    </div>
  )
}

export default FeaturedSection
