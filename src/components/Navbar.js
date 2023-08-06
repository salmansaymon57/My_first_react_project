import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="w-25 h-25" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Rock & Roll
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </React.Fragment>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlack);
  .nav-link {
    margin-left: -36rem;
    color: var(--mainBar) !important;
    letter-spacing: 0.5rem;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;
