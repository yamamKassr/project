import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../Api/Axios";
import { SINGLESTORE } from "../Api/api";
import { Carousel } from "react-bootstrap";
import sallon from "../assets/images/Sallon.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const SingleStore = () => {
  const { storeId } = useParams();
  const [singleStore, setSingleStore] = useState({});

  console.log(singleStore);

  useEffect(() => {
    Axios.get(`${SINGLESTORE}/${storeId}`).then((data) =>
      setSingleStore(data.data)
    );
  }, []);
  return (
    <>
      <Header />

      <div className="d-flex align-items-center flex-wrap row-gap-4">
        <div className="col-lg-5 col-12">
          <div className="ps-lg-4 p-3">
            <h1>Big Sallon</h1>

            <p className="opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique qui fugiat voluptates commodi rerum est, illo cum
              reiciendis, cupiditate maxime culpa in quo, ratione error repellat
              ipsum adipisci deserunt vitae.
            </p>
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <div>
                <FontAwesomeIcon icon={faLocationDot} color="gray" />
                <span className="opacity-75 ms-2">Aleepo</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faPerson} color="gray" />
                <span className="opacity-75 ms-2">Rayan</span>
              </div>{" "}
              <div>
                <FontAwesomeIcon icon={faPhone} color="gray" />
                <span className="opacity-75 ms-2">+963 941 458 456</span>
              </div>
            </div>

            <p className="mt-4">
              <span className="text-primary">Price:</span> 50000 SYP
            </p>

            <div className="d-flex align-items-center justify-content-center flex-wrap gap-5 mt-5">
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>{" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-black opacity-50"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12">
          <Carousel
            indicators={false}
            className="bootstrap-car"
            style={{ height: "100%", marginTop: "0" }}
            prevIcon={
              <span className="prev-icon d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            }
            nextIcon={
              <span className="next-icon d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            }
          >
            <Carousel.Item>
              <img src={sallon} className="w-100 object-fit-cover" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={sallon} className="w-100 object-fit-cover" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};
