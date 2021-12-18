import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Login = () => {
  return (
    <>
      <Header />
      <main className="frontSide-main">
        <section className="container flex-center top-section">
          <div className="login-container">
            <form className="flex-column form-box">
              <input className="login-input" type="text" placeholder="Email" />
              <input className="login-input" type="password" placeholder="Password"/>
              {/* <input className="registerButton" type="button" value=" Log in " /> */}
              <Link className="registerButton" to="/dashboard">Log in to Dashboard</Link>
            </form>
            <p>
              <Link className="login-link" to="/register">Link to register page</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
