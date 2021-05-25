import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto text-yellow-500 flex flex-wrap justify-left font-mono">
      <Link className="p-4 text-yellow-500" to="/about-me">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-1">About me</span>
        </div>
      </Link>
    </div>
  )
}

export default Footer
