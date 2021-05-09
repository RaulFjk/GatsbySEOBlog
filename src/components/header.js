import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FirebaseContext } from "./Firebase"

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
      <Link to="/" className="pl-8">
        Krypto Life
      </Link>
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
      <div className="pr-8 text-xs lg:text-base md:block hidden">
        <Link className="p-4 hover:underline hover:text-yellow-500 " to="/">
          Home
        </Link>
        <Link
          className="p-4 text-xs lg:text-base hover:underline hover:text-yellow-500"
          to="/exclusives"
        >
          Exclusives
        </Link>
        <Link className="p-4 text-xs lg:text-base hover:underline hover:text-yellow-500" to="/nft">
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
            className="lg:bg-yellow-500 lg:text-white text-xs lg:text-base px-4 py-2 rounded  hover:bg-yellow-600 mx-2 hover:text-gray-100"
            to="/login"
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
            className="lg:bg-yellow-500 lg:text-white text-xs lg:text-base px-2 lg:px-4 py-2 rounded  hover:bg-yellow-600 mx-2 hover:text-gray-100"
            onClick={handleLogOutClick}
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  )
}

export default Header
