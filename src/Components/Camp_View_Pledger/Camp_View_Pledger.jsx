import React from 'react'
import "./camp_View.css"
import poultry from "../../Images/poultry.png"
import { useState } from 'react'

const Camp_View_Pledger = () => {

    var camp_title = JSON.parse(localStorage.getItem('campaign_name'))
    var camp_desc = JSON.parse(localStorage.getItem('campaign_description'))
    var goal_info = JSON.parse(localStorage.getItem('goal'))
    var pledged_info = JSON.parse(localStorage.getItem('pledged'))
    var camp_id= JSON.parse(localStorage.getItem('campaign_id'))

    const [FaqList,setFaqList] = useState([]);
    const [RewardList,setRewardList] = useState([]);
    const [MilestoneList,setMilestoneList]= useState([]);
    const [tagList,settagList]= useState([]);

    async function viewTag()
    {
        const getTag = {
            method: "GET",
            headers: {
                'accept': 'application/json'
            }
        }

        const all_tags= await fetch (`http://127.0.0.1:8000/campaigns/${camp_id}/tags?limit=100&offset=0`, getTag);
        const store_tag = await all_tags.json()
        settagList(store_tag)


    }

  



    async function View()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_camp= await fetch (`http://127.0.0.1:8000/campaigns/${camp_id}/faqs?limit=100&offset=0`, getCamp);
      const store_camp = await all_camp.json()
      setFaqList(store_camp)
      
      

      
  }

  async function View_Reward()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_rewards= await fetch (`http://127.0.0.1:8000/campaigns/${camp_id}/rewards?limit=100&offset=0`, getCamp);
      const store_rewards = await all_rewards.json()
      setRewardList(store_rewards)
      
      

      
  }

  async function View_Milestone()
  {
    


      const getCamp ={
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }

      

      const all_milestones= await fetch (`http://127.0.0.1:8000/campaigns/${camp_id}/milestones?limit=100&offset=0`, getCamp);
      const store_milestones = await all_milestones.json()
      setMilestoneList(store_milestones)
      
      

      
  }

  return (
    <div className='Camp_View'>
        <h1 className='heading-campaign'>{camp_title}</h1>
        <h3 className='description'>{camp_desc}</h3>
        <div classname='grid-img-and-progress'>
            <img className='jafor' src={poultry} alt="" />
            <div className='progress-bar-big'>
                <div className='progress-complete-big'></div>
            </div>
        </div>

        <h3 className='money'>{pledged_info}&#2547; pledged out of {goal_info}&#2547;</h3>

        <div className='side-buttons'>
            <button onClick={viewTag} classname ="tags">Tags</button>
        </div>
        <div className='camp-box-view-item'>
        {tagList.map((item, index) => {
            return <div>
              
              <div key={index}>
                
                  <div className='heading'>
                    <h3 className='name'>{item.name}</h3>
                  </div>
                  
                  
                  

                


                
              </div>

              
            </div>;
            
          })}
        </div>

        <div className='side-buttons'>
            <button className='FAQ' onClick={View}>FAQ</button>
            <button onClick={View_Reward}>Rewards</button>
            <button onClick={View_Milestone}>Milestone</button>
        </div>


        <div className='camp-box-view-item'>
        
        </div>

        <div className='camp-box-view-item'>
        {RewardList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>{item.description}</h3>
                  <h3>Pledged: {item.pledge}&#2547;</h3>
                  
                  

                </div>

                <br /><br />

              

                
              </div>

              

              
            </div>;
            
          })}

        </div>


        <div className='camp-box-view-item'>
        {MilestoneList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>{item.description}</h3>
                  
                  

                </div>

                <br /><br />

              

                
              </div>


              
            </div>;
            
          })}

        </div>

        <a href="/report-campaign"><button className='report'>Report Camapign</button></a>

        
    </div>
  )
}

export default Camp_View_Pledger