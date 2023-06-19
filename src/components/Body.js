import Cards from "./Cards";
import resObj from "../utils/mockdata";
import { useState, useEffect } from "react";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(listOfRestaurants)

  useEffect(() => {
    getListOfRestaurants();
  }, []);

  async function getListOfRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1160966&lng=72.9977486&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  function filterData(searchText, listOfRestaurants) {
    const filterData = listOfRestaurants.filter((listOfRestaurants) =>
      listOfRestaurants?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterData;
  }
  console.log("render");

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
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
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="filter-button"
            onClick={() => {
              const filterdList = filteredRestaurants.filter( 
                (res) => res.data.avgRating > 4
              );
              setFilteredRestaurants(filterdList);
              console.log(filterdList);
            }}
          >
            Filter top rated reastaurants
          </button>
        </div>
        <div className="restaurant-container">
          {(filteredRestaurants.length == 0)? (<h1>No restaurant matches your search</h1>):
            filteredRestaurants.map((restaurant) => (
              <Cards key={restaurant.data.id} resData={restaurant} />
            ))
          }
        
        </div>
      </div>
    </>
  );
};

export default Body;
