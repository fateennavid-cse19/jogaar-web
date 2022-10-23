import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import Register_input from './Register_input'
import './register.css'


const Login = () => {

  const [values,setValues]=useState(
    {
      // full_name:"",
      email:"",
      password:"",
      // confirm:"",
      // contact:""
    }
  );

  const inputs=[
    
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"Email",
      label:"Email"

    },
    {
      id:2,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"

    }
    

  ]
  

  const handleSubmit =(e)=> {
    
    if(!values.password)
    {
      alert("No Password Given");
    }
    else{
      alert('Login successful with Email :"' + values.email +'"');

    }

    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='login'>
      <h1><b>Login</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <p className='reset_pass'><a className="forget" href="/forget_password">Forgot Password?</a></p>
          <br /><br />
          <br /><button>Log In</button><br /><br />
          
          <br />
          <p className='choice'>New to Jogaar? <a className="login" href="/register">Get Started</a></p>
        </form>
    </div>
  )
}

export default Login