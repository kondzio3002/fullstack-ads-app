import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AdBox from './components/features/Ad/Ad';
import AddAd from './components/features/AddAd/AddAd';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import Register from './components/features/Register/Register';
import Login from './components/features/Login/Login';
import Logout from './components/features/Logout/Logout';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {

  return (
    <Container>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ads/:id' element={<AdBox />} />
          <Route path='/ads/add' element={<AddAd />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Container>
  )
};

export default App;
