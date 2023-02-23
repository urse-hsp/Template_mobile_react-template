import React, { type ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import utils from '@/models/utils';

interface IndexType {
  children: ReactNode;
}

const algorithmList: any = {
  dark: theme.darkAlgorithm,
  light: theme.defaultAlgorithm,
};

const AppPage: React.FC<IndexType> = (props) => {
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
