import React from 'react'
// import fateen from "../Images/Fateen.jpg"
import "./Profile-Public.css";
import { useState } from 'react';
import { useEffect } from 'react';
//import {findUser} from './api';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Profile_Public = () => {
  var name_info = JSON.parse(localStorage.getItem('name-info-public'))
  var email_info =JSON.parse(localStorage.getItem('email-info-public'))
  var date=JSON.parse(localStorage.getItem('date-info-public'))
  var id=JSON.parse(localStorage.getItem('id-info-public'))
  //var y = JSON.parse(JSON.stringify(localStorage.getItem("camps")))
  const [CampaignList,setCampaignList] = useState([]);


  

  // const location = useLocation();
  // let profile = (location.pathname.split("/"))
  // console.log(profile[2]);

  function Logout()
  {
    localStorage.clear()
    window.location.assign('http://localhost:3000')
  }

  // function User(){
  //   const user_info = findUser()
  // }

  async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/users/${id}/campaigns?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setCampaignList(store_camp)
      

      
  }
    
  
  return (

    <><div className='profile'>
      <div className='box-info-item'>
        <h1 className='welcome-title'>Welcome, {name_info}</h1>
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

        <div>
          <h1 className='title'>Campaigns</h1>
        </div>

        
          
          <div className='buttons'>
            <button className='view' onClick={View}>View</button>
            <a href="/view-user-campaigns"><button className='learn_more'>View all</button></a>
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
        <a href="/"><button className='learn_more' onClick={Logout}>Logout</button></a>
        
      </div>

    <div>
      {id}</div>  
      
      </>

        
      
      
    
  )
}

export default Profile_Public