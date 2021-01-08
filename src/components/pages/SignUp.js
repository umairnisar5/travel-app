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
  <label className="sign_up_lable">Name</label><br/>
  <input className="sign_up_input" type='text' onChange={namefun} placeholder='Enter your Name' /><br/>
    <label className="sign_up_lable" >Email</label><br/>
    <input className="sign_up_input" type='email' onChange={emailfun} placeholder='Enter your Email' /><br/>
    <label className="sign_up_lable">Password</label><br/>
    <input className="sign_up_input" type='password' onChange={passfun} placeholder="Enter your Password" /><br/>
    <input className='submitbtn' type='submit' onClick={onSubmit} />
  </form>
  </div>
  </>
}