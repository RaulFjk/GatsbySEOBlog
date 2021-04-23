import React from "react"
import { Link } from "gatsby"
import FeaturedSection from "../components/FeaturedSection"
import LatestNewsSection from "../components/LatestNewsSection"

const HomePageTemplate = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <FeaturedSection />
      <div className="w-full border-b-2 border-gray-100 mt-10" />
      <LatestNewsSection />
    </div>
  )
}

export default HomePageTemplate
