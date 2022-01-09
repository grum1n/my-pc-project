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
    title: 'Team Group',
    path: '/autorized/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'sidebar-links'
  },
  {
    title: 'Custumers',
    path: '/autorized/dashboard_home',
    icon: <FaIcons.FaUsers />,
    cName: 'sidebar-links'
  },
  {
    title: 'Cars',
    path: '/autorized/dashboard_home',
    icon: <FaIcons.FaCar />,
    cName: 'sidebar-links'
  },
  {
      title: 'Car parts',
      path: '/autorized/dashboard_car_parts',
      icon: <FaIcons.FaReceipt />,
      cName: 'sidebar-links'
  },
  {
    title: 'Settings',
    path: '/autorized/dashboard_car_parts',
    icon: <FaIcons.FaCog />,
    cName: 'sidebar-links'
  },
  {
    title: 'Charts',
    path: '/autorized/dashboard_car_parts',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'sidebar-links'
  }
]