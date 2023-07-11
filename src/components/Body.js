import Cards from "./Cards";
import { useState, useEffect } from "react";
import resObj from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(listOfRestaurants)

  useEffect(() => {
    getListOfRestaurants();
  }, []);

  async function getListOfRestaurants() {
    fetchData();
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1160966&lng=72.9977486&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) return(<h1>Looks like you are offline, please check your internet connection!!!</h1>)

  function filterData(searchText, listOfRestaurants) {
    const filterData = listOfRestaurants.filter((listOfRestaurants) =>
      listOfRestaurants?.data?.name
        ?.toLowerCase()
        ?.includes(searchText?.toLowerCase())
    );
    return filterData;
  }
  console.log("render");

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
     {/* <Shimmer /> */}
      <div className="restaurant-body">
        <div className="flex justify-between m-4 ml-60">
          <div className="">
            <input
              type="text"
              className="border-solid border-2 border-black-500 w-60 rounded-md pl-2"
              placeholder="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="border-solid border-2 rounded-md bg-green-600"
              onClick={() => {
                //filter the restaurant cards and update the ui
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="bg-green-600 p-2 rounded-md mr-60 mb-5"
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
        <div className="flex mx-10 flex-wrap m-auto justify-center">
          {filteredRestaurants.length == 0 ? (
            <h1>No restaurant matches your search</h1>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <Cards resData={restaurant} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
