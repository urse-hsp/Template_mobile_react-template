import React, { lazy, Suspense } from 'react';
import { useRoutes, type RouteObject } from 'react-router-dom';
import { LoadingElement } from '@/components/loading';
import Tabbar from '@/components/tabbar';
import { ConfigProvider } from 'antd-mobile';

const Home = lazy(
  async () => await import(/* webpackChunkName: "home" */ '@/pages/home'),
);
const My = lazy(
  async () => await import(/* webpackChunkName: "my" */ '@/pages/my'),
);

interface Item {
  path: string;
  exact?: boolean;
  component: any;
  children?: Item[];
}
export interface RouteConfig extends Item {
  children?: Item[];
}

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/my',
    element: <My />,
  },
];

const AppRouter = () => {
  const element = useRoutes(routeConfig);
  return (
    <>
      {/* 页面 */}
      <div id="page">
        <Suspense fallback={LoadingElement}>{element}</Suspense>;
      </div>

      {/* 导航 */}
      <Tabbar />
    </>
  );
};
export default AppRouter;
