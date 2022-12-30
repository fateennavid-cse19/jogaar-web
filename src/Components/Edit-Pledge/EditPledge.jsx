import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const EditPledge = () => {


  const [values,setValues]=useState(
    {
      amount:"",
      campaign_id:""
    }
  );

  //const history =useNavigate();

  

  const inputs=[
    {
      id:1,
      name:"amount",
      type:"text",
      placeholder:"Amount",
      label:"Provide Amount to Pledge:"

    },
    {
      id:2,
      name:"campaign_id",
      type:"text",
      placeholder:"Campaign ID",
      label:"Insert Specific Campaign ID:"

    }


    

  ]


  async function signUp()
  {

    let requestModel = {
      amount: values.amount
     
  }

    

    var token = JSON.parse(localStorage.getItem('token-info'))

    const Edit_Pledge = {
      method: 'PUT',
      body: JSON.stringify (requestModel),
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const pledged_camp = await fetch (`http://127.0.0.1:8000/campaigns/${values.campaign_id}/pledges`,Edit_Pledge)
    if(!pledged_camp.ok)
    {
      alert("Error in editing pledge!")
      window.location.assign("http://localhost:3000/edit-pledge");
    }
    else{
      alert("Campaign pledged successfully")
      window.location.assign("http://localhost:3000/view-pledged-campaigns");
      
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
      <h1><b>Edit a pledge</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Make Pledge</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default EditPledge