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
    
    if(values.password!=values.confirm)
    {
      alert("Password doesn't match!");
    }
    else{
      alert('A form was submitted with Name :"' + values.full_name +
        '" + Email :"'+values.email +'" and Contact :"' + values.contact + '"');

    }

    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='login'>
      <h1><b>Register</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button>Register</button><br /><br />
          <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p>
        </form>
    </div>
  )
}

export default Register