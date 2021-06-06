import React, { useEffect, useState } from "react"
import BigPost from "./BigPost"


const LatestNewsSection = ({ firebase }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const unsubscribe = firebase.subscribeToLatestNews({
      onSnapshot: snapshot => {
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
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  return (
    <div>
      <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 className="font-bold text-3xl">Latest news</h2>
      </div>
      <div>
        {articles &&
          articles.map(article => (
            <BigPost
              id={article.id}
              key={article.id}
              title={article.title}
              content={article.content}
              category={article.category}
              posted={article.posted.toDate()}
              imageUrl={article.imageUrl}
              authorFirstName={article.author.firstName}
              authorLastName={article.author.lastName}
              authorAvatar={article.author.avatar}
            />
          ))}
      </div>
    </div>
  )
}

export default LatestNewsSection
