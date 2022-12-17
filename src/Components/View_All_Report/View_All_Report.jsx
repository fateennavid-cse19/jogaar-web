import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const View_All_Report = () => {

    //var id=JSON.parse(localStorage.getItem('id-info'))
    const [CampaignList,setCampaignList] = useState([]);
    var token = JSON.parse(localStorage.getItem('token-info'))

    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/reports?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setCampaignList(store_camp)
      

      
  }
  return (
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
      </div>
        
        <div className='camp-box-view-item'>
        {CampaignList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                  <h3>ID:{item.id}</h3>
                  </div>
                  
                  <h3>Date of creation: {item.created_at}</h3>
                  
                  <h3>Reporter ID:{item.reporter_id}</h3>
                  <h3>Description: {item.description}</h3>
                  <h3>Content ID: {item.content_id}</h3>
                  <h3>Content Type: {item.content_type}</h3>
                  

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

export default View_All_Report