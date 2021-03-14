import React from "react";
import styled from "styled-components";
import AppWrapper from "../Wrappers/AppWrapper";

const Navbar = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  font-size: 1.6rem;
  display: flex;
  color: #1d3557;
  align-items: center;
`;
const NavLogo = styled.h2`
  margin-right: auto;
`;
const Nav = styled.nav``;
const LinkNav = styled.a`
  color: inherit;
  font-weight: 600;
  font-size: 1.8rem;
  padding: 1.5rem;
  text-decoration: none;
  transition: all .4s;
  &:hover{
    color: #E63946;
  }
`;
const Navigation = () => {
  return (
    <AppWrapper>
      <Navbar>
        <NavLogo>Singala</NavLogo>
        <Nav>
          <LinkNav href="/">Inicio</LinkNav>
          <LinkNav href="/">Servicos</LinkNav>
          <LinkNav href="/">Produtos</LinkNav>
          <LinkNav href="/">Contacte-nos</LinkNav>
        </Nav>
      </Navbar>
    </AppWrapper>
  );
};

export default Navigation;
