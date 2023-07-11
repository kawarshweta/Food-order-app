import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  
  const [isLogedIn, setIslogedIn] = useState(false);
  return (
    <div className="flex justify-between bg-lime-200 h-auto shadow-lg items-center pr-4">
      <div className="w-20">
        <img className="mix-blend-multiply" src={CDN_URL} />
      </div> 
      <div className="nav-items">
        <ul className="flex space-x-12">
          <Link to ="/"><li>Home</li></Link>
          <Link to ="/about"><li>About Us</li></Link>
          <Link to="/contact" ><li>Contact Us</li></Link>
          <Link to="/grocery" ><li>Grocery</li></Link>
          <Link><li>Cart</li></Link>
          {isLogedIn ? (
          <button onClick={() => setIslogedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIslogedIn(true)}>Logout</button>
        )}
        </ul>
       
      </div>
    </div>
  );
};

export default Header;
