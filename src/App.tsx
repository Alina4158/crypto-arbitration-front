import React from 'react'; // Импорт библиотеки React для создания компонентов и использования JSX
import { Layout } from 'antd'; // Импорт компонента Layout из Ant Design для построения структуры страницы

import Navbar from './components/Navbar/Navbar'; // Импорт компонента Navbar из соответствующего файла
import Sidebar from './components/Sidebar/Sidebar'; // Импорт компонента Sidebar из соответствующего файла
import CustomContent from './components/MainContent/MainContent'; // Импорт компонента CustomContent из соответствующего файла

const App: React.FC = () => ( // Объявление функционального React-компонента App с типизацией React.FC
  <Layout style={{ minHeight: '100vh', minWidth: '100vw'}}> {/* Основной контейнер Layout с минимальной высотой на всю высоту окна браузера */}
    <Navbar /> {/* Вставка компонента Navbar — верхняя навигационная панель */}
    <Layout style={{ flex: 1, display: 'flex' }}> {/* Вложенный Layout, занимающий всё оставшееся пространство, с внутренними отступами */}
      <Sidebar /> {/* Вставка компонента Sidebar — боковая панель навигации */}
      <CustomContent /> {/* Вставка компонента CustomContent — основной контент страницы */}
    </Layout>
  </Layout>
);

export default App; // Экспорт главного компонента App для использования в index.tsx и других местах
