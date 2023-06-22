import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-columns">
          <div>
            <p>Ready to get started? </p>
            <p>Talk to us today</p>
          </div>
          <div>
            <Button>
              <NavLink className="footer-button" to="/contact">
                Get Started
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
      {/* main footer */}
      <div className="grid grid-four-columns container">
        <div className="footer-about">
          <p>Aplha Store</p>
          <p>We provide the quality</p>
        </div>
        <div className="footer-subscribe">
          <p>Subscribe to get important updates</p>
          <form action="#">
            <input type="email" placeholder="Your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>

        <div className="footer-social">
          <p>Follow us on</p>
          <div className="footer-social-icons">
            <div>
              <FaDiscord className="icon" />
            </div>
            <div>
              <FaInstagram className="icon" />
            </div>
            <div>
              <FaTwitter className="icon" />
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <p>Call us</p>
          <a href="tel:1234567890">+91 1234567890</a>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <div className="conatainer grid grid-two-columns">
          <p>@{new Date().getFullYear()} Alpha Store. All Rights Reserved</p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: rgb(3, 3, 63);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .contact-short {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    transform: translateY(-50%);
    width: 70%;
    margin: 0 15%;
  }
  .grid {
    width: fit-content;
    margin: 1rem 6rem;
    height: fit-content;
    border-radius: 5px;
    padding: 0.5rem 2rem;
  }

  .container {
    margin: 0;
    color: white;
  }

  input {
    display: block;
    margin: 2px;
  }

  .footer-social-icons {
    display: flex;
    gap: 1rem;
  }
  .grid-two-columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-bottom {
    color: white;
    // width: -webkit-fill-available;
    text-align: center;
  }

  .footer-button {
    font-size: 0.8rem;
  }

  p {
    line-height: 5px;
    text-wrap: nowrap;
  }

  a {
    text-decoration: none;
  }

  hr {
  }
`;
export default Footer;
