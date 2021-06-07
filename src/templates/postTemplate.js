import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostItem from "../components/PostItem"
import Seo from "../components/seo"

const PostTemplate = props => {
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    if(props){
    let keywordsArray = []
    keywordsArray.push(props.data.article.firstKeyword);
    keywordsArray.push(props.data.article.secondKeyword)
    setKeywords(keywordsArray)}
  }, [props])


  return (
    <section className="max-w-screen-lg mx-auto">
      <Seo
        title={props.data.article.title}
        description={props.data.article.description}
        keywords={keywords}
        image={props.data.article.imageUrl}
      />
      <PostItem
        title={props.data.article.title}
        content={props.data.article.content}
        category={props.data.article.category}
        authorFirstName={props.data.article.author.firstName}
        authorLastName={props.data.article.author.lastName}
        authorAvatar={
          props.data.article.author.localImage.childImageSharp.gatsbyImageData
        }
        image={props.data.article.localImage.childImageSharp.gatsbyImageData}
        posted={props.data.article.posted}
        firstKeyword={props.data.article.firstKeyword}
        secondKeyword={props.data.article.secondKeyword}
      />
    </section>
  )
}

export const query = graphql`
  query ArticlesQuery($articleId: String!) {
    article(id: { eq: $articleId }) {
      author {
        firstName
        lastName
        localImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      firstKeyword
      secondKeyword
      category
      content
      description
      imageUrl
      title
      posted
      localImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default PostTemplate
