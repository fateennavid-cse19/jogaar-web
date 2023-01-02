import React, { useEffect } from 'react'
import "./camp_View.css"
import poultry from "../../Images/poultry.png"
import { useState } from 'react'
import Uploader from "../Uploader"

const Camp_View = () => {

    var camp_title = JSON.parse(localStorage.getItem('campaign_name'))
    var camp_desc = JSON.parse(localStorage.getItem('campaign_description'))
    var goal_info = JSON.parse(localStorage.getItem('goal'))
    var pledged_info = JSON.parse(localStorage.getItem('pledged'))
    var camp_id= JSON.parse(localStorage.getItem('campaign_id'))
    var image_id = JSON.parse(localStorage.getItem('picture-id'))
    const [tagList,settagList]= useState([]);
    const [updateList,setupdateList]= useState([]);
    const [Photos,setPhotos]= useState([]);
    const [token, setToken] = useState(null)
    const [coverID, setCoverID] = useState(null)

    useEffect(() => {
      setToken(JSON.parse(localStorage.getItem("token-info")))
    }, [])

    async function viewPhoto()
    {
      const getPhoto ={
        method: "GET",
        headers: {
          'accept': 'application/json'
        }
      }
      const all_photo= await fetch (`http://127.0.0.1:8000/images/${image_id}`, getPhoto);
      const store_photo = await all_photo.json()
      localStorage.setItem("photo-location-info",JSON.stringify(store_photo.location))
      console.log(store_photo)
      setPhotos(store_photo)

    }

    // var photo_location = JSON.parse(localStorage.getItem("photo-location-info"))

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

    

  

    

  return (
    <div className='Camp_View'>
        <h1 className='heading-campaign'>{camp_title}</h1>
        <h3 className='description'>{camp_desc}</h3>
        {/* <button onClick={viewPhoto}>View Photo</button> */}


        



        <div classname='grid-img-and-progress'>
          <img src={require("../../Images/poultry.png")} className='jafor' alt="" />
          {/* <img src={require("static/images/22/2-bryl26art-toyota-ae86-fan-art-blanco.jpg")} className='jafor' alt="" /> */}
          
          {/* <img src={require(photo_location)} className='jafor' alt="" /> */}
            <div className='progress-bar-big'>
                <div className='progress-complete-big'></div>
            </div>
        </div>

        <h3 className='money'>{pledged_info}&#2547; pledged out of {goal_info}&#2547;</h3>
        <div className='side-buttons'>
            <button onClick={viewTag} classname ="tags">Tags</button>
            <a href="/tag-customization"><button>Create,edit or delete tag</button></a>
        </div>
        <div className='camp-box-view-item'>
        {tagList.map((item, index) => {
            return <div>
              
              <div key={index}>
                
                  <div className='heading'>
                    <h3 className='name'>{item.name}</h3>
                  </div>
                  <h3>ID:{item.id}</h3>
                  
                  

                


                
              </div>

              
            </div>;
            
          })}
        </div>

        <br /><br /><br /><br /><br />
        
        <div className='side-buttons'>
            <a href="/view-faq"><button className='FAQ'>FAQ</button></a>
            <a href="/view-reward"><button>Rewards</button></a>
            <a href="/view-milestone"><button>Milestone</button></a>
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
                  <a href="/edit-and-delete-update"><button className='edit-update'>Edit or delete update</button></a>
                  

                </div>

                <br /><br />

                
              </div>

              
            </div>;
            
          })}

          <div>

          

          


          </div>

        </div>

        <a href="/create-update"><button className='edit-update'>Create an update</button></a>

        



        
    </div>
  )
}

export default Camp_View