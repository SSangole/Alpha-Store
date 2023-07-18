import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const About = () => {
  const headingName = {
    name: "Alpha E-Commerce",
  };
  return (
    <Wrapper>
      <HeroSection headingName={headingName} />;
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 5rem;
`;
export default About;
