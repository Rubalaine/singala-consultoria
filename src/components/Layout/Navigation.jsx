import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import AppWrapper from "../Wrappers/AppWrapper";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
const comeFromRight = keyframes`
    from{
      transform: translateX(1000px);
      /* opacity: 0; */
    }
    to{
      transform: translateX(0);
      opacity: 1;
    }
`;
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
const Nav = styled.nav`
  transition: all 0.3s;
  @media screen and (max-width: 640px) {
    background-color: #2161fb;

    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    opacity: ${(props) => (props.visible ? 1 : 0)};
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 35rem;
    padding: 2rem;
    animation: ${comeFromRight} 0.4s;
  }
`;
const LinkNav = styled.a`
  color: inherit;
  font-weight: 600;
  font-size: 1.8rem;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    color: #e63946;
  }
`;
const Icon = styled.i`
  z-index: 69;
  position: relative;
  color: currentColor;
  display: none;
  font-size: 2.5rem;
  @media screen and (max-width: 640px) {
    display: inline-block;
  }
`;
const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <AppWrapper>
      <Navbar>
        <NavLogo>Singala</NavLogo>

        <Nav visible={clicked}>
          <LinkNav href="/">Inicio</LinkNav>
          <LinkNav href="/">Servicos</LinkNav>
          <LinkNav href="/">Produtos</LinkNav>
          <LinkNav href="/">Contacte-nos</LinkNav>
        </Nav>
        <Icon onClick={() => setClicked(!clicked)}>
          {clicked ? <MdClose /> : <FaBars />}
        </Icon>
      </Navbar>
    </AppWrapper>
  );
};

export default Navigation;
