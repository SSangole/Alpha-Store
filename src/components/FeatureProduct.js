import styled from "styled-components";
import { useProductContext } from "../context/productcontext";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>......Loading</div>;
  }
  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-columns">
          {featureProducts.map((currElem) => {
            return <Product key={currElem.id} {...currElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80%;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default FeatureProduct;
