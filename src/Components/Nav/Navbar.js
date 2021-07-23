import React from 'react';
import Burger from './Burger';

const Nav = styled.nav`
  // css goes here
`;
 
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar