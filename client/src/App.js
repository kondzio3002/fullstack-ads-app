import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdBox from './components/features/AdBox/AdBox';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <MainLayout>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ads/:id' element={<AdBox />} />
        </Routes>
        </Container>
    </MainLayout>
  )
};

export default App;
