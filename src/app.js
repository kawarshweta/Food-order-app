import React from "react";
import ReactDOM from "react-dom/client";
import "/style.scss";

//import components
import Header from "./components/Header.js"
import Body from "./components/Body"

const App = () => {
  return (
    <div className="food-page">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
