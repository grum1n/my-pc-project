import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <form className='flex-column login-form-box'>
            <input className='login-input' type='text' placeholder='Email' />
            <input className='login-input' type='password' placeholder='Slaptažodis'/>
              <Link className='login-button' to='/dashboard'>Prisijungti į Dashboard</Link>
            <p>
              <Link className='login-bottom-text' to='/register'>Čia galite susikurti paskyrą</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
