import React from 'react'
import "../App.css"
import Post from "../assest/post.jpg"
import Card from "../components/Card"
import menu from '../data/main'
function Home() {
  return (
    <div className='home-container'>
      <h1 className='header-title'>إِنَّ مِنْ أَفْضَلِ أَيَّامِكُمْ يَوْمَ الْجُمُعَةِ</h1>
      <div className='card-container'>
        {
          menu.map((item)=><>
          <Card key={item.id} title={item.title} path={item.path}/>
          </>)
        }
      </div>

    </div>
  )
}

export default Home