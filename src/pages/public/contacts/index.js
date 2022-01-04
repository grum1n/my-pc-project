import React from 'react';
import * as FaIcons from 'react-icons/fa';
import Hero from '../../../components/Hero';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Hero heading='Kontaktai' />
          <ul className='container contact-box'>
            <li className='contact-li-boxes'>
            <p className=''><FaIcons.FaMapMarkedAlt className='contact-icons'/> Kaunas, Laisvės alėja</p>
              <p className=''>
                <a href='tel: 864766898'>
                   <FaIcons.FaPhoneAlt className='contact-icons' />
                </a>
                 +370 647 66888
              </p>
              <p className=''><FaIcons.FaHourglassStart className='contact-icons'/>Pirm.- Šešt.: 8 -17 </p>
              <p className='contact-text-color-red'>Sekmadieniais ir šventinėmis dienomis NEDIRBAME .</p>
            </li>
            <li className='contact-li-boxes'>
              <form className='contact-form'>
                <h3 className='contact-form-heading'>SUSISIEKITE SU MUMIS</h3>
                <input className='contact-form-input' type='text' placeholder='Vardas'/>
                <input className='contact-form-input' type='email' placeholder='Email'/>
                <textarea className='contact-form-textarea' placeholder='Jūsų žinutė'></textarea>
                <button className='contact-form-button'>Siųsti užklausą</button>
              </form>
            </li>
          </ul>
    </>
  );
};

export default Contact;
