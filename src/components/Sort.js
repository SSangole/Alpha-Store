import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { filter_products, setGridView, grid_view, sorting } =
    useFilterContext();
  return (
    <Wrapper>
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active" : "btn"}
          onClick={() => setGridView(true)}
        >
          <BsFillGridFill />
        </button>
        <button
          className={!grid_view ? "active" : "btn"}
          onClick={() => setGridView(false)}
        >
          <BsList />
        </button>
      </div>

      <div className="product-count">
        {filter_products.length} Products available
      </div>

      {/* sorting dropdown */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem;

  option {
    margin: 1rem 0;
  }
  .active {
    background-color: black;
    color: white;
  }

  .btn {
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;
export default Sort;
