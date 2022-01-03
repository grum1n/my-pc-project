import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
        <section className='hero'>
          <div className='container login-form-box'>
            <form className='flex-column form-box'>
              <h4 className='register-form-title'>Susikurkite paskyrą nemokamai</h4>
              <input className='login-input' type='text' placeholder='Vardas' />
              <input className='login-input' type='email' placeholder='Email' />
              <input className='login-input' type='password' placeholder='Spaltažodis'/>
              <input className='login-input' type='password' placeholder='Patvirtinti slaptažodį'/>
              <Link className='login-button' to='/dashboard'>Registruotis į Dashboard</Link>
            </form>
            <p>
              <Link className='login-bottom-text' to='/login'>Atgal į Prisijungimo puslapį</Link>
            </p>
          </div>
        </section>
    </>
  );
};

export default Register;