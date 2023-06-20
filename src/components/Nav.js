import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <NavWrapper>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <div className="navbar-lists">
          <span>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/Products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> 10 </span>
            </NavLink>
          </span>
        </div>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.section`
  @media (max-width: 480px) {
    .navbar {
      display: block;
      width: 100%;

      .mobile-navbar-btn {
        font-size: 2rem;
        display: block;
        cursor: pointer;
        position: absolute;
        right: 10%;
        top: 30%;
        z-index: 9999;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 2rem;
      z-index: 9999;
      color: black;
    }

    .active .mobile-nav-icon[name="close-outline"] {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.2s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      transform-origin: 0;
      z-index: 999;
      transition: all 0.2s linear;
      background-color: #fff;

      .navbar-link {
        font-size: 1rem;
      }
    }
  }

  .navbar-lists {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .navbar-link:link,
  visited {
    font-size: 0.8rem;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    transition: color 0.3s linear;
  }

  .mobile-navbar-btn {
    display: none;
    background-color: white;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;
  }
  .cart-trolley {
    position: relative;
    font-size: 1.5rem;
  }

  .cart-total--item {
    width: 1rem;
    height: 1rem;
    font-size: 0.7rem;
    position: absolute;
    background-color: aqua;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    bottom: 70%;
    left: 60%;
  }

  .main-header {
    display: yellow;
    padding: 4%;
    height: 10%;
    background-color: "green";
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`;

export default Nav;
