import React, { type ReactNode, useLayoutEffect, useState } from 'react';
import { ConfigProvider, theme, Switch } from 'antd';
import utils from '@/models/utils';
const { useToken } = theme;

interface AppPageType {
  children: ReactNode;
}

const algorithmList: any = {
  dark: theme.darkAlgorithm,
  light: theme.defaultAlgorithm,
};

const App: React.FC<AppPageType> = (props) => {
  const { theme: themeType, setTheme } = utils.useContainer();
  const { token } = useToken();
  const [enableDarkMode, setEnableDarkMode] = useState(themeType === 'light');
  useLayoutEffect(() => {
    setTheme(enableDarkMode ? 'light' : 'dark');
  }, [enableDarkMode]);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = token.colorBgBase;
  }, [token.colorBgBase]);

  return (
    <>
      <Switch
        checkedChildren="白"
        unCheckedChildren="黑"
        checked={enableDarkMode}
        onChange={(v) => {
          setEnableDarkMode(v);
        }}
      />
      {props.children} {token.colorPrimaryBg}
    </>
  );
};

const AppPage: React.FC<AppPageType> = (props) => {
  const { theme: themeType } = utils.useContainer();
  // colorPrimary // 主题色
  // colorSuccess // 成功色
  // colorWarning // 警告色
  // colorError // 危险/报错

  // colorWhite // 不随主题变化的纯白色
  // colorText 文本颜色
  // colorTextSecondary // 辅助文本/第二梯度的文本色

  // colorBorder // 边框
  // colorBgElevated// 盒子容器背景
  // colorBgBase // 背景颜色

  return (
    <ConfigProvider
      theme={{
        algorithm: [algorithmList[themeType]],
      }}
    >
      <App>{props.children}</App>
    </ConfigProvider>
  );
};
export default AppPage;
