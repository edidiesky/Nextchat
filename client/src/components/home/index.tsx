import Hero from "./Hero";
import About from "./About";
import TopCompanies from "./TopCompanies";
import Reviews from "./Reviews";
import Newsletter from "../common/Newsletter";
// Newsletter
import Header from "../common/Header";
import Footer from "../common/Footer";
import SmoothScroll from "@/constants/SmoothScroll";
const HomeIndex = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <About />
      <TopCompanies />
      <Reviews />
      <Newsletter />
      <Footer />
    </SmoothScroll>
  );
};

export default HomeIndex;
