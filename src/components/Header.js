import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="header">
        Header
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 4%;
  height: 10%;
  background-color: "green";
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export default Header;
