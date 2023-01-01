import React from 'react'
import {useState} from 'react'
import Register_input from './Register_input'
import './register.css'
//import {useNavigate} from 'react-router-dom'

const FindCamp = () => {


  const [values,setValues]=useState(
    {
      title:""
    }
  );

  
  const [SearchList,setSearchList] = useState([]);
  //const history =useNavigate();

  const inputs=[
    {
      id:1,
      name:"title",
      type:"text",
      placeholder:"Title",
      label:"Provide Campaign Title"

    }

    

  ]

  var id=JSON.parse(localStorage.getItem('id-info'))


  async function signUp()
  {

    let getCamp = {
      campaign_title: values.title
    }

    const User_info = {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    }

    const campaign_to_be_searched = await fetch (`http://127.0.0.1:8000/search/campaigns?title=${getCamp.campaign_title}&limit=100&offset=0`,User_info)
    const store_campaign = await campaign_to_be_searched.json()
    setSearchList(store_campaign)

    

    

    

    //var found_user_info=localStorage.getItem("found_user")
    //alert(found_user_info)


    
    
     
  

    
    
                
    
    


   
    

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
      <h1><b>Search a campaign</b></h1>
        <form onSubmit={handleSubmit}>
          
          {inputs?.map((input)=>(
            <Register_input key={input.id} {...input} value={values[input?.name]} onChange={onChange} />
          ))}
          <br /><button className='signup' onClick={signUp}>Find campaign</button><br /><br />
          {/* <p className='info'>By Signing up, you agree to our <a className="privacy_policy" href="/privacy_policy">Privacy Policy</a> and <a className='terms_of_use' href="/terms_of_use">Terms of Use</a></p>
          <br />
          <p className='choice'>Already have an account? <a className="login" href="/login">Log In</a></p> */}
        </form>
        <br /><br />
        <h1>Search Results</h1>

        <div className='border-divide'>
            <div classname='grid-text-and-buttons'>
                {SearchList.map((item, index) => {
            return <div>
              
              <div key={index}>
              <div className='box-campaigns-view-recommended'>

              <div className='heading'>
                    <h2 className='name'>{item.title}</h2>
                  </div>
		          <h3>{item.description}</h3>
                  <h3>ID:{item.id}</h3>
                  <a href="/find-campaign"><button className='browse'>Browse Campaign</button></a>
              </div>

              
                  
                  

                

                <br /><br />

                
              </div>

              
            </div>;
            
          })}
                
            </div>


            

            
            
        </div>
    </div>
  )
}

export default FindCamp