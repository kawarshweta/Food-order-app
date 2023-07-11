import { LOGO_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div className="w-[300px] mx-10 rounded-lg shadow-md  shadow-gray-300 h-[360] mb-5 hover:shadow-gray-800">
      <img className="rounded-lg"src={LOGO_URL + resData.data.cloudinaryImageId} />
      <h2 className="mt-3 font-bold pl-2">{name}</h2>
      <h3 className="font-thin pl-2">{cuisines.join(", ")}</h3>
      <div className="flex justify-between mt-3 p-2">
        <div className="flex bg-green-400 px-1">
        <FontAwesomeIcon className="text-white m-1" icon={faStar} />
        <h5 className="rating text-white">{avgRating}stars</h5>
        </div>
        
        <h5>{deliveryTime}minutes</h5>
        <h4>Rs {costForTwo} / 100</h4>
      </div>
    </div>
  );
};

export default Cards;
