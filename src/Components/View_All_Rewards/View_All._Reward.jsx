import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const View_All_Reward = () => {

    var camp_ID = JSON.parse(localStorage.getItem('campaign_id'))
    const [RewardList,setRewardList] = useState([]);

    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/campaigns/${camp_ID}/rewards?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setRewardList(store_camp)
      

      
  }
  return (
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
        <a href="/create-reward"><button className='return'>Create or edit reward</button></a>
        <a href="/delete-reward"><button className='learn_more'>Delete Rewards</button></a>
      </div>
        
        <div className='camp-box-view-item'>
        {RewardList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>ID:{item.id}</h3>
                  <h3>Date of creation: {item.created_at}</h3>
                  
                  <h3>Pledge: {item.pledge}</h3>
                  <h3>Description:{item.description}</h3>
                  

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

export default View_All_Reward