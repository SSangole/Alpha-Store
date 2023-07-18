import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
const FilterSection = () => {
  const {
    filters: { text, color, price, maxPrice, minPrice, category },
    updateFilterValue,
    all_products,
    clearFilter,
  } = useFilterContext();

  const getUniqueData = (product, category) => {
    let newValue = product.map((currElem) => {
      return currElem[category];
    });

    if (category === "colors") {
      newValue = newValue.flat();
    }

    return (newValue = ["All", ...new Set(newValue)]);
  };

  // Extracting unique data  for the category
  const categoryData = getUniqueData(all_products, "category");
  const colorData = getUniqueData(all_products, "colors");
  const companyData = getUniqueData(all_products, "company");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>

      <div>
        <h3>Category</h3>
        <div className="filter-category">
          {categoryData.map((currElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                className={
                  currElem === category
                    ? "active-category category-btn"
                    : "category-btn"
                }
                value={currElem === "All" ? "all" : currElem}
                onClick={updateFilterValue}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <div>
          <form action="#">
            <label htmlFor="company"></label>
            <select name="company" id="company" onClick={updateFilterValue}>
              {companyData.map((currElem, index) => {
                return (
                  <option
                    key={index}
                    name="company"
                    value={currElem === "All" ? "all" : currElem}
                  >
                    {currElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>

      <div>
        <h3>Color</h3>
        <div className="filter-color">
          {colorData.map((currElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="color"
                value={currElem === "All" ? "all" : currElem}
                onClick={updateFilterValue}
                className={color === currElem ? "btn active" : "btn"}
                style={{ backgroundColor: currElem }}
              >
                {currElem !== "All" ? (
                  color === currElem ? (
                    <FaCheck className="check" />
                  ) : null
                ) : (
                  "All"
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          name="price"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="clear-filter">
        <Button onClick={clearFilter}>Clear Filter</Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-left: 2rem;

  .filter-category {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .category-btn {
    display: flex;
    padding: 1rem 1rem;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      background-color: rgb(220, 218, 216);
    }
  }

  input {
    padding: 1rem;
    border-radius: 5px;
  }

  .active-category {
    background-color: rgb(220, 218, 216);
  }

  .filter-color {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  button {
    border: none;
    background-color: white;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: none;
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
    border: 1px solid black;
    opacity: 1;
  }
`;

export default FilterSection;
