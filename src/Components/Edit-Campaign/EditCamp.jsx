import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const EditCamp = () => {


  const [values,setValues]=useState(
    {
      title:"",
      description:"",
      challenges:"",
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"title",
      type:"text",
      placeholder:"Title",
      label:"Title"

    },

    {
      id:2,
      name:"description",
      type:"description",
      placeholder:"Description",
      label:"Description"

    },
    {
      id:3,
      name:"challenges",
      type:"text",
      placeholder:"Challenges",
      label:"Challenges"

    },
    {
      id:4,
      name:"camp_id",
      type:"text",
      placeholder:"Campaign ID",
      label:"Give Specific Campaign ID"

    }

  ]


  async function signUp()
  {

    let getCamp = {
      camp_id: values.camp_id
    }

    const Camp_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const update_camp = await fetch (`http://127.0.0.1:8000/campaigns/${getCamp.camp_id}`,Camp_info)
    const store_update_camp = await update_camp.json()
    localStorage.setItem("campaign-updated",JSON.stringify(store_update_camp.id))
    var campaign_id= localStorage.getItem("campaign-updated")

    let requestModel = {
      title: values.title,
      description: values.description,
      challenges: values.challenges
  }
     
  //   console.log("requestModel ->", requestModel);

      var token = JSON.parse(localStorage.getItem('token-info'))
      //console.log(token)

    
      const settings = {
            method: 'PUT',
            body: JSON.stringify (requestModel),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              'accept': 'application/json'
              
            }
          };

  //         console.log(settings);
          
          try{
            const fetchResponse = await fetch (`http://127.0.0.1:8000/campaigns/${campaign_id}`, settings);
            const result =await fetchResponse.json();
           
            if(!fetchResponse.ok){
              alert("Campaign might not be edited due to expiry of access token.Please login again to edit campaign!")
              window.location.assign("http://localhost:3000/login");
            }
            else{
              alert('Campaign created successfully!')
              window.location.assign("http://localhost:3000/view-user-campaigns");
            }
            return result;
          } catch (e) {
                  return e;
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
      <h1><b>Edit a campaign</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Edit a campaign</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default EditCamp