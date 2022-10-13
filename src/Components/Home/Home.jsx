import React from 'react'
import "./Home.css";

const Home = ({imageSrc}) => {
  return (
    <div className='home'>
      {/* <img src={imageSrc} alt="Home_Page" className='home_image' /> */}
      <h1 className='home_title'>Jogaar is a crowdfunding platform 
for aspiring entrepreneurs.</h1>
      
    </div>
  )
}

export default Home