import FeatureProduct from "../components/FeatureProduct";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
  const headingName = {
    name: "Alpha Store",
  };
  return (
    <>
      <HeroSection headingName={headingName} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
