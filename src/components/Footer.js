import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto text-yellow-500 flex flex-wrap justify-left font-mono">
      <Link className="p-4 text-yellow-500" to="/about">
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
          <span className="ml-1">About us</span>
        </div>
      </Link>
      <Link className="p-4 text-yellow-500" to="/contact">
        <div className="flex items-center">
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="ml-1"> Contact us </span>
        </div>
      </Link>
    </div>
  )
}

export default Footer
