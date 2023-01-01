import React from 'react'
import "./Feed.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Feed = () => {

    var name_info = JSON.parse(localStorage.getItem('name-info'))
    const [token, setToken] = useState(null)
    const [RecommndedList,setRecommendedList] = useState([]);
    const [FeaturedList,setFeaturedList] = useState([]);
    const [NewsList,setNewsList] = useState([]);
    const [StatList,setStatList] = useState([]);
    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("token-info")))
      }, [])

      async function News()
      {
          const getNews = {
              method: "GET",
              headers: {
                  'accept': 'application/json',
                  Authorization: `Bearer ${token}`
              }
          }
  
          const all_news= await fetch (`http://127.0.0.1:8000/feed/news?limit=100&offset=0`, getNews);
          const store_news = await all_news.json()

          if(!all_news.ok){
            alert("No news for today!")
          }
          else{
            setNewsList(store_news)
          }
          
      }
    
    
    
    async function Recommended()
    {
        const getRecommended = {
            method: "GET",
            headers: {
                'accept': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const all_recommended= await fetch (`http://127.0.0.1:8000/feed/recommended?limit=100&offset=0`, getRecommended);
        const store_recommended = await all_recommended.json()
        setRecommendedList(store_recommended)
    }

    async function Featured()
    {
        const getFeatured = {
            method: "GET",
            headers: {
                'accept': 'application/json'
            }
        }

        const all_featured= await fetch (`http://127.0.0.1:8000/feed/featured?limit=100&offset=0`, getFeatured);
        const store_featured = await all_featured.json()
        setFeaturedList(store_featured)
    }

    async function Stats()
      {
          const getStats = {
              method: "GET",
              headers: {
                  'accept': 'application/json'
              }
          }
  
          const all_stats= await fetch (`http://127.0.0.1:8000/stats`, getStats);
          const store_stats = await all_stats.json()
          setStatList(store_stats)

          
          
      }
    


  return (
    <div>
        <h1 className='welcome-title'>Welcome, {name_info}</h1>
        <div className='grid-buttons'>
            <a href="/search"><button>Search for a campaign</button></a>
            <a href="/profile"><button className='learn-more'>Go to profile</button></a>
        </div>
        <br /><br /><br />

        <div className='border-divide'>
            <div classname='grid-text-and-buttons'>
                <h1 className='welcome-title' onClick={Recommended}>Recommended Campaigns</h1>
                {RecommndedList.map((item, index) => {
            return <div>
              
              <div key={index}>
              <div className='box-campaigns-view-recommended'>

              <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
		          <h3>{item.description}</h3>
                  <h3>ID:{item.id}</h3>
                  <a href="/find-campaign"><button className='browse'>Browse Campaign</button></a>
              </div>

              
                  
                  

                

                <br /><br />

                
              </div>

              
            </div>;
            
          })}
                
            </div>


            

            
            
        </div>


        <div className='border-divide'>
            <div classname='grid-text-and-buttons'>
                <h1 className='welcome-title' onClick={Featured}>Featured Campaigns</h1>
                <div className='camp-box-item'>

                {FeaturedList.map((item, index) => {
            return <div>
              
              <div key={index}>
              <div className='box-campaigns-view-featured'>

              <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
		          <h3>{item.description}</h3>
                  <h3>ID:{item.id}</h3>
                  <a href="/find-campaign"><button className='browse'>Browse Campaign</button></a>
              </div>

              
                  
                  

                

                <br /><br />

                
              </div>

              
            </div>;
            
          })}

                </div>
                
                
            </div>


            

            
            
        </div>


        <div className='border-divide'>
            <div classname='grid-text-and-buttons'>
                <h1 className='welcome-title' onClick={News}>News</h1>
                <div className='camp-box-item'>

                {NewsList.map((item, index) => {
            return <div>
              
              <div key={index}>
              <div className='box-campaigns-view-featured'>

              <div className='heading'>
                    <h3 className='name'>{item.title}</h3>
                  </div>
		          <h3>{item.content}</h3>
              </div>

              
                  
                  

                

                <br /><br />

                
              </div>

              
            </div>;
            
          })}

                </div>
                
                
            </div>


            

            
            
        </div>


        <div className='border-divide'>
            <div classname='grid-text-and-buttons'>
                <h1 className='welcome-title' onClick={Stats}>Stats</h1>
                <div className='camp-box-item'>

                {StatList.map((item, index) => {
            return <div>
              
              <div key={index}>
              <div className='box-campaigns-view-featured'>

              <div className='heading'>
                    
                  </div>
		          <h3>Successes: {item.successes}</h3>
              </div>

              
                  
                  

                

                <br /><br />

                
              </div>

              
            </div>;
            
          })}

                </div>
                
                
            </div>


            

            
            
        </div>

        
    </div>
  )
}

export default Feed