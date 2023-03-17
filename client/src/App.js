import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';

const App = () => (
  <MainLayout>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </MainLayout>
);

export default App;
