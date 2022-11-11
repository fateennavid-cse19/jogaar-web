import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const CreateCamp = () => {


  const [values,setValues]=useState(
    {
      title:"",
      description:"",
      challenges:"",
      goal:"",
      deadline:""
    }
  );

  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"title",
      type:"text",
      placeholder:"Title",
      label:"Title"

    },

    {
      id:2,
      name:"description",
      type:"description",
      placeholder:"Description",
      label:"Description"

    },
    {
      id:3,
      name:"challenges",
      type:"text",
      placeholder:"Challenges",
      label:"Challenges"

    },
    {
      id:4,
      name:"goal",
      type:"number",
      placeholder:"Set Goal",
      label:"Goals"

    },
    {
      id:5,
      name:"deadline",
      type:"date",
      placeholder:"Set Deadline",
      label:"Deadline"

    }

  ]

  var date = new Date(values.deadline)

  async function signUp()
  {
    let requestModel = {
      title: values.title,
      description: values.description,
      challenges: values.challenges,
      goal: values.goal,
      deadline: date.toJSON()
  }
    // console.log("hello!");  
    console.log("requestModel ->", requestModel);

      var token = JSON.parse(localStorage.getItem('token-info'))
      //console.log(token)

    
      const settings = {
            method: 'POST',
            body: JSON.stringify (requestModel),
            headers:{
              'Content-Type': 'application/json',
              'accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          };

          console.log(settings);
          
          try{
            const fetchResponse = await fetch ("http://127.0.0.1:8000/campaigns", settings);
            const result =await fetchResponse.json();
            //console.log(result);
            // localStorage.setItem("user-info",JSON.stringify(result))
            // history("/")
            if(!fetchResponse.ok){
              alert("Campaign might not be created due to expiry of access token.Please login again to create campaign!")
              window.location.assign("http://localhost:3000/login");
            }
            else{
              alert('Campaign created successfully!')
              window.location.assign("http://localhost:3000/view-user-campaigns");
            }
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
      <h1><b>Make a campaign</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Make a campaign</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default CreateCamp