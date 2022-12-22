import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const EditTag = () => {


  const [values,setValues]=useState(
    {
      name:"",
      tag_id:""
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"name",
      type:"text",
      placeholder:"New Tag",
      label:"Insert New Tag"

    },

    
    {
      id:2,
      name:"tag_id",
      type:"text",
      placeholder:"Tag ID",
      label:"Give Specific Tag ID"

    }

  ]

  


  async function signUp()
  {

    let getCamp = {
      tag_id: values.tag_id
    }

    const Camp_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const update_camp = await fetch (`http://127.0.0.1:8000/tags/${getCamp.tag_id}`,Camp_info)
    const store_update_camp = await update_camp.json()
    localStorage.setItem("tag-updated",JSON.stringify(store_update_camp.id))
    var tag_id= localStorage.getItem("tag-updated")

    let requestModel = {
      name: values.name
     
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
            const fetchResponse = await fetch (`http://127.0.0.1:8000/tags/${tag_id}`, settings);
            const result =await fetchResponse.json();
           
            if(!fetchResponse.ok){
              alert("Tag might not be edited due to expiry of access token.Please login again to edit campaign!")
              window.location.assign("http://localhost:3000/login");
            }
            else{
              alert('Tag updated successfully!')
              window.location.assign("http://localhost:3000/view-campaign");
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
      <h1><b>Edit a tag</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Edit a tag</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default EditTag