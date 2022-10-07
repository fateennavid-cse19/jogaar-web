import React from 'react'
import './Login_input.css'

const Login_input = (props) => {
  const{label,onChange,id,...inputProps}=props;
  return (
    
    <div className='reginput'>
        
        <label>
          {label} 
          <br />
          <input {...inputProps} onChange={onChange} /> 
          </label>
        
        
        </div>
  )
}

export default Login_input