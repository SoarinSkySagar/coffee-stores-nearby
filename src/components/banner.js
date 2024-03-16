const Banner = (props) => {
    return (
      <div className=" py-8">
        <h1 className="font-bold text-7xl mb-7">
          <span className="text-white">Restaurant</span>{" "}
          <span className="text-blue-700">Connoisseur</span>{" "}
        </h1>
        <p className="text-3xl mb-7 text-white font-medium">Discover your local Restaurants!</p>
        <button
          onClick={props.handleOnClick}
          className="text-white text-2xl bg-blue-600 py-5 px-5"
        >
          {props.buttonText}
        </button>
      </div>
    );
  };
  
  export default Banner;