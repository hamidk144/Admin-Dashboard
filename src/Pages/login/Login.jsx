import React, { useState } from 'react';
import './Login.scss'

const Login = () => {

const [err, setErr]= useState(true)

const handleSubmit=(e)=>{
e.preventDefault();
}

  return (
    <div className='login'>

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>
        <button type='submit'>Submit</button>
       {err?<span>Wrong Credentials!</span> : <span></span> }
      </form>

    </div>
  )
}

export default Login