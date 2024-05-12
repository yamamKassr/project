import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import party from "../../assets/Category/Party.jpg";
import Carousel from "react-multi-carousel";
import { Axios } from "../../Api/Axios";
import { CAT } from "../../Api/api";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

export const CategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  console.log(categories);
  useEffect(() => {
    Axios.get(CAT).then((data) => setCategories(data?.data?.categories));
  }, []);

  const showCategories = categories?.map((category, key) => (
    <Link
      to={`/category/${category.id}`}
      key={key}
      className="lg:col-3 md:col-4 col-12 text-black text-decoration-none"
    >
      <img src={party} className="w-100" />
      <h5 className="text-center mt-2">{category?.name}</h5>
    </Link>
  ));

  return (
    <Container className="my-5">
      <div>
        <h1 className="mx-auto my-3 w-fit-content bg-primary text-white">
          Categories
        </h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={3000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="p-4"
        >
          {showCategories}
        </Carousel>
      </div>
    </Container>
  );
};
