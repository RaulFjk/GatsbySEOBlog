import React from "react"

import { Link } from "gatsby"

const MainPost = ({title, category}) => {
  return (
    <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 rounded block">
      <Link className="cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="rounded-md object-cover w-full h-64"
        />
      </Link>
      <div className="flex items-center">
        <span className="text-yellow-600 text-sm hidden md:block mr-6 ">
          {category}
        </span>
        <span className="text-gray-600 text-xs hidden md:block bg-yellow-500 p-1 rounded">
          Featured
        </span>
      </div>
      <Link className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight cursor-pointer hover:text-yellow-500">
        {title}
      </Link>
      <p className="text-gray-600 mb-4">
        Necessary ye contented newspaper zealously breakfast he prevailed.
        Melancholy middletons yet understood decisively boy law she. Answer him
        easily are its barton little. Oh no though mother be things simple
        itself. Oh be me, sure wise sons, no. Piqued ye of am spirit regret.
        Stimulated discretion impossible admiration in particular conviction up.
      </p>
      <Link className="inline-block mx-2 my-2 px-6 py-3 mt-2 rounded-md cursor-pointer bg-yellow-500 text-gray-100 hover:bg-yellow-600">
        Read more
      </Link>
    </div>
  )
}

export default MainPost
