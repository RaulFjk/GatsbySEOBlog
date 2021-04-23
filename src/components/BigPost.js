import React from "react"

import { Link } from "gatsby"

const BigPost = () => {
  return (
    <div className="rounded w-full border-b-2 border-gray-100 flex flex-col md:flex-row mb-10 ">
      <Link className="cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
          className="block md:hidden lg:block rounded-md h-64 md:h-44 m-4 md:m-0"
        />
      </Link>
      <div className="bg-white rounded px-4">
        <Link className="md:mt-0 text-gray-800 font-semibold text-xl mb-1  hover:text-yellow-500">
          At every tiled on ye defer do. No attention suspected oh difficult.
        </Link>
        <p className="block line-clamp-5 break normal pt-3 p-2 pl-0 h-44 text-sm text-gray-600 max-w-xl max-h-28 ">
          Necessary ye contented newspaper zealously breakfast he prevailed.
          Melancholy middletons yet understood decisively boy law sssshe. Answer
          him easily are its barton little. Oh no though mother be things simple
          itself. Oh be me, sure wise sons, no. Piqued ye of am spirit regret.
          Stimulated discretion impossible admiration in particular conviction
          up. Melancholy middletons yet understood decisively boy law she.
          Answer him easily are its barton little. Oh no though mother be things
          simple itself. Oh be me, sure wise sons, no. Piqued ye of am spirit
          regret. Stimulated discretion impossible admiration in particular
          conviction up. Melancholy middletons yet understood decisively boy law
          she. Answer him easily are its barton little. Oh no though mother be
          things simple itself. Oh be me, sure wise sons, no. Piqued ye of am
          spirit regret. Stimulated discretion impossible admiration in
          particular conviction up. easily are its barton little. Oh no though
          mother be things simple itself. Oh be me, sure wise sons, no. Piqued
          ye of am spirit regret.
        </p>
      </div>
    </div>
  )
}

export default BigPost
