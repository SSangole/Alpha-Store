import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  console.log(id, colors, stock);
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .btnStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

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

  button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;
  }
`;
export default AddToCart;
