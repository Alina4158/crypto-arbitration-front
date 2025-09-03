import React from 'react';
import { Layout, Menu } from 'antd';
import type {MenuKey} from '../../types';
import { menuItems } from '../../data/mockData';

const { Sider } = Layout;

interface SidebarProps {
  selectedKey: MenuKey;
  onSelect: (key: string) => void;
  collapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
                                           selectedKey,
                                           onSelect,
                                           collapsed = false
                                         }) => {
  return (
    <Sider
      width={250}
      theme="dark"
      collapsed={collapsed}
      collapsible={false}
    >
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{
          height: '100%',
          borderRight: 0,
          paddingTop: '10px'
        }}
        theme="dark"
        onSelect={({ key }) => onSelect(key)}
        items={menuItems.map(item => ({
          key: item.key,
          icon: <span style={{ fontSize: '16px' }}>{item.icon}</span>,
          label: item.label,
        }))}
      />
    </Sider>
  );
};

export default Sidebar;