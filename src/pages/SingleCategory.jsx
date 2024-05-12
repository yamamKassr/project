import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Axios } from "../Api/Axios";
import { CAT, SINGLECAT, STROES } from "../Api/api";
import party from "../assets/Category/Party.jpg";
import { StoreCard } from "../components/StoreCard/StoreCard";

export const SingleCategory = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [singleCategory, setSingleCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`${SINGLECAT}/${id}`).then((data) =>
      setSingleCategory(data.data.category)
    );
  }, []);
  useEffect(() => {
    Axios.get(`${CAT}/${id}/${STROES}`).then((data) =>
      setCategoryItems(data.data)
    );
  }, []);

  const showStores = categoryItems?.map((store, key) => (
    <>
      <StoreCard
        key={key}
        title={store.name}
        rate={store.rating}
        img={party}
        id={store.id}
      />
      <StoreCard
        key={key}
        title={store.name}
        rate={store.rating}
        img={party}
        id={store.id}
      />
      <StoreCard
        key={key}
        title={store.name}
        rate={store.rating}
        img={party}
        id={store.id}
      />
      <StoreCard
        key={key}
        title={store.name}
        rate={store.rating}
        img={party}
        id={store.id}
      />
    </>
  ));
  return (
    <div className="bg-secondary pb-5 f-cardo">
      <div className="position-relative w-100">
        <div
          style={{
            height: "300px",
            backgroundImage: `url('${party}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <h1 className="position-absolute top-50 start-50 translate-middle text-white">
          {singleCategory?.name}
        </h1>
      </div>
      <Container style={{ marginTop: "200px" }}>
        <h1 className="text-center fs-1 mt-5 text-black ">
          {singleCategory?.name}
        </h1>

        <div className="d-flex align-items-center justify-content-center mt-5 flex-wrap row-gap-5">
          {showStores}
        </div>
      </Container>
    </div>
  );
};
