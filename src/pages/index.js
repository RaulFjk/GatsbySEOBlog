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
      <HomePageTemplate />
      {/* <PostTemplate /> */}
    </section>
  )
}
export default IndexPage
