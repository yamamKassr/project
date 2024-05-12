import { Carousel } from "../components/Carousel/Carousel";
import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <CategoryCard />
      <Footer />
    </>
  );
};
