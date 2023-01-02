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
    const [updateList,setupdateList]= useState([]);

    const [FaqList,setFaqList] = useState([]);
    const [RewardList,setRewardList] = useState([]);
    const [MilestoneList,setMilestoneList]= useState([]);
    const [tagList,settagList]= useState([]);

    async function readUpdate()
    {
      const getUpdate ={
        method: "GET",
        headers: {
          'accept':'application/json'
        }
      }

      const all_updates= await fetch (`http://127.0.0.1:8000/campaigns/${camp_id}/updates?limit=100&offset=0`, getUpdate);
      const store_updates = await all_updates.json()
      
      setupdateList(store_updates)

    }
    

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
          'accept': 'application/json',
          
        }
      }

      

      const all_milestones= await fetch (`http://127.0.0.1:8000/campaigns/${camp_id}/milestones?limit=100&offset=0`, getCamp);
      const store_milestones = await all_milestones.json()
      setMilestoneList(store_milestones)
      
      

      
  }

  async function Do_Bookmark(){

    var token = JSON.parse(localStorage.getItem('token-info'))
    const postBookmark = {

      

      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`

      }

      


    }

    const post_bookmark = await fetch(`http://127.0.0.1:8000/campaigns/${camp_id}/bookmarks`,postBookmark)
    
    
    if(!post_bookmark.ok)
    {
      alert("Bookmark already done for the campaign!")
    }
    else{
      alert("Campaign bookmarked successfully!")
    }
  }

  

  return (
    <div className='Camp_View'>
        <h1 className='heading-campaign'>{camp_title}</h1>
        <h3 className='description'>{camp_desc}</h3>
        <div classname='grid-img-and-progress'>
            
            <img className='jafor' src={poultry} alt="" />
            <br /><br /><br />
            <div className='side-buttons'>
              <button onClick={viewTag} classname ="FAQ">Tags</button>
              <a href="/pledge-campaign"><button classname ="FAQ">Pledge Project</button></a>
            </div>
            
            <br /><br /><br />
            <div className='progress-bar-big'>
                <div className='progress-complete-big'></div>
                
            </div>
        </div>

        <h3 className='money'>{pledged_info}&#2547; pledged out of {goal_info}&#2547;</h3>

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


        <div className='camp-box-view-item'>
        {FaqList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                  <h3 className='name'>Question: {item.question}</h3>
                  </div>
                  <h3>Answer: {item.answer}</h3>
                  
                  

                </div>

                <br /><br />

              

                
              </div>


              
            </div>;
            
          })}

        </div>



        <br /><br /><br />
        <h1 className='social-updates' onClick={readUpdate}>Social Updates</h1>
        <div className='camp-box-view-item'>
        {updateList.map((item, index) => {
            return <div>
              
              <div key={index}>
                <div className='box-campaigns-view'>
                  <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
                  <h3>{item.content}</h3>
                  <h3>ID:{item.id}</h3>
                  <h3>Date of creation: {item.created_at}</h3>
                  <div className='heading'>
                    <a href="/replies"><h3 className='name'>Read Replies</h3></a>
                  </div>
                  
                  

                </div>

                <br /><br />

                
              </div>

              
            </div>;
            
          })}

          <div>

          

          


          </div>

        </div>

        <br /><br /><br />

        <div className='bookmark-and-report'>

        <div className='side-buttons'>
          <button className='FAQ' onClick={Do_Bookmark}>Bookmark this project</button>
          <a href="/report-campaign"><button className='report'>Report Camapign</button></a>
        </div>

        </div>

        
        

        
    </div>
  )
}

export default Camp_View_Pledger