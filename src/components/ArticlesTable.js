import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import moment from "moment"

const ArticlesTable = ({ category, firebase }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    firebase.filterArticlesByCategory({
      category,
      onSnapshot: data => {
        const filteredArticles = []
        data.forEach(doc => {
          filteredArticles.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        setArticles(filteredArticles)
      },
    })
  }, [category])

  return (
    <div>
      <div className="flex flex-col mt-3">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow  border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y  divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className>
                    <th
                      scope="col"
                      className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <span className="px-4">Title </span>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Posted on
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {articles.length > 0 &&
                    articles.map(article => (
                      <tr className="hover:bg-gray-100" key={article.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex px-4 items-center">
                            {/* <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                alt=""
                              />
                            </div> */}
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {article.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">Raul Duma</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 rounded-full bg-yellow-500 text-white">
                            {article.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moment(article.posted.toDate()).format(
                            "HH:mm Do MMM YYYY"
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div
                            className="flex 
                                justify-end mt-4 mx-4 pt-4 border-t 
                                border-gray-300 border-solid
                                sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0"
                          >
                            <Link
                              className="flex items-center bg-gray-700  text-white pl-2 pr-5 py-2 rounded  hover:bg-blue-500 mx-2 hover:text-gray-100"
                              to={`/article/edit/${article.id}`}
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
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                              <span className="ml-2">Edit</span>
                            </Link>
                            <button 
                            className="inline-block p-3 ml-3 text-center text-white transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
                            onClick={() => {
                              firebase.deleteArticle(article.id)
                            }}>
                              <svg
                                className="w-5 h-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesTable
