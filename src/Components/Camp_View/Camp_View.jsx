import React from 'react'
import "./camp_View.css"
import poultry from "../../Images/poultry.png"
import { useState } from 'react'

const Camp_View = () => {

    var camp_title = JSON.parse(localStorage.getItem('campaign_name'))
    var camp_desc = JSON.parse(localStorage.getItem('campaign_description'))
    var goal_info = JSON.parse(localStorage.getItem('goal'))
    var pledged_info = JSON.parse(localStorage.getItem('pledged'))
    var camp_id= JSON.parse(localStorage.getItem('campaign_id'))

    

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
            <a href="/view-faq"><button className='FAQ'>FAQ</button></a>
            <a href="/view-reward"><button>Rewards</button></a>
            <a href="/view-milestone"><button>Milestone</button></a>
        </div>

        



        
    </div>
  )
}

export default Camp_View