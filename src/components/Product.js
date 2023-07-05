import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = (currElem) => {
  const { id, name, image, price, category } = currElem;
  console.log("feature recieved", id, name, image, price, category);
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/:${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price">{price}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 10rem;
    height: auto;
  }

  .caption {
    width: fit-content;
    padding: 0.5rem 0.5rem;
    position: absolute;
    top: -9rem;
    left: 5rem;
    background-color: white;
    border-radius: 10px;
    text-align: center;
  }
`;
export default Product;
