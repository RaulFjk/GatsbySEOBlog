import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import  Helmet  from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageTemplate from "../templates/homePageTemplate"
import PostTemplate from "../templates/postTemplate"

const IndexPage = () => {
  return (
    <section>
      <Helmet>
        <html lang="en" />
        <title>Google</title>
        <meta
          name="google-site-verification"
          content="96Jn-meJ8QUTjUvtxgo9HoyP7iPLjlKKipVvRFAv_D4"
          data-react-helmet="true"
        />
      </Helmet>
      <HomePageTemplate />
      {/* <PostTemplate /> */}
    </section>
  )
}
export default IndexPage
