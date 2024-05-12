import "./Carousel.css";

import firstImage from "../../assets/images/img1.jpeg";
import SecondImage from "../../assets/images/img2.jpg";
import ThirdImage from "../../assets/images/img3.jpg";
import ForthImage from "../../assets/images/img4.jpg";
import { useEffect, useState } from "react";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [type, setType] = useState("");

  const carouselItems = [
    {
      image: firstImage,
      title: "Your perfect party at the click of a button!",
      description:
        "We offer full-service event planning and coordination and help you create a memorable party that fits your budget",
    },
    {
      image: SecondImage,
      title: "Your perfect party at the click of a button!",
      description:
        "We offer full-service event planning and coordination and help you create a memorable party that fits your budget",
    },
    {
      image: ThirdImage,
      title: "Your perfect party at the click of a button!",
      description:
        "We offer full-service event planning and coordination and help you create a memorable party that fits your budget",
    },
    {
      image: ForthImage,
      title: "Your perfect party at the click of a button!",
      description:
        "We offer full-service event planning and coordination and help you create a memorable party that fits your budget",
    },
    // Add more items here
  ];

  const showSlider = (type) => {
    if (type === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
      setType("next");
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
      setType("prev");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // showSlider("next");
      setType("");
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`carousel ${type} overflow-hidden position-relative`}>
      <div className="list">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`item w-100 h-100 position-absolute inset-0 ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ inset: "0 0 0 0" }}
          >
            <img className="" src={item.image} />
            <div className="content">
              <div className="title">{item.title}</div>
              {/* <div className="topic">{item.topic}</div>/ */}
              <div className="des">{item.description}</div>
              <div className="fs-4 mt-2">
                Don't wait, download the app and order whatever you want!
              </div>
              <div className="buttons">
                <button>Download </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`item ${
              index === currentIndex ? "active  order-4" : ""
            }`}
          >
            <img src={item.image} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button
          id="prev"
          onClick={() => {
            showSlider("prev");
            console.log("prev");
          }}
        >
          &lt;
        </button>
        <button id="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>
      <div className="time" />
    </div>
  );
};
