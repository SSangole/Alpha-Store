import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({ headingName }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-columns">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>{headingName.name}</h1>
            <p>
              Test out your products, messaging, and ideas before you launch, so
              you can find your future customers, optimize your conversion
              rates, and get people excited about your brand.
            </p>
            <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          {/* Homepage Image */}
          <div className="hero-section-image">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=900&t=st=1689703107~exp=1689703707~hmac=caa875fcd8d32c3c36b0f228896d92932c0f51ad08b41f9dfb32c356ba8ccff5"
                alt="Homepage"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem auto;
  margin-bottom: 2rem;
  img {
    min-width: 10rem;
    height: 25rem;
  }
  .hero-section-data {
    width: fit-content;
    text-align: -webkit-center;
    p {
      margin: 1rem 0;
      text-wrap: balance;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -2rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      margin: 0;
    }
    .grid {
      gap: 3rem;
      grid-template-columns: none;
    }
    .hero-section-image {
      width: 100%;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
