const Shimmer = () => {
  return(
    <div className=" restaurant-container w-[350px] mx-10 rounded-lg shadow-md  shadow-gray-300 h-[360] mb-5 hover:shadow-gray-800 bg-gray-300 mt-9">

      {Array(10).fill("").map((e, index) =>(<div key={index} className="shimmer-card"></div>))}
      
    </div>
  );
};

export default Shimmer;
