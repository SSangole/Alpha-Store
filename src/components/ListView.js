import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div>
        {products.map((currElem) => {
          const { id, name, image, price, description } = currElem;

          return (
            <>
              <div className="grid grid-two-columns" key={id}>
                <figure>
                  <img src={image} alt={name} />
                </figure>
                <div className="card-name">
                  <h3>{name}</h3>
                  <p>
                    <FormatPrice price={price} />
                  </p>
                  <p>{description.slice(0, 80)}...</p>

                  <NavLink to={`/singleproduct/${id}`}>
                    <Button>Read More</Button>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  max-width: 120rem;

  .grid-two-columns {
    margin: 1rem 0;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    position: relative;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
  }

  img {
    max-width: 100%;
    height: 12rem;
    transition: all 0.2s linear;
  }
`;
export default ListView;
