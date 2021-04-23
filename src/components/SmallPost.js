import React from "react"

import { Link } from "gatsby"

const SmallPost = () => {
  return (
    <div class="w-full md:w-4/7">
      <div className="rounded border-b-2 border-gray-100 w-full flex flex-col md:flex-row mb-10">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
        />
        <div className="bg-white rounded px-4">
          <div className="flex items-center">
            <span className="text-yellow-600 text-sm hidden md:block mr-6">
              {" "}
              Gadgets{" "}
            </span>
            <span className="text-gray-600 text-sm hidden md:block bg-yellow-500 p-1 rounded">
              Featured
            </span>
          </div>
          <div className="mb-2">
            <Link className="md:mt-0 text-gray-800 font-semibold text-xl cursor-pointer hover:text-yellow-500">
              At every tiled on ye defer do. No attention suspected oh
              difficult.
            </Link>
          </div>
          <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Wonder matter now can estate esteem assure fat roused. Am performed
            on existence as discourse is. Pleasure friendly at marriage blessing
            or
          </p>
        </div>
      </div>

      <div className="rounded border-b-2 border-gray-100 w-full flex flex-col md:flex-row mb-10">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
        />
        <div className="bg-white rounded px-4">
          <span className="text-yellow-600 text-sm hidden md:block">
            {" "}
            Gadgets{" "}
          </span>
          <div className="mb-2">
            <Link className="md:mt-0 text-gray-800 font-semibold text-xl cursor-pointer hover:text-yellow-500">
              At every tiled on ye defer do. No attention suspected oh
              difficult.
            </Link>
          </div>
          <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
            Wonder matter now can estate esteem assure fat roused. Am performed
            on existence as discourse is. Pleasure friendly at marriage blessing
            or
          </p>
        </div>
      </div>

      <div className="rounded border-b-2 border-gray-100 w-full flex flex-col md:flex-row mb-10">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
        />
        <div className="bg-white rounded px-4">
          <span className="text-yellow-600 text-sm hidden md:block">
            {" "}
            Gadgets{" "}
          </span>
          <div className="mb-2">
            <Link className="md:mt-0 text-gray-800 font-semibold text-xl">
              At every tiled on ye defer do. No attention suspected oh
              difficult.
            </Link>
          </div>
          <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
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
