import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  <>
    <Header />
    {children}
    <Footer />
  </>
};

export default MainLayout;