import React from 'react'
import "./Home.css";
import jafor from "../../Images/jafor.png";
import abdullah from "../../Images/abdullah.jpg"
import frise from "../../Images/frise.png"
import nadia from "../../Images/nadia.png"

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

      <div className='box-item'>
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
          <div className='frise'>
            <img className='frise' src={frise} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>The Story of Frise</h3>
            </div>
            Materializing the dreams of solvency into his family was a tough task for Faiaz, an university student. So he started to plan on creating a small fast food chain. But he didn’t have much funds...

              <a className='special-font' href="/"> read on</a></div>
              


              <div className='abdullah'>
            <img className='abdullah' src={abdullah} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Abdullah’s Story</h3>
            </div>
            Scouting Dhaka’s streets trying  to convince uninterested folks to make deals just wasn’t making ends meet for Abdullah...
              <a className='special-font' href="/">read on</a></div>

              <div className='nadia'>
            <img className='nadia' src={nadia} alt="" />
          </div>
          <div className='writing'>
            <div className='heading'>
              <h3>Nadia’s Bakery</h3>
            </div>
            Nadia used to be a simple housewife.Now she owns one of the largest bakeries in Uttara. While the art of baking came to her naturally, what she lacked was a means to monetize her talent...
              <a className='special-font' href="/">read on</a></div>
        </div>

      </div>

       
        
      <h1 className='featured'>Featured</h1>  
      <div className='box-item'>
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