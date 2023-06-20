import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h4>Trusted By 1000+ Companies</h4>
        <div className="brand-section-slider">
          {/* trusted brands */}
          <div className="slide">
            <img
              src="https://inkbotdesign.com/wp-content/uploads/2012/09/Walmart-Logo-Design.png?ezimgfmt=rs%3Adevice%2Frscb15-1"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://inkbotdesign.com/wp-content/uploads/2012/09/Shell-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://inkbotdesign.com/wp-content/uploads/2012/09/Microsoft-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://inkbotdesign.com/wp-content/uploads/2012/09/Google-Logo-Design.jpg?ezimgfmt=ng:webp/ngcb15"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://inkbotdesign.com/wp-content/uploads/2012/09/IBM-Company-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: aliceblue;
  padding: 2rem;
  img {
    width: auto;
    height: 3rem;
  }

  .container {
    text-align: center;
  }

  .brand-section-slider {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
  }
`;
export default Trusted;
