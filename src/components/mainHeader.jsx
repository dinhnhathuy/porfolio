import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // If using React Router

const HeaderContainer = styled.header`
  position: fixed; /* Sticky header */
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: background-color 0.3s ease; /* Smooth transition on scroll */

  /* Add shadow on scroll */
  box-shadow: ${props  => props.isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled(Link)` 
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const Contact = styled.div`
  font-size: 0.9rem;
  color: #fff;
`;




const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo to="/">Huyted</Logo> {/* Link to homepage */}
      <Nav>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/social">Social</NavLink>
      </Nav>
      <Contact>huyted.dev@example.com</Contact> {/* Replace with your email */}
    </HeaderContainer>
  );
};

export default MainHeader;