import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const Header = () => {
  const userLoggedIn = () => {
    return false;
  };

  const [isLogedIn, setIslogedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={CDN_URL} />
      </div> 
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        {isLogedIn ? (
          <button onClick={() => setIslogedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIslogedIn(true)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
