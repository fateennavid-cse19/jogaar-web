import React from 'react'
// import fateen from "../Images/Fateen.jpg"
import "./Profile.css";
import { useState } from 'react';
import { useEffect } from 'react';

const Profile_Public = () => {
  var public_name_info = JSON.parse(localStorage.getItem('public_user_name'))
  var public_email_info =JSON.parse(localStorage.getItem('public_user_email'))
  var public_date_info=JSON.parse(localStorage.getItem('public_user_date'))
  var public_user_id=JSON.parse(localStorage.getItem('public_user_id'))
  //var y = JSON.parse(JSON.stringify(localStorage.getItem("camps")))
  const [CampaignList,setCampaignList] = useState([]);


  

  

  
  
  
  



  function Logout()
  {
    localStorage.clear()
    window.location.assign('http://localhost:3000')
  }

  async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/users/${public_user_id}/campaigns?limit=2&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setCampaignList(store_camp)
      

      
  }
    
  
  return (

    <><div className='profile'>
      <a href="/find-user"><button className='view'>View public profile</button></a>
      <div className='box-info-item'>
      
        <h1 className='welcome-title'>Welcome, {public_name_info}</h1>
        

        

        
      </div>

      

      <div>
        

      </div>

      <div className='box1'>
        {/* <img classname='fateen' src={fateen} alt="" /> */}

        <div className='box-info' id="show-info">
          <div className='box-info-item'>
            <h6>Based in</h6>
            <h3>Dhaka</h3></div>
            <div className='box-info-item'>
            <h6>Funded Campaigns</h6>
            <a href="/view-pledged-campaigns-public"><button className='funded'>View Pledged Campaigns </button></a></div>
          <div className='box-info-item'>
            <h6>Bookmarked Campaigns</h6>
            <a href="/view-bookmarked-campaigns-public"><button className='funded'>View Bookmarked Campaigns </button></a></div>
        </div>
        <div>
          <h4>Email Address: {public_email_info}</h4>
          <h4>Date of creating account: {public_date_info} </h4>
          <h4>Public User ID: {public_user_id} </h4>
        </div>

        <div>
          <h1 className='title'>Campaigns</h1>
        </div>

        
          
          <div className='buttons-public'>
            <button className='view' onClick={View}>View top campaigns</button>
            <a href="/view-public-campaigns"><button className='learn_more'>View all</button></a>
          </div>
          
        

        

        



        

        <div className='camp-box-item'>
          {CampaignList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  {/* <h3>ID:{item.id}</h3> */}
                  {/* <p>Date:{item.created_at}</p> */}
                  
                  <h3>Goal:{item.goal}</h3>
                  <h3>Pledged:{item.pledged}</h3>

                </div>

                
              </div>

              
            </div>;
            
          })}

              
          
          
          

        </div>


      </div>

    </div><br /><br /><div className='button-types'>
        <a href="/feed"><button className='return'>Return to feed</button></a>
        <a href="/profile"><button className='learn_more'>Return to Profile</button></a>
        
        
        
      </div>
      <br /><br />
      <a href="/ban-user"><button className='learn_more'>Ban User</button></a>
      
      </>

        
      
      
    
  )
}

export default Profile_Public