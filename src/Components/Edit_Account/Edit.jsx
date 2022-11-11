import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const Edit = () => {

  var token=JSON.parse(localStorage.getItem('token-info'))
  var id=JSON.parse(localStorage.getItem('id-info'))
  const [values,setValues]=useState(
    {
      name:"",
      email:"",
      password:"",
      /* confirm:"",
      contact:"" */
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"name",
      type:"text",
      placeholder:"Full Name",
      label:"Full Name"

    },

    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      label:"Email"

    },
    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"

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

  // const navigate = useNavigate()

  async function signUp()
  {
    let requestModel = {
      name: values.name,
      email: values.email,
      password: values.password
  }
    console.log("hello!");  
    console.log("requestModel ->", requestModel);

    
      const settings = {
            method: 'PUT',
            body: JSON.stringify (requestModel),
            headers:{
              'Content-Type': 'application/json',
              'accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          };
          
          try{
            const fetchResponse = await fetch (`http://127.0.0.1:8000/users/${id}`, settings);
            const result =await fetchResponse.json();
            localStorage.setItem("name-info", JSON.stringify(result.name));
            localStorage.setItem("email-info", JSON.stringify(result.email));
            localStorage.setItem("date-info", JSON.stringify(result.created_at));
            localStorage.setItem("id-info", JSON.stringify(result.id));
            window.location.assign("http://localhost:3000/profile");
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
      alert('Account updated successfully!');

    // }

    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='login'>
      <h1><b>Edit your account</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Update your account</button><br /><br />
        </form>
    </div>
  )
}

export default Edit