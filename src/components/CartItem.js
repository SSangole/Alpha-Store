import React from "react";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";

const CartItem = ({ id, name, image, price, amount, color, max }) => {
  const { removeItems, setDecrease, setIncrease } = useCartContext();
  return (
    <Wrapper>
      <div className="cart-image--name">
        <img src={image} alt={id} />
        <div className="product-info">
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="align-center cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* quantity */}
      <div className="align-center">
        <CartAmountToggle
          amount={amount}
          setIncrease={() => setIncrease(id)}
          setDecrease={() => setDecrease(id)}
        />
      </div>

      {/* Subtotal */}
      <div className="align-center cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* Delete */}
      <div className="align-center">
        <FaTrash onClick={() => removeItems(id)} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 1rem;
  gap: 0.5rem;

  .cart-image--name {
    display: flex;
  }

  p {
    margin: 0;
  }

  .product-info {
    padding-left: 1rem;
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  .align-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color-div {
    display: flex;
    gap: 1rem;
    align-items: center;
    .color-style {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 1rem;
    gap: 0.5rem;
    .cart-hide {
      display: none;
    }
  }
`;
export default CartItem;
