import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { useUserAuth } from '../../../context/UserAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError] = useState('');
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/dashboard_home');
    } catch (err) {
      // setError(err.message);
    }
 };

  return (
    <>
      <section className='hero'>
        <div className='container flex-center'>
          <form className='flex-column login-form-box' onClick={handleSubmit}>
          {error && alert(error) }
            <input className='login-input' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input className='login-input' type='password' placeholder='Slaptažodis'  onChange={(e) => setPassword(e.target.value)} />
              <button variant='primary' type='Submit' className='login-button'>Prisijungti</button>
            <p>
              <Link className='login-bottom-text' to='/register'>Čia galite susikurti paskyrą</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
