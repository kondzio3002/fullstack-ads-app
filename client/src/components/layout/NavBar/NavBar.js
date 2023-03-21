import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getUser } from '../../../redux/dataRedux';

const NavBar = () => {
  const user = useSelector(getUser);

  return (
    <Navbar bg='secondary' variant='dark' className='py-2 p-5 rounded'>
      <Navbar.Brand href='/'>Ads App</Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Nav>
          <Nav.Link as={NavLink} to='/'><Button color='secondary'>Home</Button></Nav.Link>
          { user === null && <Nav.Link as={NavLink} to='/register'><Button color='warning'>Sign up</Button></Nav.Link> }
          { user === null && <Nav.Link as={NavLink} to='/login'><Button color='success'>Sign in</Button></Nav.Link> }
          { user !== null && <Nav.Link as={NavLink} to='/logout'><Button color='danger'>Sign out</Button></Nav.Link> }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;