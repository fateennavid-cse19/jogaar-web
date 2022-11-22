import React from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import Register_input from './Register_input'
import './register.css'
import Admin from "../Admin/Admin";





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


const settings = {
        method: 'POST',
        body:JSON.stringify (`grant_type=&username=${requestModel.email}&password=${requestModel.password}&scope=&client_id=&client_secret=`),
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          // 'Authorization': 'Bearer <token>'
        }
      }

      
  
                    
          try{
            const fetchResponse = await fetch ("http://127.0.0.1:8000/login", settings);
            const result =await fetchResponse.json()
            var token = {}
            // console.log(result);
            if(!fetchResponse.ok)
            {
              alert('Invalid Credentials');
              window.location.assign("http://localhost:3000/login");
            }

            else{
              alert('Login Successful!');
              token = result.access_token
              localStorage.setItem('token-info',JSON.stringify(token))
              var y= localStorage.getItem('token-info')
              //alert (y)
            //console.log(token)
            const getReq = {
              method: 'GET',
              headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                    }
            }

            const getResponse = await fetch ("http://127.0.0.1:8000/users/current", getReq);
            const store_info = await getResponse.json()
            // localStorage.clear()
            //JSON.stringify(store_info)
            localStorage.setItem("name-info", JSON.stringify(store_info.name));
            localStorage.setItem("email-info", JSON.stringify(store_info.email));
            localStorage.setItem("date-info", JSON.stringify(store_info.created_at));
            localStorage.setItem("id-info", JSON.stringify(store_info.id));
            // var x= localStorage.getItem("id-info")
            // alert(x)
            window.location.assign("http://localhost:3000/profile");
            



           
            }
            

            
              
            return token;
          } catch (e) {
                  return e;
                }



  }

  

  const handleSubmit =(e)=> {
    
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
