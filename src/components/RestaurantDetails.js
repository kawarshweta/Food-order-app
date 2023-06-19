import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, GET_RESTAURANT_MENU } from "../utils/constants";
import resObj from "../utils/mockdata";


const RestaurantDetails = () =>{
    //how to read dynamic url params
    const params = useParams();
    const {id} = params

    const [restaurantDetails, setRestaurantDetails] = useState({});

  

    useEffect (()=>{
        getRestaurantDetails();
    }, []);























































    

    async function getRestaurantDetails (){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1160966&lng=72.9977486&restaurantId=34932");
        const json = await data.json();
        // const menu_item = json.data.cards[2]['groupedCard'].cardGroupMap.REGULAR.cards

        setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info?.locality)
        console.log(json.data.cards[0].card.card.info.locality)
        console.log(json.data)
        // console.log(json?.data?.cards[2]?.card?.card?.info?.name)
        
    }
    const restaurantMenu = {
        name : "shweta",
        cusines: ["mcd", "pizza", "veg"],
        dessert: "rassgulla",
        rating: "4.1"
    }


    return(
        <div>
            <h2>{restaurantMenu.name}</h2>
            <img src = {CDN_URL + restaurantDetails.cloudinaryImageId}/>
            <h3>{restaurantMenu.cusines.join(", ")}</h3>
            <h2>{restaurantMenu.dessert}</h2>
            <h2>{restaurantMenu.rating}</h2>
        </div>
    );
}

export default RestaurantDetails;