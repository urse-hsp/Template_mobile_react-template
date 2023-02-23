import React, { type ReactNode } from 'react';
import { Outlet } from 'react-router';
import AppTabbar from '@/components/tabbar';
import './index.scss';

const Layout: React.FC = (props) => {
  return (
    <>
      <div id="page">
        <Outlet />
      </div>
      <AppTabbar />
    </>
  );
};

export default Layout;
