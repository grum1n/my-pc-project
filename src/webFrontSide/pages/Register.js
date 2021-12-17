import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="container flex-center">
      <div className="login-container">
        <form className="flex-column form-box">
          <h4>Sign up for a free account</h4>
          <input className="login-input" type="text" placeholder="Name" />
          <input className="login-input" type="email" placeholder="Email" />
          <input className="login-input" type="password" placeholder="Password"/>
          <input className="login-input" type="password" placeholder="Confirm password"/>
          <input className="registerButton" type="button" value=" Register " />
        </form>
        <p>
          <Link className="login-link" to="/login">Back to Log in page</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
