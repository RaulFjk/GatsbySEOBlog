import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import { GatsbyImage } from "gatsby-plugin-image"

const BigPost = ({
  id,
  title,
  authorFirstName,
  authorLastName,
  authorAvatar,
  content,
  category,
  posted,
  imageUrl,
  image,
}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="rounded w-full p-4 lg:p-0 border-b-2 border-gray-50 flex flex-col md:flex-row mb-10">
      <div className="cursor-pointer md:w-1/3">
        {image ? (
          <Link  to={`/article/${id}`} aria-current="location">
            <GatsbyImage
              image={image}
              alt="post cover"
              className="block lg:block z-0 rounded-md md:h-full md:w-72"
            />{" "}
          </Link>
        ) : (
          <Link  to={`/article/${id}`} aria-current="location">
            <img
              src={imageUrl}
              alt="post cover"
              className="block lg:block rounded-md w-full h-64 md:h-full lg:w-72 px-4 md:px-0 md:m-0"
            />
          </Link>
        )}
      </div>
      <div className="bg-white lg:m-0 rounded md:w-2/3 ml-3 md:ml-20 lg:ml-0">
        <Link
          to={`/article/${id}`}
          className="md:mt-0 text-gray-800 font-semibold text-xl mb-1 hover:text-yellow-500"
          aria-current="location"
        >
          {title}
        </Link>
        <div className="flex items-center mt-1">
          <span className="text-yellow-700 text-base hidden md:block">
            {capitalizeFirstLetter(category)}
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
        <p className="block line-clamp-5 break normal md:pt-3 md:p-2 md:pl-0 md:h-44 md:text-sm text-gray-600 max-w-xl max-h-28 ">
          {content}
        </p>
      </div>
    </div>
  )
}

export default BigPost
