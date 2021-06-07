import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import ArticlesTable from "../components/ArticlesTable"
import { FirebaseContext } from "../components/Firebase"
import Seo from "../components/seo"

const ManageContent = () => {
  const { firebase, user } = useContext(FirebaseContext)
  const [filter, setFilter] = useState("")
  const [categories, setCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    if (firebase) {
      firebase.getCategories().then(snapshot => {
        const availableCategories = []
        snapshot.forEach(doc => {
          availableCategories.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        setCategoryName(availableCategories[0].name)
        setCategories(availableCategories)
      })
    }
  }, [firebase])

  if (!user) {
    return null
  }

  return (
    <div className="mt-24 flex-1 max-h-full mx-auto p-5 overflow-hidden">
      <Seo title="Manage Content" />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-3 mt-2 p-3">
            <span className="font-mono">Category</span>{" "}
          </div>
          <select
            className="border-2 pr-10 rounded w-full font-mono p-3 lg:py-2 mt-2 bg-gray-200 focus:bg-gray-300 text-gray-700 focus:outline-none"
            onChange={e => {
              e.persist()
              setFilter(e.target.value)
              setCategoryName(e.target.value)
            }}
          >
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {capitalizeFirstLetter(category.name)}
              </option>
            ))}
          </select>
        </div>
        <Link
          className="lg:bg-yellow-500 font-mono lg:text-white flex text-xs p-3 lg:text-base lg:px-4 lg:py-2 rounded  hover:bg-yellow-600 mx-2 hover:text-gray-100"
          to="/add-article"
        >
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>New Article</span>
        </Link>
      </div>
      {categories.length > 0 && (
        <ArticlesTable category={categoryName} firebase={firebase} />
      )}
    </div>
  )
}

export default ManageContent
