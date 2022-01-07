import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { useUserAuth } from '../../../context/UserAuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/login');
    } catch (err) {
      // setError(err.message);
    }
  };

  return (
    <>
        <section className='hero'>
          <div className='container flex-center'>
            <div className='login-form-box'>
              <form className='flex-column form-box' onSubmit={handleSubmit}>
                 {error && alert(error) }
                <h4 className='register-form-title'>Susikurkite paskyrą nemokamai</h4>
                <input className='login-input' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input className='login-input' type='password' placeholder='Spaltažodis'  onChange={(e) => setPassword(e.target.value)}/>
                <button variant='primary' type='Submit' className='login-button'>Registruotis</button>
              </form>
              <p>
                <Link className='login-bottom-text' to='/login'>Atgal į Prisijungimo puslapį</Link>
              </p>
            </div>
          </div>
        </section>
        <Footer />
    </>
  );
};

export default Register;
