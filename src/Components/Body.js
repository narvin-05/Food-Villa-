import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

export default function Body() {

  const [SearchText, setSearchText] = useState("");

  const [Restaurant, setRestaurant] = useState(restaurantList);

  function filterData(SearchText,Restaurant){

    const filteredData = Restaurant.filter((Restaurant) => Restaurant.data.name.includes(SearchText));

    return filteredData;

  }

  useEffect(() => {
     getRestaurantData();
  })

  async function getRestaurantData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.865156&lng=75.793532&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json);
    console.log("Hii");
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  } 


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(SearchText,Restaurant);
            // update the state - restaurants
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {Restaurant?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
}
