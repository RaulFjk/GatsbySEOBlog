import React, { useContext } from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { FirebaseContext } from "./Firebase"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ toggle }) => {
  const { firebase, user } = useContext(FirebaseContext)

  function handleLogOutClick() {
    firebase.logout()
  }
  return (
    <nav
      className="fixed w-full flex justify-between mb-12 items-center h-16 bg-white text-black
     shadow-lg font-mono z-20"
      role="navigation"
    >
      <div className="flex items-center">
        <StaticImage
          className="hidden lg:inline w-16 h-16"
          src="../images/krypto-life-logo.png"
          alt="logo"
          placeholder="blurred"
        />
        <Link to="/" className="ml-2">
          Krypto Life
        </Link>
      </div>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 text-xs lg:text-base md:flex hidden items-center">
        <Link className="p-4 hover:underline hover:text-yellow-500 " to="/">
          Home
        </Link>
        <Link
          className="p-4 text-xs lg:text-base hover:underline hover:text-yellow-500"
          to="/exclusives"
        >
          Exclusives
        </Link>
        <Link
          className="p-4 text-xs lg:text-base hover:underline hover:text-yellow-500"
          to="/nft"
        >
          NFT
        </Link>
        <Link
          className="p-4 text-xs lg:text-base hover:underline hover:text-yellow-500"
          to="/bitcoin"
        >
          Bitcoin
        </Link>
        <Link
          className="p-4 text-xs lg:text-base hover:underline hover:text-yellow-500"
          to="/altcoin"
        >
          Altcoins
        </Link>
        {user && (
          <Link
            className="lg:bg-yellow-500 lg:text-white text-xs p-3 lg:text-base lg:px-4 lg:py-2 rounded  hover:bg-yellow-600 mx-2 hover:text-gray-100"
            to="/manage-content"
          >
            Manage Content
          </Link>
        )}
        {!user && (
          <Link
            className="lg:bg-yellow-500 lg:text-white text-xs p-3 lg:text-base lg:px-4 lg:py-2 rounded  hover:bg-yellow-600 mx-2 hover:text-gray-100"
            to="/login"
          >
            Sign In
          </Link>
        )}
        {user && (
          <button
            className="lg:bg-yellow-500 lg:text-white text-xs lg:text-base px-2 lg:px-4 py-2 rounded hover:bg-yellow-600 mx-2 hover:text-gray-100"
            onClick={handleLogOutClick}
          >
            Sign Out
          </button>
        )}
        {user && (
          <div className="rounded-full text-lg bg-gradient-to-r hidden lg:inline from-yellow-300 to-yellow-700 ... p-2 mr-4 ml-2 text-center cursor-pointer focus:outline-none h-11 w-11">
            <span>RD</span>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
