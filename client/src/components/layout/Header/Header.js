import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color='secondary' dark className='py-2 pr-5 rounded'>
        <NavbarBrand href='/'>Ads App</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href='/'><Button color='secondary'>Home</Button></NavLink>
            
          </NavItem>
          <NavItem><NavLink href='/register'><Button color='warning'>Sign up</Button></NavLink></NavItem>
          <NavItem><NavLink href='/login'><Button color='success'>Sign in</Button></NavLink></NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;