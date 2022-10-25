import React from 'react'
import "./Home.css";
import jafor from "../../Images/jafor.png";

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
      {/* <div className='grid-container' id="show-info">
        
        <div className='grid-item'>12
        <h6>success stories</h6></div>
        <div className='grid-item'>&#2547; 12,345
        <h6>raised by the community</h6></div>
        <div className='grid-item'>345 <h6>happy backers</h6></div>
      </div> */}

<div className='box-info' id="show-info">
		<div className='box-info-item'>12
        		<h6>success stories</h6></div>
        	<div className='box-info-item'>&#2547; 12,345
        		<h6>raised by the community</h6></div>
        	<div className='box-info-item'>345 <h6>happy backers</h6></div>
</div>


<h1 className='title'>Success Stories</h1>

      <div classname='box-item'>
        <div className='box1'>
          <div className='jafor'>
            <img className='jafor' src={jafor} alt="" />
          </div>
          <div className='heading'>
            <h3>Jafor's Story</h3>
          </div>
            How Jogaar helped Abdul ex-Rickshaw Puller Jafor recover from a devestating road accident when all hope seemed...
            <a className='special-font' href="/">read full story</a>
        </div>

        <div className='box2'>
          <div className='jafor'>
            <img className='jafor' src={jafor} alt="" />
          </div>
          <div className='heading'>
            <h3>Jafor's Story</h3>
          </div>
              How Jogaar helped Abdul ex-Rickshaw Puller Jafor recover from a devestating road accident when all hope seemed...
              <a className='special-font' href="/">read full story</a>
        </div>

      </div>

        

        
      
      


      <div>
        <h1 classname='question'>Already a member?
        <a href="/login"><button className='question'>Log In</button></a>
        </h1>
      </div>
      
      
      
    </div>

    
  )
}

export default Home