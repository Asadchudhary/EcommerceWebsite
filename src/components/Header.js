import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="Logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 20rem;
    width: 22rem;
    padding-top: 10%;
  }
`;

export default Header;
