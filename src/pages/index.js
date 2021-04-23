import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageTemplate from "../templates/homePageTemplate"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <HomePageTemplate />
    </Layout>
  )
}
export default IndexPage
