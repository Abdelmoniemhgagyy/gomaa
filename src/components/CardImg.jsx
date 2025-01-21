import React from 'react'
import "../App.css"
import Post from "../assest/post.jpg"

function Card({path}) {
  return (
    <div className='imgs-container'>
         <div class="card card-img ">
                <div class="card-border-top">
                </div>
                <div class="img"> <img src={path} className='img-post'/>
                </div>
                <span> </span>
                <a
        href={path}
        target="_blank"
        rel="noreferrer"
      >
      <i className="bi bi-download "></i>
      </a>
                
        </div>

    </div>
  )
}

export default Card