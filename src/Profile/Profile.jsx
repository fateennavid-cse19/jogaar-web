import React from 'react'
// import fateen from "../Images/Fateen.jpg"
import "./Profile.css";
import jewels from "../Images/jewels.png"
import retro from "../Images/retro.png"
import boutique from "../Images/boutique.png"

const Profile = () => {
  var name_info = JSON.parse(localStorage.getItem('name-info'))
  var email_info =JSON.parse(localStorage.getItem('email-info'))
  var date=JSON.parse(localStorage.getItem('date-info'))
  return (

    <div className='profile'>
        <div className='box-info-item'>
          <h1 className='welcome-title'>Welcome, {name_info}</h1>
          <a href="/edit"><button className='edit'>Edit account</button></a>
        </div>  
        
        <div className='box1'>
        {/* <img classname='fateen' src={fateen} alt="" /> */}
        
          <div className='box-info' id="show-info">
		        <div className='box-info-item'>
        		    <h6>Based in</h6>
                <h3>Dhaka</h3></div>
        	  <div className='box-info-item'>
        		    <h6>Successful Campaigns</h6>
                <h3>0</h3></div>
                <div className='box-info-item'>
        		    <h6>Funded Campaigns</h6>
                <h3>12</h3></div>
          </div>
          <div>
            <h4>Email Address: {email_info}</h4>
            <h4>Date of creating account: {date} </h4>
          </div>


         <h1 className='title'>Campaigns</h1>
         <div className='camp-box-item'>
          <div className='box-campaigns'>
            <img src={jewels} alt="" />
            <div className='heading'>
              <h3 className='name'>Mayer Doa Jewellery Business</h3>
              <h3>10% Funded</h3>
              <div classname='button-hosuing'>
                {/* <button classname='taka'>&#2547;</button> */}
              </div>
              
            </div>

            
            
          </div>

          <div className='box-campaigns'>
            <img classname='retro' src={retro} alt="" />
            <div className='heading'>
              <h3 className='name'>Mayer Doa Retro Cafe</h3>
              <h3>25% Funded</h3>
              <div classname='button-hosuing'>
                {/* <button classname='taka'>&#2547;</button> */}
              </div>
              
            </div>

            
            
          </div>

          <div className='box-campaigns'>
            <img src={boutique} alt="" />
            <div className='heading'>
              <h3 className='name'>Untitled Botique House</h3>
              <h3>5% Funded</h3>
              <div classname='button-hosuing'>
                {/* <button classname='taka'>&#2547;</button> */}
              </div>
              
            </div>

            
            
          </div>
           
         </div>
         
        </div>

        
        <br /><br />
        <a href="/feed"><button className='return'>Return to feed</button></a>  
      
      
    </div>
  )
}

export default Profile