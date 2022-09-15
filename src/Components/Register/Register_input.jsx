import React from 'react'
import './Register_input.css'

const Register_input = (props) => {
  const{label,onChange,id,...inputProps}=props;
  return (
    
    <div className='reginput'>
        
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
        </div>
  )
}

export default Register_input