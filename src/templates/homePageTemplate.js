import React, { useContext } from "react"
import FeaturedSection from "../components/FeaturedSection"
import LatestNewsSection from "../components/LatestNewsSection"
import { FirebaseContext } from "../components/Firebase"
import Seo from "../components/seo"

const HomePageTemplate = () => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <section className="App max-w-screen-lg mx-auto">
      <Seo title="Home " />
      <FeaturedSection />
      <div className="w-full border-b-2 border-gray-100 mt-10" />
      {!!firebase && <LatestNewsSection firebase={firebase} />}
    </section>
  )
}

export default HomePageTemplate
