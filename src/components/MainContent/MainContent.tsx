import React from 'react';
import { Layout } from 'antd';
import type {MenuKey} from '../../types';
import { InterExchangeTable, IntraExchangeTable } from './Tables';

const { Content } = Layout;

interface ContentProps {
  selectedKey: MenuKey;
}

const CustomContent: React.FC<ContentProps> = ({ selectedKey }) => {
  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <InterExchangeTable />;
      case '2':
        return <IntraExchangeTable />;
      case '3':
        return (
          <div>
            <h2 style={{ color: '#1890ff' }}>Навигация 3</h2>
            <p>Содержимое для третьего пункта меню</p>
            <p>Здесь можно добавить дополнительную информацию или другие компоненты.</p>
          </div>
        );
      default:
        return (
          <div>
            <h1>Добро пожаловать!</h1>
            <p>Выберите пункт меню слева для отображения данных.</p>
          </div>
        );
    }
  };

  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 'calc(100vh - 64px)', // Вычитаем высоту header
        background: '#fff',
        width: '100%',
        overflow: 'auto',
      }}
    >
      {renderContent()}
    </Content>
  );
};

export default CustomContent;