import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useReastaurantDetails";

const RestaurantDetails = () => {
  //how to read dynamic url params
  const { id } = useParams();

  const resMenu = useRestaurantDetails(id)

  if (resMenu === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, areaName, sla} = resMenu?.cards[0]?.card.card?.info;
  const { itemCards } =
    resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <p>{areaName}</p>
      <p>{sla.lastMileTravelString}</p>
      {itemCards && itemCards.length > 0 ? (
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      ) : (
        <p>no Items found</p>
      )}
    </div>
  );
};

export default RestaurantDetails;
