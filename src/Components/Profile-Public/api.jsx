import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
    useLocation
  } from "react-router-dom";



const Api = () => {

    const location = useLocation();
    let profile = (location.pathname.split("/"))
    var id= profile[2];

  async function findUser()
  {
    const getUser ={

        method: 'GET',
        headers: {
          'accept': 'application/json'
        }

    }

    const user = await fetch(`http://127.0.0.1:8000/users/${id}`)
    const store_user = await user.json()
    
  }

  return(
    <div>API</div>
  )
  
}

export default Api