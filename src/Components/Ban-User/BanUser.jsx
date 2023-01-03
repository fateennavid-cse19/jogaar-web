import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const BanUser = () => {


  const [values,setValues]=useState(
    {
      user_id:""
    }
  );

  //const history =useNavigate();

  var user_type = new Boolean(false);
  var id=JSON.parse(localStorage.getItem('id-info'))

  const inputs=[
    
    {
      id:1,
      name:"user_id",
      type:"text",
      placeholder:"User ID",
      label:"Insert Specific User ID:"

    }


    

  ]


  async function signUp()
  {

    

    

    var token = JSON.parse(localStorage.getItem('token-info'))

    const User_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const user_to_be_searched = await fetch (`http://127.0.0.1:8000/users/${id}`,User_info)
    const store_public_user = await user_to_be_searched.json()
    if(store_public_user.access_level == "admin")
    {
      user_type = true;
      const Ban_user = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
  
      const user_to_be_banned = await fetch (`http://127.0.0.1:8000/users/${values.user_id}/ban?status=true`,Ban_user)
      const store_banned_user = await user_to_be_banned.json()
      if(!store_banned_user.ok){
        alert("Error Banning user!")
      }
      else{
        alert("User banned!")
      }

    }
    else{
      alert("Not an admin user!")
    }

    

    
     
  

    
    
                
    
    


   
    

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
      <h1><b>Ban a user</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Ban User</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default BanUser