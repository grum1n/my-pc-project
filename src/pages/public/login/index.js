import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { useUserAuth } from '../../../context/UserAuthContext';
import Header from '../../../components/Header';
import ScrollButtonContainer from '../../../components/ScrollButton';
import PageContextGoToTop from '../../../components/PageContextGoToTop';

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
      navigate('/autorized/dashboard_home');
    } catch (err) {
      // setError(err.message);
    }
 };

  return (
    <>
     <PageContextGoToTop />
    <ScrollButtonContainer>
    <Header />
      <section className='login-hero'>
        <div className='container flex-center'>
          <form className='flex-column login-form-box' onClick={handleSubmit}>
          {error && alert(error) }
            <h5>admin@gmail.com</h5>
            <input className='login-input' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <h5>123456</h5>
            <input className='login-input' type='password' placeholder='Slaptažodis'  onChange={(e) => setPassword(e.target.value)} />
              <button variant='primary' type='Submit' className='login-button'>Prisijungti</button>
            {/* <p>
              <Link className='login-bottom-text' to='/register'>Čia galite susikurti paskyrą</Link>
            </p> */}
          </form>
        </div>
      </section>
      <Footer />

    </ScrollButtonContainer>
     
    </>
  );
};

export default Login;
