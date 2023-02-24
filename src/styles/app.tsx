import React, { type ReactNode, useState } from 'react';
import { SearchBar, Switch } from 'antd-mobile';
import utils from '@/models/utils';
interface AppPageType {
  children: ReactNode;
}

const AppPage: React.FC<AppPageType> = (props) => {
  const { theme: themeType, setTheme } = utils.useContainer();
  const [enableDarkMode, setEnableDarkMode] = useState(themeType === 'light');

  return (
    <>
      <Switch
        checked={enableDarkMode}
        onChange={(v) => {
          setEnableDarkMode(v);
          setTheme(enableDarkMode ? 'dark' : 'light');
        }}
      />
      <SearchBar placeholder="请输入内容" />
      {props.children}
    </>
  );
};
export default AppPage;
