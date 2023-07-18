import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="grid grid-three-columns">
        {products.map((currElem) => {
          return <Product key={currElem.id} {...currElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-three-columns {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  figure {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-data-flex {
    justify-content: space-around;
  }
`;
export default GridView;
