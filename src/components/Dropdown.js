import React from "react"
import { Link } from "gatsby"

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500 font-mono"
          : 'hidden'
      }
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/exclusives">
        Exclusives
      </Link>
      <Link className="p-4" to="/nft">
        NFT
      </Link>
      <Link className="p-4" to="/bitcoin">
        Bitcoin
      </Link>
      <Link className="p-4" to="/altcoin">
        Altcoins
      </Link>
    </div>
  )
}

export default Dropdown
