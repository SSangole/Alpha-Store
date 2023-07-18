import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "../components/CartAmountToggle";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cartcontext";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  return (
    <Wrapper>
      <div className="colors">
        Colors:
        {colors.map((currCol, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: currCol }}
              className={color === currCol ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(currCol)}
            >
              {color === currCol ? <FaCheck className="check" /> : null}
            </button>
          );
        })}
      </div>
      <div className="cart-amount-toggle">
        <CartAmountToggle
          amount={amount}
          setIncrease={() => setIncrease()}
          setDecrease={() => setDecrease()}
        />
      </div>

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button>Add to cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .btnStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;

    &:hover {
      opacity: 1;
    }
  }

  .check {
    color: white;
    min-inline-size: fit-content;
  }

  .active {
    opacity: 1;
  }
`;
export default AddToCart;
