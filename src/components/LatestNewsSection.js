import React, { useEffect, useContext, useState } from "react"
import BigPost from "./BigPost"
import { FirebaseContext } from "./Firebase"

const LatestNewsSection = ({ firebase }) => {
  // const {firebase} =  useContext(FirebaseContext);
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let promises = []
    const unsubscribe = firebase.subscribeToLatestNews({
      onSnapshot: snapshot => {
        const snapshotArticles = []

        snapshot.forEach(doc => {
          // let article = doc.data()
          // let dataAuthor
          // if (article.author) {
          //  // promises.push(article.author.get())
          //   dataAuthor = await article.author.get()
          //   console.log(dataAuthor.data())
          //   // .then(res =>{
          //   //   let authorData = res.data()
          //   //   let addArticle = doc.data()
          //   //   finishedArticles.push({
          //   //     id: doc.id,
          //   //     authorData: authorData,
          //   //     ...addArticle
          //   //   })
          //   // }
          //   // )
          //   // .catch(err => console.log(err))
          //   // if(finishedArticles.length > 0){
          //   //   setArticles(finishedArticles)
          //   // }
          // }
          snapshotArticles.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        // const solvedPromises = Promise.all(promises)
        // let authorData = []
        // solvedPromises.then( data => {
        //   data.forEach( p => {
        //     authorData.push({
        //       id: p.id,
        //       ...p.data()
        //     })
        //   })
        // }
        // )
        // authorData.forEach( (author, index) =>{
        //   console.log(author + '' + index)

        // })

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
