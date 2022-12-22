import { useEffect, useState } from "react"

import Uploader from "../Uploader"
import "./register.css"
import Register_input from "./Register_input"
//import {useNavigate} from 'react-router-dom'

const Create_Tag = () => {

  const [values, setValues] = useState({
    name: ""
  })

  

  // from mamo
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token-info")))
  }, [])

  //const history =useNavigate();
  var camp_ID = JSON.parse(localStorage.getItem('campaign_id'))

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Tag Name",
      label: "Create New Tag",
    },

    
  ]

  const edit_inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Tag Name",
      label: "Edit Tag",
    },

    {
      id: 2,
      name: "tag_id",
      type: "text",
      placeholder: "Tag ID",
      label: "Insert Specific Tag ID",
    },

    
  ]

  

  

  async function signUp() {
    let requestModel = {
      name : values.name,
    }

    
    // console.log("hello!");
    // console.log("requestModel ->", requestModel)

    // var token = JSON.parse(localStorage.getItem("token-info"))
    //console.log(token)

    const settings = {
      method: "POST",
      body: JSON.stringify(requestModel),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    // console.log(settings)

    try {
      const fetchResponse = await fetch(
        `http://127.0.0.1:8000/campaigns/${camp_ID}/tags`,
        settings
      )
      const result = await fetchResponse.json()
      if (!fetchResponse.ok) {
        alert(
          "Tag not created!Token might be expired"
        )
        window.location.assign("http://localhost:3000/login")
      } else {
        alert("Tag created successfully!")
        window.location.assign("http://localhost:3000/view-campaign")
      }
      return result
    } catch (e) {
      return e
    }

    
  }

  

  const handleSubmit = e => {
    // if(values.password!==values.confirm)
    // {
    //   alert("Password doesn't match!");
    // }
    // else{
    /* alert('A form was submitted with Name :"' + values.name +
        '" + Email :"'+values.email +'" and Contact :"' + values.contact + '"'); */

    // }

    e.preventDefault()
  }

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  

  // console.log(values)
  return (
    <div className="login">
      <h1>
        <b>Make a Tag</b>
      </h1>

      {/* from mamo */}

      <form onSubmit={handleSubmit}>
        {inputs?.map(input => (
          // eslint-disable-next-line react/jsx-pascal-case
          <Register_input
            key={input.id}
            {...input}
            value={values[input?.name]}
            onChange={onChange}
          />
        ))}
        <br />
        <button className="signup" onClick={signUp}>
          Make a Tag
        </button>
        <br />
        <br />
        


        
      </form>

      <div className='side_buttons_tag'>
            <a href="/edit-tag"><button className='FAQ'>Edit Tag</button></a>
            <a href="/delete-tag"><button>Delete Tag</button></a>
        </div>



      
    </div>

    
  )
}

export default Create_Tag
