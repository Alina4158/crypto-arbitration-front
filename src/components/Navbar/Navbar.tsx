import React from 'react';
import {Layout, Button, Menu} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

interface NavbarProps {
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
                                         collapsed = false,
                                         onToggleCollapsed
                                       }) => {
  return (
    <Header  className="header" style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      color: 'white',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {onToggleCollapsed && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onToggleCollapsed}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: 'white'
            }}
          />
        )}
          <div className="logo" /> {/* Пустой блок div с классом logo, например, для вывода логотипа */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}> {/* Меню с темной темой, горизонтальной ориентацией и выбранным по умолчанию первым пунктом */}
            <Menu.Item key="1">Связки</Menu.Item> {/* Пункт меню с ключом 1 и текстом "Главная" */}
          </Menu>
      </div>
        </Header>
  );
};

export default Navbar;