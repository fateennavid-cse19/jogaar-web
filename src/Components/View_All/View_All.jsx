import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const View_All = () => {

    var id=JSON.parse(localStorage.getItem('id-info'))
    const [CampaignList,setCampaignList] = useState([]);

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
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
        <a href="/edit-campaign"><button className='return'>Edit Campaign</button></a>
        <a href="/delete-campaign"><button className='learn_more'>Delete Camapign</button></a>
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
                  <a href="/find-campaign"><button className='browse'>Browse Campaign</button></a>
                  <a href="/start-campaign"><button className='browse'>Start Campaign</button></a>

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

export default View_All