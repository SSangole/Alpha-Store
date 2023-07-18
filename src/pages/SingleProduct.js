import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import styled from "styled-components";
import SingleProductImages from "../components/SingleProductImages";
import FormatPrice from "../Helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct } = useProductContext();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div>
        <div className="grid grid-two-columns">
          <div className="product-images">
            <SingleProductImages images={image} />
          </div>
          <div className="product-data">
            <h4>{name}</h4>
            <Star stars={stars} reviews={reviews} />
            <p className="product-price">
              MRP :
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-price product-real-price ">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>

            <div className="product-warranty">
              <div className="warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement </p>
              </div>
              <div className="warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> Alpha Delivered </p>
              </div>
              <div className="warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year warranty </p>
              </div>
            </div>

            <div className="product-availability">
              <p>
                Available:{" "}
                <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand : <span> {company} </span>
              </p>
            </div>

            <div>{stock > 0 && <AddToCart product={singleProduct} />}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 10rem;

  .product-images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 1rem;

    .product-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .product-price {
      font-weight: bold;
    }

    .product-real-price {
      color: blue;
    }

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    .grid-two-columns {
      display: block;
    }

    .product-data {
      padding: 0 1.5rem;
    }
  }
`;
export default SingleProduct;
