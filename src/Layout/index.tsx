import React, { type ReactNode } from 'react';
import { Outlet } from 'react-router';

const Layout: React.FC = (props) => {
  return <Outlet />;
};

export default Layout;
