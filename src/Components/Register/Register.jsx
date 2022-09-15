import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import Register_input from './Register_input'
import './register.css'


const Register = () => {

  const [values,setValues]=useState(
    {
      full_name:"",
      email:"",
      password:"",
      confirm:"",
      contact:""
    }
  );

  const inputs=[
    {
      id:1,
      name:"full_name",
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
    {
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

  ]
  

  const handleSubmit =(e)=> {
    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='login'>
      
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <button>Register</button>
        </form>
    </div>
  )
}

export default Register