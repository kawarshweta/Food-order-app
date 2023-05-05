import Cards from "./Cards";
import resObj from "../utils/mockdata";
import { useState, useEffect } from "react";
import resObj from "../utils/mockdata";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestaurants)

  function filterData(searchText, listOfRestaurants) {
    const filterData = listOfRestaurants.filter((listOfRestaurants) =>
      listOfRestaurants.data.name.includes(searchText)
    );
    return filterData;
  }

  return (
    <div className="restaurant-body">
      <div className="body-header">
        <div className="search-button">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const data = filterData(searchText, listOfRestaurants);
              setListOfRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-button"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filterdList);
            console.log(listOfRestaurants);
          }}
        >
          Filter top rated reastaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <Cards key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
