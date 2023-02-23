import React, { type ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import utils from '@/models/utils';
import Layout from '@/Layout';

interface AppPageType {
  children: ReactNode;
}

const algorithmList: any = {
  dark: theme.darkAlgorithm,
  light: theme.defaultAlgorithm,
};

const AppPage: React.FC<AppPageType> = (props) => {
  const { theme: themeType } = utils.useContainer();

  return (
    <ConfigProvider
      theme={{
        algorithm: [algorithmList[themeType]],
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};
export default AppPage;
