import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingElement } from '@/components/loading';
import Tabbar from '@/components/tabbar';

const Home = lazy(
  async () => await import(/* webpackChunkName: "home" */ '@/pages/home'),
);
const my = lazy(
  async () => await import(/* webpackChunkName: "my" */ '@/pages/my'),
);

interface Item {
  path: string;
  component: any;
  children?: Item[];
}
export interface RouteConfig extends Item {
  children?: Item[];
}

export const routesData: RouteConfig[] = [
  {
    path: '/',
    component: <Home />,
    children: [{ path: '/home/e', component: my }],
    // redirect:''
  },
  // {
  //   path: '/my',
  //   component: my,
  // }
];

const AppRouter = () => {
  const RouteMap = (data: any) => {
    return data?.map((item: Item) => (
      <Route key={item.path} path={item.path} element={item.component}>
        {item?.children != null &&
          item?.children.length > 0 &&
          RouteMap(item.children)}
      </Route>
    ));
  };

  return (
    <>
      <div id="page">
        <BrowserRouter>
          {/* Suspense页面懒加载加载，会有延迟 使用了Suspense可优化交互 */}
          <Suspense fallback={LoadingElement}>
            <Routes>{RouteMap(routesData)}</Routes>
          </Suspense>
        </BrowserRouter>
      </div>
      {/* 导航 */}
      <Tabbar />
    </>
  );
};

export default AppRouter;
