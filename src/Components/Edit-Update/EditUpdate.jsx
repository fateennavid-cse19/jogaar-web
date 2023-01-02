import React from 'react'
import {useState,useEffect} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const EditUpdate = () => {


  const [values,setValues]=useState(
    {
      title:"",
      content:"",
      update_id:""
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
      name:"title",
      type:"text",
      placeholder:"Title",
      label:"Change Title"

    },
    {
      id:2,
      name:"content",
      type:"text",
      placeholder:"Content",
      label:"Change Content:"

    },
    {
      id:3,
      name:"update_id",
      type:"text",
      placeholder:"Update ID",
      label:"Insert specific update ID:"

    }


    

  ]


  async function signUp()
  {

    let requestModel = {
      title: values.title,
      content: values.content
     
  }

    


    const Edit_Pledge = {
      method: 'PUT',
      body: JSON.stringify (requestModel),
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }

    const pledged_camp = await fetch (`http://127.0.0.1:8000/updates/${values.update_id}`,Edit_Pledge)
    if(!pledged_camp.ok)
    {
      alert("Error in editing update!")
      window.location.assign("http://localhost:3000/edit-and-delete-update");
    }
    else{
      alert("Updated successfully!")
      window.location.assign("http://localhost:3000/view-campaign");
      
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
      <h1><b>Edit or delete an update</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}

            <br /><br />
          {/* <br /><button className='signup' onClick={signUp}>Make Pledge</button><br /><br /> */}
          
          
        </form>

        <div className='side_buttons_tag'>
          <button className='edit-update' onClick={signUp}>Edit Update</button>
            <a href="/delete-update"><button className='learn-more'>Delete Update</button></a>
        </div>
    </div>
  )
}

export default EditUpdate