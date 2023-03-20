import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const Header = () => {
  return (
    <Navbar bg='secondary' variant='dark' className='py-2 p-5 rounded'>
      <Navbar.Brand href='/'>Ads App</Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          <Nav.Link as={NavLink} to='/'><Button color='secondary'>Home</Button></Nav.Link>
          <Nav.Link as={NavLink} to='/register'><Button color='warning'>Sign up</Button></Nav.Link>
          <Nav.Link as={NavLink} to='/login'><Button color='success'>Sign in</Button></Nav.Link>
          <Nav.Link as={NavLink} to='/logout'><Button color='danger'>Sign out</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;