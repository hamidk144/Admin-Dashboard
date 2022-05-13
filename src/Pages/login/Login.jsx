import React, { useContext, useState } from 'react';
import './Login.scss';
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


const Login = () => {

  const [err, setErr] = useState(false);
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const navigate= useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"Login", payload:user});
        navigate("/");
    // ...
  })
  .catch((error) => {
    setErr(true);
  });


  }

  return (
    <div className='login'>

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='submit'>Submit</button>
        {err ? <span>Wrong Credentials!</span> : <span></span>}
      </form>

    </div>
  )
}

export default Login