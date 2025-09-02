import React from 'react'; // Импорт библиотеки React для возможности создавать React-компоненты и использовать JSX
import { Layout, Menu } from 'antd'; // Импорт компонентов Layout и Menu из библиотеки Ant Design для построения интерфейса
/*import { // Импорт иконок из библиотеки Ant Design icons для использования в меню
  UserOutlined,
  LaptopOutlined,
} from '@ant-design/icons';*/

const { Sider } = Layout; // Деструктуризация: выделяем компонент Sider из Layout для удобства использования в коде

const Sidebar: React.FC = () => { // Объявление функционального React-компонента Sidebar с типизацией React.FC
  const items = [ // Определение массива объектов, описывающих пункты меню для Sidebar
    {
      key: '1', // Уникальный ключ для первого пункта меню
      // icon: <UserOutlined />, // Иконка пользователя для первого пункта меню
      label: 'Межбиржевые', // Текстовая метка первого пункта меню
    },
    {
      key: '2', // Ключ второго пункта меню
      // icon: <LaptopOutlined />, // Иконка ноутбука для второго пункта меню
      label: 'Внутрибиржевые', // Метка второго пункта меню
    },
  ];

  return (
    <Sider width={200}  className="site-layout-background"> {/* Компонент Sider с шириной 200px и CSS классом для оформления */}
      <Menu mode="inline" defaultSelectedKeys={['1']} items={items} /> {/* Меню с вертикальной ориентацией (inline), где указаны пункты из items и выбран первый по умолчанию */}
    </Sider>
  );
};

export default Sidebar; // Экспорт компонента Sidebar по умолчанию для использования в других частях приложения