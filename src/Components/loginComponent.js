

import React from 'react';

function LoginBox({ handleClick }) {
  return (
    <div className="login-box-large">
      <h3>Welcome back...</h3>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div className="submit-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginBox;
