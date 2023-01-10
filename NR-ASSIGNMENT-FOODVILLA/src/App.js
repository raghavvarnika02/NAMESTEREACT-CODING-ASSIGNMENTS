import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// const RestaurantCard = (props) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//       ></img>
//       <h2>{props.restaurant.data?.name}</h2>
//       <h4>{props.restaurant.data?.cuisines.join(", ")}</h4>
//       <h5>{props.restaurant.data?.lastMileTravelString} Minutes</h5>
//     </div>
//   );
// };

//2.destructuring
// const RestaurantCard = ({ restaurant }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           restaurant.data?.cloudinaryImageId
//         }
//       ></img>
//       <h2>{restaurant.data?.name}</h2>
//       <h4>{restaurant.data?.cuisines.join(", ")}</h4>
//       <h5>{restaurant.data?.lastMileTravelString} Minutes</h5>
//     </div>
//   );
// };

//3.Destruction & optimization
// const RestaurantCard = ({ restaurant }) => {
//   const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
//     restaurant.data;
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       ></img>
//       <h2>{name}</h2>
//       <h4>{cuisines.join(", ")}</h4>
//       <h5>{lastMileTravelString} Minutes</h5>
//     </div>
//   );
// };

//4. Destruction in parameters
// const RestaurantCard = ({
//   name,
//   cuisines,
//   cloudinaryImageId,
//   lastMileTravelString,
// }) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//           cloudinaryImageId
//         }
//       ></img>
//       <h2>{name}</h2>
//       <h4>{cuisines.join(", ")}</h4>
//       <h5>{lastMileTravelString} Minutes</h5>
//     </div>
//   );
// };

//4.
// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       <RestaurantCard
//         name={RestaurantList[0].name}
//         cuisines={RestaurantList[0].cuisines}
//         cloudinaryImageId={RestaurantList[0].cloudinaryImageId}
//         lastMileTravelString={RestaurantList[0].lastMileTravelString}
//       />
//       <RestaurantCard
//         name={RestaurantList[1].name}
//         cuisines={RestaurantList[1].cuisines}
//         cloudinaryImageId={RestaurantList[1].cloudinaryImageId}
//         lastMileTravelString={RestaurantList[1].lastMileTravelString}
//       />
//       <RestaurantCard
//         name={RestaurantList[2].name}
//         cuisines={RestaurantList[2].cuisines}
//         cloudinaryImageId={RestaurantList[2].cloudinaryImageId}
//         lastMileTravelString={RestaurantList[2].lastMileTravelString}
//       />
//       <RestaurantCard
//         name={RestaurantList[3].name}
//         cuisines={RestaurantList[4].cuisines}
//         cloudinaryImageId={RestaurantList[3].cloudinaryImageId}
//         lastMileTravelString={RestaurantList[3].lastMileTravelString}
//       />
//       <RestaurantCard
//         name={RestaurantList[4].name}
//         cuisines={RestaurantList[4].cuisines}
//         cloudinaryImageId={RestaurantList[4].cloudinaryImageId}
//         lastMileTravelString={RestaurantList[4].lastMileTravelString}
//       />
//     </div>
//   );
// };

//...spread operator
// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       <RestaurantCard {...RestaurantList[0].data} />
//       <RestaurantCard {...RestaurantList[1].data} />
//     </div>
//   );
// };

//props - properties;
// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       <RestaurantCard restaurant={RestaurantList[0]} />
//       <RestaurantCard restaurant={RestaurantList[1]} />
//       <RestaurantCard restaurant={RestaurantList[2]} />
//       <RestaurantCard restaurant={RestaurantList[3]} />
//       <RestaurantCard restaurant={RestaurantList[4]} />
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
