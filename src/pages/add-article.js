import React, { useState, useEffect, useContext } from "react"
import { FirebaseContext } from "../components/Firebase"
import { navigate } from "gatsby"

let fileReader

if (typeof window !== "undefined") {
  fileReader = new FileReader()
}

const AddArticle = () => {
  const { firebase, user } = useContext(FirebaseContext)
  const [featured, setFeatured] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [firstKeyword, setFirstKeyword] = useState("")
  const [secondKeyword, setSecondKeyword] = useState("")
  const [description, setDescription] = useState("")
  const [articleCover, setArticleCover] = useState("")
  const [categories, setCategories] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [uid, setUserId] = useState("")
  const [author, setAuthor] = useState("")
  const [added, setAdded] = useState(false)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    if (user) {
      setUserId(user.uid)
    }
  }, [user])

  useEffect(() => {
    if (uid) {
      firebase.getAdminProfile({
        uid,
        onSnapshot: r => {
          setAuthor({
            id: r.docs[0].id,
            ...r.docs[0].data(),
          })
        },
      })
    }
  }, [uid])

  useEffect(() => {
    fileReader.addEventListener("load", () => {
      setArticleCover(fileReader.result)
    })
  }, [])

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

  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .createArticle({
        title,
        firstKeyword,
        secondKeyword,
        description,
        content,
        categoryName,
        articleCover,
        featured,
        author,
      })
      .then(
        setAdded(true),
        setTimeout(() => {
          setAdded(false)
          navigate("/manage-content")
        }, 2000)
      )
      .catch(err => alert("Something went wrong! Try again"))
  }

  if (!user) {
    return null
  }

  return (
    <div className="py-12 mt-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form className="font-mono " onSubmit={handleSubmit}>
            {/* <div className="mx-auto mb-5">
              {articleCover && (
                <img
                  src={articleCover}
                  className="min-w-full h-auto"
                  alt="avatar"
                />
              )}
            </div> */}
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="title"
                  id="title"
                  value={title}
                  onChange={e => {
                    e.persist()
                    setTitle(e.target.value)
                  }}
                  required
                ></input>
              </div>
              <label className="text-xl text-gray-600">
                Article Cover <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="articleCover"
                onChange={e => {
                  e.persist()
                  fileReader.readAsDataURL(e.target.files[0])
                }}
                className="block rounded-lg w-full mt-1 px-1 text-gray-700 appearance-none mb-4 focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
              <div className="flex flex-col">
                <label className="text-xl  text-gray-600">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  className="border-2 mb-4 pr-10 w-56 rounded font-mono p-3 lg:py-2 mt-2 bg-gray-100 focus:bg-gray-300 text-gray-700 focus:outline-none"
                  onChange={e => {
                    e.persist()
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
              <div className="mb-4">
                <div className="w-48">
                  <label className="text-xl text-gray-600 ">
                    Keyword 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2"
                    name="firstKeyword"
                    id="firstKeyword"
                    value={firstKeyword}
                    onChange={e => {
                      e.persist()
                      setFirstKeyword(e.target.value)
                      console.log(firstKeyword)
                    }}
                    required
                  ></input>{" "}
                </div>
                <div className="w-48">
                  <label className="text-xl text-gray-600 ">
                    Keyword 2 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 p-2 "
                    name="secondKeyword"
                    id="secondKeyword"
                    value={secondKeyword}
                    onChange={e => {
                      e.persist()
                      setSecondKeyword(e.target.value)
                      console.log(secondKeyword)
                    }}
                    required
                  ></input>{" "}
                </div>
              </div>
              <div className="mb-8">
                <label className="text-xl text-gray-600">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="border-2 border-gray-300 p-2 w-full"
                  value={description}
                  rows="4"
                  onChange={e => {
                    e.persist()
                    setDescription(e.target.value)
                    console.log(description)
                  }}
                />
              </div>
              <div className="mb-8">
                <label className="text-xl text-gray-600">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="border-2 border-gray-300 p-2 w-full"
                  value={content}
                  rows="15"
                  onChange={e => {
                    e.persist()
                    setContent(e.target.value)
                  }}
                />
              </div>
              <div className="flex p-1 items-center">
                <button
                  role="submit"
                  className="lg:bg-yellow-500 lg:text-white text-xs p-3 lg:text-base lg:px-8 lg:py-2 rounded  hover:bg-yellow-600  hover:text-gray-100"
                  required
                >
                  Submit
                </button>
                <label className="flex justify-start items-start ml-10">
                  <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input
                      type="checkbox"
                      onChange={e => {
                        e.persist()
                        if (featured === true) {
                          setFeatured(false)
                        } else {
                          setFeatured(true)
                        }
                      }}
                      className="opacity-0 absolute"
                    />
                    {featured && (
                      <svg
                        className="fill-current  w-4 h-4 text-yellow-500 pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    )}
                  </div>
                  <div className="select-none">Featured Article?</div>
                </label>
              </div>
            </form>
            {added && (
              <div className="my-5 mx-auto w-56 bg-green-300 shadow-lg p-5 text-red-700 font-mono">
                Article created!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddArticle
