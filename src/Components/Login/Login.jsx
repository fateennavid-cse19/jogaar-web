import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import Register_input from './Register_input'
import './register.css'

import { UserContext } from '../../React-Context/UserContext'


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

  async function Login_start()
	{  
		let requestModel = {
      'email': values.email,
      'password': values.password
      
  }

  
  
// var formBody = Object.keys(requestModel).map(key => encodeURIComponent(key) + '=' + encodeURIComponent (requestModel[key])).join('&');
// var formBody =[];
// for(var property in requestModel){
//   var encodedKey =encodeURIComponent(property);
//   var encodedValue=encodeURIComponent(requestModel[property]);
//   formBody.push(encodedKey + "=" + encodedValue);
// }

// formBody =formBody.join("&");

const settings = {
        method: 'POST',
        body:JSON.stringify ('grant_type=&username=fnavid%40unique.com&password=1234&scope=&client_id=&client_secret='),
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          // 'Authorization': 'Bearer <token>'
        }
      }
                    
          try{
            const fetchResponse = await fetch ("http://127.0.0.1:8000/login", settings);
            const result =await fetchResponse.json();
            return result;
          } catch (e) {
                  return e;
                }

  }

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
          <br /><button onClick={Login_start}>Log In</button><br /><br />
          
          <br />
          <p className='choice'>New to Jogaar? <a className="login" href="/register">Get Started</a></p>
        </form>
    </div>
  )
}

export default Login