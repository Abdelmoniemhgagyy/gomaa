import React from 'react'
import "./posts.css"
import Post from "../components/Post"
import {hadiths} from "../data/posts"
function Hadith({}) {
  return (
    <div className="container">
      {hadiths.map((post) => (
        <Post key={post.id} content={post.content}  />
      ))}
    </div>
  )
}

export default Hadith