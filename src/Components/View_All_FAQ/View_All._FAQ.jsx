import React from 'react'
import { useState } from 'react';
import "./View_All.css"

const View_All_FAQ = () => {

    var camp_ID = JSON.parse(localStorage.getItem('campaign_id'))
    const [FAQList,setFAQList] = useState([]);

    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/campaigns/${camp_ID}/faqs?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setFAQList(store_camp)
      

      
  }
  return (
    <div className='view-all'>
      <div className='button-type'>
        <button className='view' onClick={View}>View</button>
        <a href="/edit-faq"><button className='return'>Edit FAQ</button></a>
        <a href="/delete-faq"><button className='learn_more'>Delete FAQ</button></a>
      </div>
        
        <div className='camp-box-view-item'>
        {FAQList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>Question: {item.question}</h3>
                    
                  </div>
                  <h3>Answer: {item.answer}</h3>
                  <h3>ID: {item.id}</h3>
                  <h3>Order: {item.order}</h3>
                  
                  

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

export default View_All_FAQ