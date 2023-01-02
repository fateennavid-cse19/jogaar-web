import React from 'react'
import {useState,useEffect} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const DeleteVote = () => {


  const [values,setValues]=useState(
    {
      ID:""
    }
  );

  //const history =useNavigate();
  const [token, setToken] = useState(null)
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token-info")))
  }, [])

  const inputs=[
    {
      id:1,
      name:"ID",
      type:"text",
      placeholder:"ID",
      label:"Provide Vote ID"

    }

    

  ]


  async function signUp()
  {

   
    const Delete_Camp = {
      method: 'DELETE',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      }
    }

    const delete_camp = await fetch (`http://127.0.0.1:8000/replies/${values.ID}/votes`,Delete_Camp)
    if(!delete_camp.ok)
    {
      alert("Vote not found!")
      window.location.assign("http://localhost:3000/replies");
    }
    else{
      alert("Vote deleted successfully")
      window.location.assign("http://localhost:3000/replies");
      
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
      <h1><b>Delete a vote</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Delete vote</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
    </div>
  )
}

export default DeleteVote