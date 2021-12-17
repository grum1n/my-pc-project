import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="container flex-center">
      <div className="login-container">
        <form className="flex-column form-box">
          <input className="login-input" type="text" placeholder="Email" />
          <input className="login-input" type="password" placeholder="Password"/>
          {/* <input className="registerButton" type="button" value=" Log in " /> */}
          <Link className="registerButton" to="/dashboard">Log in</Link>
        </form>
        <p>
          <Link className="login-link" to="/register">Link to register page</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
