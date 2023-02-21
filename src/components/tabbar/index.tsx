import React from 'react';
import { Badge, TabBar, SafeArea } from 'antd-mobile';
import './index.scss';

const tabs = [
  {
    key: 'home',
    title: '首页',
    badge: Badge.dot,
  },
  {
    key: 'todo',
    title: '待办',
    badge: '5',
  },
  {
    key: 'message',
    title: '消息',
    badge: '99+',
  },
  {
    key: 'personalCenter',
    title: '我的',
  },
];

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const TabbarView: React.FC<IndexType> = () => {
  return (
    <div className="app-tab-bar">
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item badge={item.badge} key={item.key} title={item.title} />
        ))}
      </TabBar>
      <SafeArea position="bottom" />
    </div>
  );
};
export default TabbarView;
