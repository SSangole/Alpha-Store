import { useState } from "react";
import styled from "styled-components";

const SingleProductImages = ({ images = [{ url: "" }] }) => {
  const [currImage, setCurrImage] = useState(0);
  return (
    <Wrapper>
      <div className="image-flex">
        <div className="grid grid-four-rows">
          {images.map((currElem, index) => {
            return (
              <figure key={index}>
                <img
                  src={currElem.url}
                  alt={currElem.filename}
                  className="box-image--style"
                  key={index}
                  onClick={() => setCurrImage(index)}
                />
              </figure>
            );
          })}
        </div>
        <div className="big-image">
          <img src={images[currImage].url} alt={images[currImage].filename} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;

  .image-flex {
    display: flex;
  }

  .grid-four-rows {
    grid-template-rows: repeat(4, 1fr);
  }

  img {
    width: 8rem;
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
  }

  .big-image {
    display: flex;
    justify-content: center;

    img {
      width: 13rem;
    }
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    .image-flex {
      flex-direction: column-reverse;
      margin: 0 1rem;

      .grid-four-rows {
        display: flex;

        figure {
          margin: 1rem 0;

          img {
            width: 100%;
          }
        }
      }
      .big-image {
        img {
          width: 100%;
        }
      }
    }
  }
`;
export default SingleProductImages;
