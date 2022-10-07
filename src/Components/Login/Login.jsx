import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import Login_input from './Login_input'
import './login.css'


const Login = () => {

  const [values,setValues]=useState(
    {
      email:"",
      password:""
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
      alert("No Password given!");
    }
    else{
      alert('Successful login with Email :"' + values.email +'"');

    }

    e.preventDefault();
    
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  
  console.log(values)
  return (
    <div className='register'>
      <h1><b>Login</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Login_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button>Log In</button><br /><br />
          <p className='choice'>New to Jogaar? <a className="login" href="/register">Get Started</a></p>
        </form>
    </div>
  )
}

export default Login