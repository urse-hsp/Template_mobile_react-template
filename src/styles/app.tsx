import React, { type ReactNode, useLayoutEffect, useState } from 'react';
import { SearchBar, Switch } from 'antd-mobile';
interface AppPageType {
  children: ReactNode;
}

const AppPage: React.FC<AppPageType> = (props) => {
  // const { theme: themeType } = utils.useContainer();

  const [enableDarkMode, setEnableDarkMode] = useState(true);
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      enableDarkMode ? 'dark' : 'light',
    );
  }, [enableDarkMode]);

  return (
    <>
      <Switch
        checked={enableDarkMode}
        onChange={(v) => {
          setEnableDarkMode(v);
        }}
      />
      <SearchBar placeholder="请输入内容" />
      {props.children}
    </>
  );
};
export default AppPage;
