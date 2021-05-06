/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FirebaseContext, useAuth } from "./Firebase"

import Header from "./header"
import "./layout.css"
import Dropdowm from "./Dropdown"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })

  return (
    <>
      <FirebaseContext.Provider value={{user, firebase, loading}}>
        <Header toggle={toggle} />
        <div>
          <main className="overflow-hidden block items-center justify-center ">
            <Dropdowm isOpen={isOpen} toggle={toggle} />
            {children}
          </main>
          <footer className="bg-gray-800 p-10 sm:mt-10">
            <Footer />
          </footer>
        </div>
      </FirebaseContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
