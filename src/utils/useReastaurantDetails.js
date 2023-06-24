import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantDetails = (id) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchDetailsPage();
  }, []);

  const fetchDetailsPage = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();

    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantDetails;
