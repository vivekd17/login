import React from 'react';
import { useState } from 'react';
import './style.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ""} onClick={()=>{setIsLogin(true)}}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={()=>{setIsLogin(false)}}>SignUp</button>
        </div>
        {isLogin ? <>
        <div className="form">
        <h2>Login</h2>
            <input type="email"  placeholder='Enter Email'/>
            <input type="password" name="pass" id="pass"  placeholder='Enter Password'/>
            <a href="#">Forget Password?</a>
            <button >Login</button>
            <p>Not a Member? <a href="#" onClick={ () => setIsLogin(false)}>SignUp Now</a></p>
       
        </div>
         </>
        : <>
                <div className="form">
        <h2>Login</h2>
            <input type="email"  placeholder='Enter Email'/>
            <input type="password" name="pass" id="pass"  placeholder='Enter Password'/>
            <input type="password" name="pass" id="pass"  placeholder='Confirm Password'/>
            <button>SignUp </button>
            </div>
        </>}
      </div>
    </div>
  );
}

export default Login;
