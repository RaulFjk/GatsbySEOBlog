import React from "react"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SmallPost = ({ id, title, category, image }) => {
  return (
    <div className="w-full md:w-4/7">
      <div className="rounded border-b-2 border-gray-50 w-full flex flex-col md:flex-row mb-10 p-4 lg:p-0">
        <div>
          <GatsbyImage
            image={image}
            alt="post cover"
            className="md:hidden lg:block rounded-md w-full h-64 md:w-44 md:h-32 md:m-0"
          />{" "}
        </div>
        {/* <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
        /> */}
        <div className="bg-white rounded px-4 md:w-2/3">
          <div className="flex items-center">
            <span className="text-yellow-600 text-sm hidden md:block">
              {category}
            </span>
            <span className="mx-3 hidden md:block">|</span>
            <span className="text-gray-600 text-xs hidden md:block bg-yellow-500 p-1 rounded">
              Featured
            </span>
          </div>
          <div>
            <Link
              className="md:mt-0 line-clamp-3 text-gray-800 font-semibold text-xl cursor-pointer hover:text-yellow-500"
              to={`/article/${id}`}
            >
              {title}
            </Link>
          </div>
          <p className="block  break normal md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Wonder matter now can estate esteem assure fat roused. Am performed
            on existence as discourse is. Pleasure friendly at marriage blessing
            or
          </p>
        </div>
      </div>
    </div>
  )
}

export default SmallPost
