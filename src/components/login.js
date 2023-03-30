import './login.css';
import React, { useState,useEffect } from 'react';

function login() {
  return (
    <div className="login-form">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div> 
      <form>
        <h3>Login</h3>

        <label for="username">Username:</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password:</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </div>
  );
}

export default login;
