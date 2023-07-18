import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="header">
        <img src="/image/Alphastore.png" alt="Logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 4% 4% 2% 4%;
  height: 10%;
  margin-bottom: 2rem;
  background-color: rgb(98 84 243);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    width: 8rem;
  }
`;

export default Header;
