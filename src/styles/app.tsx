import React, { type ReactNode } from 'react';
// import utils from '@/models/utils';

interface AppPageType {
  children: ReactNode;
}

const AppPage: React.FC<AppPageType> = (props) => {
  // const { theme: themeType } = utils.useContainer();
  return <>{props.children}</>;
};
export default AppPage;
