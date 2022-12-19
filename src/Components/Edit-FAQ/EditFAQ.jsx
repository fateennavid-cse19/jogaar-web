import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const EditFAQ = () => {


  const [values,setValues]=useState(
    {
      question:"",
      answer:"",
      order:"",
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"question",
      type:"text",
      placeholder:"Question",
      label:"Question"

    },

    {
      id:2,
      name:"answer",
      type:"text",
      placeholder:"Description",
      label:"Description"

    },
    {
      id: 3,
      name: "order",
      type: "number",
      placeholder: "Order",
      label: "Order",
    },
    {
      id:4,
      name:"faq_id",
      type:"text",
      placeholder:"FAQ ID",
      label:"Give Specific FAQ ID"

    }

  ]



  async function signUp()
  {

    let getCamp = {
      faq_id: values.faq_id
    }

    const Camp_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const update_camp = await fetch (`http://127.0.0.1:8000/faqs/${getCamp.faq_id}`,Camp_info)
    const store_update_camp = await update_camp.json()
    localStorage.setItem("campaign-updated",JSON.stringify(store_update_camp.id))
    var faq_id= localStorage.getItem("campaign-updated")

    let requestModel = {
      question: values.question,
      answer: values.answer,
      order: values.order
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
            const fetchResponse = await fetch (`http://127.0.0.1:8000/faqs/${faq_id}`, settings);
            const result =await fetchResponse.json();
           
            if(!fetchResponse.ok){
              alert("FAQ might not be edited due to expiry of access token.Please login again to edit campaign!")
              window.location.assign("http://localhost:3000/login");
            }
            else{
              alert('FAQ updated successfully!')
              window.location.assign("http://localhost:3000/view-faq");
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
      <h1><b>Edit a FAQ</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Edit a FAQ</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default EditFAQ