import React from 'react'
import "../App.css"
import Post from "../assest/post.jpg"
import { useNavigate } from 'react-router-dom'

function Card({title,path}) {
  const navigate = useNavigate()

  return (
    <div>
         <div class="card" onClick={() =>navigate(path)}>
                <div class="card-border-top">
                </div>
                <div class="img"> <img src={Post} className='img-post'/>
                </div>
                <span> </span>
                <button>{title}</button>
        </div>

    </div>
  )
}

export default Card