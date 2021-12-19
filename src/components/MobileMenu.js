import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const MobileMenu = [
  {
    title: 'Pagrindinis',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Apie Mus',
    path: '/apiemus',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Laužynai',
    path: '/lauzynai',
    icon: <FaIcons.FaStore />,
    cName: 'nav-text'
  },
  {
    title: 'Kontaktai',
    path: '/kontaktai',
    icon: <FaIcons.FaAddressCard />,
    cName: 'nav-text'
  },
  {
    title: 'Prisijungti',
    path: '/login',
    icon: <FaIcons.FaUserLock />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
