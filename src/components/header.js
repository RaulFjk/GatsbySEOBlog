import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({toggle}) => {
  return (
    <nav className="fixed w-full flex justify-between mb-12 items-center h-16 bg-white text-black
     shadow-lg font-mono" role="navigation"> 
      <Link to="/" className="pl-8">
        Krypto Life
      </Link>
      <div className="px-4 cursor-pointer md:hidden"
      onClick={toggle}>
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
      <div className="pr-8 md:block hidden">
        <Link className="p-4 hover:underline hover:text-yellow-500 " to='/'>Home</Link>
        <Link className="p-4 hover:underline hover:text-yellow-500" to='/exclusives'>Exclusives</Link>
        <Link className="p-4 hover:underline hover:text-yellow-500" to='/nft'>NFT</Link>
        <Link className="p-4 hover:underline hover:text-yellow-500" to='/bitcoin'>Bitcoin</Link>
        <Link className="p-4 hover:underline hover:text-yellow-500" to='/altcoin'>Altcoins</Link>
        <Link className="bg-yellow-500 text-white px-4 py-2 rounded  hover:bg-yellow-600 mx-2 hover:text-gray-100" to='/signin'>Sign In</Link>
      </div>
    </nav>
  )
}

export default Header
