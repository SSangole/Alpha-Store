import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (currElem) => {
  const { id, name, image, price, category } = currElem;
  console.log("feature recieved", id, name, image, price, category);
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <figcaption className="caption">{category}</figcaption>
            <img src={image} alt={name} />
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h5>{name}</h5>
              <p className="card-data--price">
                {<FormatPrice price={price} />}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  a {
    text-decoration: none;
  }
  .card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 17rem;
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

  figure {
    width: auto;
    position: relative;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 2.8rem;
      left: 0;
      width: 0;
      height: 90%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      padding-left: 10%;
      transform: scale(1.1);
    }
    img {
      max-width: 100%;
      margin-top: 1.5rem;
      height: 10rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: relative;
      top: 15%;
      left: 30%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 0.8rem;
      border-radius: 2rem;
    }
  }

  @media (max-width: 476px) {
    .card {
      margin: 1rem 0;
      img {
        height: 15rem;
        width: 18rem;
      }
    }
  }
`;
export default Product;
