import React from "react"
import { Link } from "gatsby"

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-8 text-center items-center bg-yellow-500 font-mono mt-16 "
          : 'hidden'
      }
    >
      <Link className="p-4  hover:bg-yellow-600 " to="/">
        Home
      </Link>
      <Link className="p-4 hover:bg-yellow-600 " to="/exclusives">
        Exclusives
      </Link>
      <Link className="p-4 hover:bg-yellow-600 " to="/nft">
        NFT
      </Link>
      <Link className="p-4 hover:bg-yellow-600 " to="/bitcoin">
        Bitcoin
      </Link>
      <Link className="p-4 hover:bg-yellow-600 " to="/altcoin">
        Altcoins
      </Link>
      <Link className="p-4 hover:bg-yellow-600 " to="/manage">
        Manage Content
      </Link>
      <Link className="p-4 hover:bg-yellow-600 " to="/signin">
        Sign In
      </Link>
    </div>
  )
}

export default Dropdown
