import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/Alpha-Store">Home</NavLink>/ {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1rem;

  a {
    font-size: 1.5rem;
    text-decoration-line: none;
  }
`;

export default PageNavigation;
