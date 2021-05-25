import { graphql } from "gatsby"
import React from "react"
import { aboutWallpaper } from "../../static/aboutWallpaper.jpg"

const AboutMe = props => {
  return (
    <div className="">
      <div className="block">
        <div className="min-w-full h-96 overflow-hidden">
          <img
            className="w-screen h-screen object-cover object-top"
            src={`../../aboutWallpaper.jpg`}
            alt="about wallpaper"
          />
        </div>
        <div>
          <div className="mt-3 mx-auto max-w-lg p-8 shadow-xl bg-gray-100 my-5">
            <h1 className="text-3xl uppercase">
              {props.data.author.firstName + " " + props.data.author.lastName}
            </h1>
            <p className="font-semibold mb-5">{props.data.author.occupation}</p>
            <p>{props.data.author.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    author(id: { eq: "rduma" }) {
      firstName
      lastName
      about
      occupation
    }
  }
`

export default AboutMe
