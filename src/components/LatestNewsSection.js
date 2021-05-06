import React, { useEffect, useContext, useState } from "react"
import BigPost from "./BigPost"
import { FirebaseContext } from "./Firebase"

const LatestNewsSection = ({ firebase }) => {
  // const {firebase} =  useContext(FirebaseContext);
  const [articles, setArticles] = useState([])

  useEffect(() => {
    if (firebase) {
      const unsubscribe = firebase.subscribeToLatestNews({
        onSnapshot: snapshot => {
          console.log(snapshot)
          const snapshotArticles = []
          snapshot.forEach(doc => {
            snapshotArticles.push({
              id: doc.id,
              ...doc.data(),
            })
          })

          setArticles(snapshotArticles)
        },
      })
    }
  }, [firebase])

  console.log(articles)

  return (
    <div>
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 className="font-bold text-3xl">Latest news</h2>
      </div>
      <div>
        {articles &&
          articles.map(article => (
            <BigPost
              title={article.title}
              author={article.author}
              content={article.content}
              category={article.category}
            />
          ))}
      </div>
    </div>
  )
}

export default LatestNewsSection
