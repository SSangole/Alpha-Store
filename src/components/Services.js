import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="grid grid-three-columns container">
        <div className="service-column">
          <TbTruckDelivery className="service-icon" />
          <p>Super Fast and Free Delivery </p>
        </div>
        <div className="service-middle-column">
          <div className="middle-column-service">
            <MdSecurity className="service-icon" />
            <p> Non-contract Shipping </p>
          </div>
          <div className="middle-column-service">
            <GiReceiveMoney className="service-icon" />
            <p> Money-back Guaranteed </p>
          </div>
        </div>
        <div className="service-column">
          <RiSecurePaymentLine className="service-icon" />
          <p>Super Secure Payment Gateway</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 80%;
  margin: 0 10%;

  p {
    font-size: 10px;
  }
  .container {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }

  .service-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(220, 218, 216);
    width: 10rem;
    height: 8rem;
    border-radius: 10px;
  }

  .service-icon {
    font-size: 1.5rem;
    color: blue;
    background-color: white;
    border-radius: 50%;
  }

  .service-middle-column {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.5rem;
    width: 9.5rem;
    height: 8rem;
    .middle-column-service {
      display: flex;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      padding: 0.5rem;
      background-color: rgb(220, 218, 216);
    }
  }
`;
export default Services;
