import React, { useContext } from "react"
import { Link } from "gatsby"
import FeaturedSection from "../components/FeaturedSection"
import LatestNewsSection from "../components/LatestNewsSection"
import { FirebaseContext } from "../components/Firebase"
import { Helmet } from "react-helmet"

const HomePageTemplate = () => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <section className="App max-w-screen-lg mx-auto">
      <FeaturedSection />
      <div className="w-full border-b-2 border-gray-100 mt-10" />
      {!!firebase && <LatestNewsSection firebase={firebase} />}
    </section>
  )
}

export default HomePageTemplate
