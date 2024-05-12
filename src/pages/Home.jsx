import { Carousel } from "../components/Carousel/Carousel";
import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <CategoryCard />
    </>
  );
};
