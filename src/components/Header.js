import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
          <Link to ="/"><li>Home</li></Link>
          <Link to ="/about"><li>About Us</li></Link>
          <Link to="/contact" ><li>Contact Us</li></Link>
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
