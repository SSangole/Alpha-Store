import styled from "styled-components";
import { useCartContext } from "../context/cartcontext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import FormatPrice from "../Helpers/FormatPrice";
const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fees } = useCartContext();

  if (cart.length === 0) {
    return <EmptyCart>No Items in Cart</EmptyCart>;
  }
  return (
    <Wrapper>
      <div className="cart_heading grid grid-five-columns">
        <p className="align-center">Item</p>
        <p className="align-center cart-hide">Price</p>
        <p className="align-center">Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p className="align-center">Remove</p>
      </div>
      <hr />
      <div className="cart-itme">
        {cart.map((currElem) => {
          return <CartItem key={currElem.id} {...currElem} />;
        })}
      </div>
      <hr />

      <div className="cart-two-button">
        <NavLink to="/products">
          <Button>Continue Shopping</Button>
        </NavLink>
        <Button onClick={clearCart} className="clear-btn">
          Clear Cart
        </Button>
      </div>

      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>subtotal:</p>
            <p>
              <FormatPrice price={total_amount} />
            </p>
          </div>
          <div>
            <p>shipping fee:</p>
            <p>
              <FormatPrice price={shipping_fees} />
            </p>
          </div>
          <div>
            <p>order total:</p>
            <p>
              <FormatPrice price={total_amount - shipping_fees} />
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyCart = styled.section`
  diplay: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 10rem;
`;

const Wrapper = styled.section`
  margin-bottom: 5rem; 

  .grid-five-columns {
    grid-template-columns: repeat(5, 1fr);
  }

  .align-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-two-button{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clear-btn:hover {
  background-color: red;
  }

  .order-total--amount {
    width: 100%;
    margin: 2rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    
    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      div{
        display: flex;
        font-weight: bold;
        gap: 3.2rem;
        justify-content: space-between;
      }
    }

  }
  @media (max-width: 700px) {
    .grid-five-columns {
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 1rem;
      gap: 0.5rem;
      .cart-hide {
        display: none;
      }
    }
`;
export default Cart;
