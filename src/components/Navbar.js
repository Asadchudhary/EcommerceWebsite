import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  const Nav = styled.nav`
    .navbar-lists {
      display:flex;
      align-items:center;
      gap: 3rem;
      list-style:none;
      font-size: 1.5rem;
    
      }
      .navbar-link{
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
.cart-trolley-link{
    position: relative;
    .cart-trolly{
      
        font-size: 3rem;
        color: blue;
    }
    .cart-total{
        width:2rem;
        height:2rem;
        position: absolute;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -25%;
        left: 75%;
        background-color: ${({ theme }) => theme.colors.helper};
        color:#fff;
   
    }
}


    }
  `;
  return (
    <Nav>
      <ul className="navbar-lists">
        <li>
          <NavLink to="/" className="navbar-link ">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="navbar-link">
            Product
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="navbar-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="navbar-link cart-trolley-link">
            <AiOutlineShoppingCart className="cart-trolly" />
            <span className="cart-total">0</span>
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
