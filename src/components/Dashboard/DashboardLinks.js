import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const DashboardLinks = [
  {
    title: 'Dashboard',
    path: '/autorized/dashboard_home',
    icon: <FaIcons.FaIgloo />,
    cName: 'sidebar-links active'
  },
  {
    title: 'Grupės',
    path: '/autorized/team_group',
    icon: <IoIcons.IoMdPeople />,
    cName: 'sidebar-links'
  },
  {
    title: 'Klientai',
    path: '/autorized/custumers',
    icon: <FaIcons.FaUsers />,
    cName: 'sidebar-links'
  },
  {
    title: 'Automobiliai',
    path: '/autorized/cars',
    icon: <FaIcons.FaCar />,
    cName: 'sidebar-links'
  },
  {
    title: 'Garažas',
    path: '/autorized/garage',
    icon: <FaIcons.FaWarehouse />,
    cName: 'sidebar-links'
  },
  {
      title: 'Detalės',
      path: '/autorized/car_parts',
      icon: <FaIcons.FaReceipt />,
      cName: 'sidebar-links'
  }
  // ,
  // {
  //   title: 'Settings',
  //   path: '/autorized/settings',
  //   icon: <FaIcons.FaCog />,
  //   cName: 'sidebar-links'
  // },
  // {
  //   title: 'Charts',
  //   path: '/autorized/charts',
  //   icon: <FaIcons.FaRegChartBar />,
  //   cName: 'sidebar-links'
  // }
]