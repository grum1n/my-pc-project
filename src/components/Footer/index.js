import React from 'react';
import './footer.css';
import partner1 from '../../images/partner1.png';
import partner2 from '../../images/partner2.png';
import partner3 from '../../images/partner3.png';
import partner4 from '../../images/partner4.png';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Menu } from '../Header/Menu';

function Footer () {
  const date = new Date();
  return (
    <footer className='footer'>
      <div className='partners-box'>
        <p className='container partners'>
          <img src={partner1} />
          <img src={partner2} />
          <img src={partner3} />
          <img src={partner4} />
        </p>
      </div>
      <ul className='container footer-flex'>
             <li className='footer-address-box'>
               <h3>Adresas</h3>
               <p>Kaunas</p>
               <p>Laisvės alėja</p>
               <p>Lietuva</p>
             </li>
             <li className='footer-meniu-box'>
             <h3>Meniu</h3>
             {Menu.map((item, index) => {
               return (
                 <div key={index}>
                     <Link to={item.path} className='footer-menu-links'>
                         <FaIcons.FaChevronRight className='footer-menu-chevron' />
                         <span>{item.title}</span>
                     </Link>
                 </div>
               );
             })}
             </li>
             <li className='footer-phone'>
               <h3>Telefonas</h3>
               <p className='footer-phone-number'>
                 <a href='tel: 864766898'>
                    <FaIcons.FaPhoneAlt className='phone-icon' />
                 </a>
                  +370 647 66888
               </p>
               <p>Jei turite klausimų, susisiekite kontaktai@cardp.com</p>
             </li>
           </ul>
      <p className='container rights-reserved'>grumin &copy; {date.getFullYear()} Visos teisės saugomos.</p>
    </footer>
  );
}

export default Footer;
