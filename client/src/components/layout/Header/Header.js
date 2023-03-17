import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color='secondary' dark className='py-2'>
        <NavbarBrand href='/'>Ads App</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;