import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const View_All_Milestone = () => {

    var camp_ID = JSON.parse(localStorage.getItem('campaign_id'))
    const [MilestoneList,setMilestoneList]= useState([]);

    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/campaigns/${camp_ID}/milestones?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setMilestoneList(store_camp)
      

      
  }
  return (
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
        <a href="/create-milestone"><button className='return'>Create or edit Milestone</button></a>
        <a href="/delete-milestone"><button className='learn_more'>Delete Milestone</button></a>
      </div>
        
        <div className='camp-box-view-item'>
        {MilestoneList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>ID:{item.id}</h3>
                  <h3>Date of creation: {item.created_at}</h3>
                  
                  <h3>Description:{item.description}</h3>
                  <h3>Deadline: {item.deadline}</h3>
                  

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

export default View_All_Milestone