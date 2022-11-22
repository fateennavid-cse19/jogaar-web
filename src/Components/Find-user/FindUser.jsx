import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const FindUser = () => {


  const [values,setValues]=useState(
    {
      ID:""
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"ID",
      type:"text",
      placeholder:"ID",
      label:"Provide User ID"

    }

    

  ]


  async function signUp()
  {

    let getUser = {
      user_id: values.ID
    }

    const User_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const user_to_be_searched = await fetch (`http://127.0.0.1:8000/users/${getUser.user_id}`,User_info)
    const store_public_user = await user_to_be_searched.json()
    localStorage.setItem("public_user_name",JSON.stringify(store_public_user.name))
    localStorage.setItem("public_user_email",JSON.stringify(store_public_user.email))
    localStorage.setItem("public_user_date", JSON.stringify(store_public_user.created_at));
    localStorage.setItem("public_user_id", JSON.stringify(store_public_user.id));

    window.location.assign('http://localhost:3000/profile/public');

    //var found_user_info=localStorage.getItem("found_user")
    //alert(found_user_info)


    
    
     
  

    
    
                
    
    


   
    

  }
  

  const handleSubmit =(e)=> {
    
    // if(values.password!==values.confirm)
    // {
    //   alert("Password doesn't match!");
    // }
    // else{
      /* alert('A form was submitted with Name :"' + values.name +
        '" + Email :"'+values.email +'" and Contact :"' + values.contact + '"'); */

    // }

    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='login'>
      <h1><b>Find a user</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Find user</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default FindUser