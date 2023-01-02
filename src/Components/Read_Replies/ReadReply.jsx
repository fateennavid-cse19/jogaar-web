import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const ReadReply = () => {


  const [values,setValues]=useState(
    {
      ID:""
    }
  );

  
  const [ReplyList,setReplyList] = useState([]);
  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"ID",
      type:"text",
      placeholder:"ID",
      label:"Provide Update ID"

    }

    

  ]

  


  async function signUp()
  {

    let getCamp = {
      ID: values.ID
    }

    const User_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const replies_to_be_searched = await fetch (`http://127.0.0.1:8000/updates/${getCamp.ID}/replies?limit=100&offset=0`,User_info)
    const store_reply = await replies_to_be_searched.json()
    setReplyList(store_reply)


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
      <h1><b>Read replies</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Read replies</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
        <br /><br />
        <h1>Search Results</h1>

        <div className='border-divide'>
            <div classname='grid-text-and-buttons'>
                {ReplyList.map((item, index) => {
            return <div>
              
              <div key={index}>
              <div className='box-campaigns-view-recommended'>

              <div className='heading'>
                    <h2 className='name'>{item.id}. {item.content}</h2>
                  </div>
                  <h3>User ID: {item.id}</h3>
                  <a href="/edit-reply"><button className='browse'>Edit or delete reply</button></a>
                  <a href="/vote"><h3 className='name'>Vote</h3></a>
              </div>

              
                  
                  

                

                <br /><br />

                
              </div>

              
            </div>;
            
          })}
                
            </div>

            <a href="/create-reply"><button className='browse'>Create a reply</button></a>
            <br /><br /><br />


            

            
            
        </div>
    </div>
  )
}

export default ReadReply