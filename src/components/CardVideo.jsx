import React from 'react'
import "../App.css"


function CardVideo({path}) {

  return (
    <div className='imgs-container'>
         <div class="card card-img  card-video">
                <div class="card-border-top">
                </div>
                <div > <video src={path} className='video' controls />
                </div>
                
                <a
        href={path}
        target="_blank"
        className="absolute left-1 top-1 pt-1  pl-2 rounded-lg cursor-pointer"
        rel="noreferrer"
      >
      <i className="bi bi-download text-white text-lg block transform hover:scale-105"></i>
      </a>
                
        </div>

    </div>
  )
}

export default CardVideo