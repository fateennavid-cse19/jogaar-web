import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const DeleteFAQ = () => {


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
      label:"Provide FAQ ID"

    }

    

  ]


  async function signUp()
  {

    let getCamp = {
      faq_id: values.ID
    }

    const Camp_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const to_be_deleted_camp = await fetch (`http://127.0.0.1:8000/faqs/${getCamp.faq_id}`,Camp_info)
    const store_deleted_camp = await to_be_deleted_camp.json()
    localStorage.setItem("campaign-to-delete",JSON.stringify(store_deleted_camp.id))
    var delete_id=localStorage.getItem("campaign-to-delete")

    var token = JSON.parse(localStorage.getItem('token-info'))

    const Delete_Camp = {
      method: 'DELETE',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      }
    }

    const delete_camp = await fetch (`http://127.0.0.1:8000/faqs/${delete_id}`,Delete_Camp)
    if(!delete_camp.ok)
    {
      alert("FAQ not found!")
      window.location.assign("http://localhost:3000/delete-faq");
    }
    else{
      alert("FAQ deleted successfully")
      window.location.assign("http://localhost:3000/view-faq");
      
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
      <h1><b>Delete a FAQ</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Delete FAQ</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default DeleteFAQ