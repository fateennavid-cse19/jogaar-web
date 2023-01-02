import { useEffect, useState } from "react"

import Uploader from "../Uploader"
import "./register.css"
import Register_input from "./Register_input"
//import {useNavigate} from 'react-router-dom'

const CreateReply = () => {

  const [values, setValues] = useState({
    content: "",
    update_id:""
  })

  // from mamo
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token-info")))
  }, [])

  var camp_id= JSON.parse(localStorage.getItem('campaign_id'))

  //const history =useNavigate();

  const inputs = [
   

    {
      id: 1,
      name: "content",
      type: "text",
      placeholder: "Content",
      label: "Content",
    },
    {
      id: 2,
      name: "update_id",
      type: "text",
      placeholder: "Update ID",
      label: "Update ID",
    }
  ]



  

  async function signUp() {
    let requestModel = {
      content: values.content
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
        `http://127.0.0.1:8000/updates/${values.update_id}/replies`,
        settings
      )
      const result = await fetchResponse.json()
      //console.log(result);
      // localStorage.setItem("user-info",JSON.stringify(result))
      // history("/")
      if (!fetchResponse.ok) {
        alert(
          "Reply not created!Token might be expired"
        )
        window.location.assign("http://localhost:3000/login")
      } else {
        alert("Reply created successfully!")
        window.location.assign("http://localhost:3000/replies")
      }
      return result
    } catch (e) {
      return e
    }

    // let result= await fetch("http://127.0.0.1:8000/users",{
    //   method: 'POST',
    //   body: requestModel,
    //   headers:{
    //     'Content-Type': 'application/json',
    //     'accept': 'application/json'
    //   }
    // })

    // result =await result.json()
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
        <b>Make a Reply</b>
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
          Make Reply
        </button>
        <br />
        <br />
        {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
      </form>
    </div>
  )
}

export default CreateReply
