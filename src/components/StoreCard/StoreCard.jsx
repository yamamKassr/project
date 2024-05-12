import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./StoreCard.css";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const StoreCard = ({ img, title, rate, id }) => {
  // Function to generate star icons based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon color="gold" key={i} icon={faStar} />);
    }
    if (halfStar) {
      stars.push(
        <FontAwesomeIcon color="yellow" key="half" icon={faStarHalfAlt} />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={emptyStar} />);
    }
    return stars;
  };
  return (
    <div className="col-lg-6 col-12 store-card">
      <div className="d-flex align-items-stretch justify-content-center gap-lg-2 flex-lg-row flex-column">
        <img
          src={img}
          alt="party"
          className="col-lg-3 col-6 mx-lg-0 mx-auto "
        />
        <div className="bg-white col-lg-8 col-12 pt-lg-4 py-2 pb-lg-4 ps-lg-5 ps-2 position-relative d-flex flex-column justify-content-between">
          <h3>{title}</h3>
          <div className="position-absolute end-0 top-0 mt-lg-4 mt-2 me-3">
            {renderStars(rate)}
          </div>
          <p className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          </p>
          <Link to={`store/${id}`} className="text-primary w-fit-content">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};
