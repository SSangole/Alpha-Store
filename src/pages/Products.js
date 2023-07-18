import styled from "styled-components";
import Sort from "../components/Sort";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <Wrapper>
      <div className="grid grid-filter-columns">
        <div className="filter-section">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 5rem;
  .grid-filter-columns {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-columns {
      grid-template-columns: 1fr;
    }
  }
`;
export default Products;
