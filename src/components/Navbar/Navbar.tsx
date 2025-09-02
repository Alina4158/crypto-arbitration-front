import React from 'react'; // Импорт библиотеки React, чтобы можно было использовать JSX и React API
import { Layout, Menu } from 'antd'; // Импорт компонентов Layout и Menu из библиотеки Ant Design
const { Header } = Layout; // Деструктуризация: выделяем компонент Header из Layout для удобства использования

const Navbar: React.FC = () => ( // Объявление функционального компонента Navbar с типом React.FC (React Functional Component)
  <Header className="header"> {/* Используем компонент Header с классом для стилевой настройки */}
    <div className="logo" /> {/* Пустой блок div с классом logo, например, для вывода логотипа */}
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}> {/* Меню с темной темой, горизонтальной ориентацией и выбранным по умолчанию первым пунктом */}
      <Menu.Item key="1">Связки</Menu.Item> {/* Пункт меню с ключом 1 и текстом "Главная" */}
    </Menu>
  </Header>
);

export default Navbar; // Экспорт компонента Navbar по умолчанию, чтобы его можно было импортировать в других файлах