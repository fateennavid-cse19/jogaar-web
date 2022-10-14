import React from 'react'
import "./Home.css";

const Home = ({imageSrc}) => {
  return (
    <div className='home'>
      {/* <img src={imageSrc} alt="Home_Page" className='home_image' /> */}
      <h1 className='home_title'>Jogaar is a crowdfunding platform 
for aspiring entrepreneurs.</h1>
        <br />
        <br />
        <a href="/register"><button className='get_started'>Get Started</button></a>
        <a href="/learn_more"><button className='learn_more'>Learn More</button></a>
        <br /><br /><br /><br />
      <div className='grid-container' id="show-info">
        
        <div className='grid-item'>12
        <h6>success stories</h6></div>
        <div className='grid-item'>&#2547; 12,345
        <h6>raised by the community</h6></div>
        <div className='grid-item'>345 <h6>happy backers</h6></div>
      </div>
      <h1 classname='question'>Already a member?
      <a href="/login"><button className='question'>Log In</button></a>
      </h1>
      
      
    </div>
  )
}

export default Home