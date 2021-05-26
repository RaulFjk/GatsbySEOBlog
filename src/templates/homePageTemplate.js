import React, { useContext } from "react"
import { Link } from "gatsby"
import FeaturedSection from "../components/FeaturedSection"
import LatestNewsSection from "../components/LatestNewsSection"
import { FirebaseContext } from "../components/Firebase"
import { Helmet } from "react-helmet"

const HomePageTemplate = () => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <div className="max-w-screen-lg mx-auto">
      <Helmet>
        <html lang="en" />
        <title>Google</title>
        <meta
          name="google-site-verification"
          content="96Jn-meJ8QUTjUvtxgo9HoyP7iPLjlKKipVvRFAv_D4"
        />
      </Helmet>
      <FeaturedSection />
      <div className="w-full border-b-2 border-gray-100 mt-10" />
      {!!firebase && <LatestNewsSection firebase={firebase} />}
    </div>
  )
}

export default HomePageTemplate
