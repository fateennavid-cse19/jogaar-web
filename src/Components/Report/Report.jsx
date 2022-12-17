import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const Report = () => {


  const [values,setValues]=useState(
    {
      description:"",
      content_id:"",
      content_type:"",
      /* confirm:"",
      contact:"" */
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"description",
      type:"text",
      placeholder:"Description",
      label:"Description"

    },

    {
      id:2,
      name:"content_id",
      type:"number",
      placeholder:"Content ID",
      label:"Content ID"

    },
    {
      id:3,
      name:"content_type",
      type:"text",
      placeholder:"Content Type",
      label:"Content Type"

    },
    /* {
      id:4,
      name:"confirm",
      type:"password",
      placeholder:"Confirm password",
      label:"Confirm Password"

    },
    {
      id:5,
      name:"contact",
      type:"text",
      placeholder:"Contact",
      label:"Contact"

    }
 */
  ]
  var token = JSON.parse(localStorage.getItem('token-info'))

  // const navigate = useNavigate()

  async function signUp()
  {
    let requestModel = {
      description: values.description,
      content_id: values.content_id,
      content_type: values.content_type
  }
    console.log("hello!");  
    console.log("requestModel ->", requestModel);

    
      const settings = {
            method: 'POST',
            body: JSON.stringify (requestModel),
            headers:{
              'Content-Type': 'application/json',
              'accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          };
          
          try{
            const fetchResponse = await fetch ("http://127.0.0.1:8000/reports", settings);
            const result =await fetchResponse.json();
            if(!fetchResponse.ok)
            {
              alert("Errors sending report. Token might be expired!")
              window.location.assign("http://localhost:3000/login");
            }
            else{
              alert("Report created successfully!")
              window.location.assign("http://localhost:3000/view-reports");

            }
            // localStorage.setItem("user-info",JSON.stringify(result))
            // history("/")
            return result;
          } catch (e) {
                  return e;
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
  

  const handleSubmit =(e)=> {
    
    // if(values.password!==values.confirm)
    // {
    //   alert("Password doesn't match!");
    // }
    // else{

    // }

    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='login'>
      <h1><b>Create a report</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Create a report</button><br /><br />
        </form>
    </div>
  )
}

export default Report