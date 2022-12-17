import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const Public_View_All = () => {

    var public_user_id=JSON.parse(localStorage.getItem('public_user_id'))
    const [CampaignList,setCampaignList] = useState([]);

    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/users/${public_user_id}/campaigns?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setCampaignList(store_camp)
      

      
  }
  return (
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
        <a href="/profile/public"><button className='return'>Return to public profile</button></a>
        <a href="/report"><button className='learn_more'>Report Camapign</button></a>
      </div>
        
        <div className='camp-box-view-item'>
        {CampaignList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>ID:{item.id}</h3>
                  <h3>Date of creation: {item.created_at}</h3>
                  
                  <h3>Goal:{item.goal}</h3>
                  <h3>Pledged:{item.pledged}</h3>
                  <h3>Deadline: {item.deadline}</h3>
                  <h3>Challenges: {item.challenges}</h3>
                  <h3>Current_state: {item.current_state}</h3>
                  

                </div>

                <br /><br />

                
              </div>

              
            </div>;
            
          })}

          <div>

          

          </div>

        </div>
        
    </div>
  )
}

export default Public_View_All