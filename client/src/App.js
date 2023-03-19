import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { loadAdsRequest } from './redux/adsRedux';
import AdBox from './components/features/Ad/Ad';
import AddAd from './components/features/AddAd/AddAd';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import Register from './components/features/Register/Register';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAdsRequest())
  }, [dispatch]);

  return (
    <MainLayout>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ads/:id' element={<AdBox />} />
          <Route path='/ads/add' element={<AddAd />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        </Container>
    </MainLayout>
  )
};

export default App;
