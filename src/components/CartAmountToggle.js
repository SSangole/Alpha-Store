import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <Wrapper>
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .amount-toggle {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  button {
    border: none;
    background-color: white;
  }
`;
export default CartAmountToggle;
