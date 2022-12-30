import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const View_All_Pledged = () => {

    var id=JSON.parse(localStorage.getItem('id-info'))
    const [PledgedList,setPledgedList] = useState([]);
    const [CampList,setCampList] = useState([]);

    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/users/${id}/pledges?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setPledgedList(store_camp)

      

      
  }
  return (
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
        <a href="/edit-pledge"><button className='return'>Edit Pledge</button></a>
        <a href="/delete-pledge"><button className='learn_more'>Delete Pledge</button></a>
      </div>
        
        <div className='camp-box-view-item'>
        {PledgedList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>Campaign ID: {item.campaign_id}</h3>
                  <h3>Date of creation: {item.created_at}</h3>
                  
                  
                  <h3>Pledged amount: {item.amount}&#2547;</h3>

                  <a href="/find-campaign"><button className='browse'>Browse Campaign</button></a>
                  

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

export default View_All_Pledged