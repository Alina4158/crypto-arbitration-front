import React from 'react'; // Импорт библиотеки React для создания компонентов и использования JSX
import { Layout } from 'antd'; // Импорт компонента Layout из Ant Design для построения структуры страницы
import { useNavigation } from './hooks/useNavigation'; // Импорт кастомного хука для управления навигацией
import Navbar from './components/Navbar/Navbar'; // Импорт компонента Navbar из соответствующего файла
import Sidebar from './components/Sidebar/Sidebar'; // Импорт компонента Sidebar из соответствующего файла
import CustomContent from './components/MainContent/MainContent'; // Импорт компонента CustomContent из соответствующего файла

const App: React.FC = () => { // Объявление функционального React-компонента App с типизацией React.FC
                              // Использование кастомного хука для управления выбранным пунктом меню
  const { selectedKey, setSelectedKey } = useNavigation();

  return (
    // Основной контейнер Layout с минимальной высотой на всю высоту окна браузера
    <Layout style={{ minHeight: '100vh', minWidth: '100vw'}}>
      <Navbar /> {/* Вставка компонента Navbar — верхняя навигационная панель */}
      {/* Вложенный Layout, занимающий всё оставшееся пространство */}
      <Layout style={{ flex: 1, display: 'flex' }}>
        {/* Передаем состояние навигации в Sidebar */}
        <Sidebar selectedKey={selectedKey} onSelect={setSelectedKey} />
        {/* Передаем выбранный ключ в MainContent */}
        <CustomContent selectedKey={selectedKey} />
      </Layout>
    </Layout>
  );
};

export default App; // Экспорт главного компонента App для использования в index.tsx и других местах