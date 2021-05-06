import React from "react"

import { Link } from "gatsby"

const BigPost = ({title, author, content, category}) => {
  return (
    <div className="rounded w-full p-4 lg:p-0 border-b-2 border-gray-50 flex flex-col md:flex-row mb-10">
      <div className="cursor-pointer md:w-1/3">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="block lg:block rounded-md h-64 md:h-full md:w-60 px-4 md:px-0 md:m-0"
        />
      </div>
      <div className="bg-white rounded md:w-2/3">
        <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-1 hover:text-yellow-500">
          {title}
        </div>
        <p className="block line-clamp-5 break normal md:pt-3 md:p-2 md:pl-0 md:h-44 md:text-sm text-gray-600 max-w-xl max-h-28 ">
         {content}
        </p>
      </div>
    </div>
  )
}

export default BigPost
