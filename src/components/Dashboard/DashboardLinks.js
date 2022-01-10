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
    path: '/autorized/team_group',
    icon: <IoIcons.IoMdPeople />,
    cName: 'sidebar-links'
  },
  {
    title: 'Customers',
    path: '/autorized/custumers',
    icon: <FaIcons.FaUsers />,
    cName: 'sidebar-links'
  },
  {
    title: 'Cars',
    path: '/autorized/cars',
    icon: <FaIcons.FaCar />,
    cName: 'sidebar-links'
  },
  {
      title: 'Car parts',
      path: '/autorized/car_parts',
      icon: <FaIcons.FaReceipt />,
      cName: 'sidebar-links'
  },
  {
    title: 'Settings',
    path: '/autorized/settings',
    icon: <FaIcons.FaCog />,
    cName: 'sidebar-links'
  },
  {
    title: 'Charts',
    path: '/autorized/charts',
    icon: <FaIcons.FaRegChartBar />,
    cName: 'sidebar-links'
  }
]