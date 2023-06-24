import { LOGO_URL } from "../utils/constants";

const Cards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="card-container">
      <img src={LOGO_URL + resData.data.cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="card-details">
        <h5 className="rating">{avgRating} stars</h5>
        <h5>{deliveryTime}minutes</h5>
        <h4>Rs {costForTwo} / 100</h4>
      </div>
    </div>
  );
};

export default Cards;
