import React from 'react'
import './CSS/LoginSignup.css';
import loginimage from '../assets/login_image.png';
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-wrapper">
      <img src={loginimage} alt="Signup Visual" className="loginsignup-image" />
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name:'/>
          <input type='email' placeholder='Email Address:'/>
          <input type='password' placeholder='Password:'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing,I agrree to the terms of  use & privacy</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LoginSignup
