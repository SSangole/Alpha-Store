import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. but you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/Alpha-Store">
            <Button>Go back to Homepage</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 5rem 0;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
  }
`;
export default ErrorPage;
