import React, { useState } from 'react';
import '../../App.css';


export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function namefun(e) {
    setName(e.target.value);
  }

  function emailfun(e) {
    setEmail(e.target.value);
  }

  function passfun(e) {
    setPass(e.target.value);
  }

function onSubmit() {
  alert("WellCome " + name + " Your Email is " + email + " And Password is " + pass);
}

  return <>
  <div className='sign-up'>
  <h1 >SIGN UP PAGE</h1>
  <form>
  <label>Name</label><br/>
  <input type='text' onChange={namefun} placeholder='Enter your Name' /><br/>
    <label>Email</label><br/>
    <input type='email' onChange={emailfun} placeholder='Enter your Email' /><br/>
    <label>Password</label><br/>
    <input type='password' onChange={passfun} placeholder="Enter your Password" /><br/>
    <input className='submitbtn' type='submit' onClick={onSubmit} />
  </form>
  </div>
  </>
}
