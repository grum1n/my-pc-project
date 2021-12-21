import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <main className='frontSide-main'>
        <section className='hero'>
          <div className='container login-form-box'>
            <form className='flex-column '>
              <input className='login-input' type='text' placeholder='Email' />
              <input className='login-input' type='password' placeholder='Slaptažodis'/>
              <Link className='login-button' to='/dashboard'>Prisijungti į Dashboard</Link>
            </form>
            <p>
              <Link className='login-bottom-text' to='/register'>Čia galite susikurti paskyrą</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
