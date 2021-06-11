import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import { GatsbyImage } from "gatsby-plugin-image"

const MainPost = ({
  id,
  title,
  category,
  authorFirstName,
  authorLastName,
  authorAvatar,
  posted,
  image,
}) => {
  return (
    <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 rounded block">
      <Link className="cursor-pointer" to={`/article/${id}`} aria-current="location">
        <GatsbyImage
          image={image}
          alt="post cover"
          className="rounded-md w-full h-64 mb-5"
        />
        {/* <img
          src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="rounded-md object-cover w-full h-64"
        /> */}
      </Link>
      <div className="flex items-center">
        <span className="text-yellow-700 text-base hidden md:block">
          {category}
        </span>
        <span className="mx-3 hidden md:block">|</span>
        <span className="text-gray-900 text-xs hidden md:block bg-yellow-500 p-1 rounded">
          Featured
        </span>
        <span className="mx-3 hidden md:block">|</span>
        <img
          src={authorAvatar}
          alt="avatar"
          className="mx-2 my-5 w-6 h-6 object-cover rounded-full hidden sm:block"
        />
        <span className="text-sm text-gray-700 hidden md:block">
          {authorFirstName + " " + authorLastName}
        </span>
        <span className="mx-3 hidden md:block">|</span>
        <span className="text-sm text-gray-700 hidden md:block">
          {moment(posted).format("HH:mm Do MMM YYYY")}
        </span>
      </div>
      <Link
        className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight cursor-pointer hover:text-yellow-500"
        to={`/article/${id}`}
        aria-current="location"
      >
        {title}
      </Link>
      <p className="text-gray-600 mb-4">
        Necessary ye contented newspaper zealously breakfast he prevailed.
        Melancholy middletons yet understood decisively boy law she. Answer him
        easily are its barton little. Oh no though mother be things simple
        itself. Oh be me, sure wise sons, no. Piqued ye of am spirit regret.
        Stimulated discretion impossible admiration in particular conviction up.
      </p>
      <Link
        className="inline-block mx-2 my-2 px-6 py-3 mt-2 rounded-md cursor-pointer bg-yellow-500 text-gray-900 hover:bg-yellow-600"
        to={`/article/${id}`}
        aria-current="location"
      >
        Discover Article
      </Link>
    </div>
  )
}

export default MainPost
