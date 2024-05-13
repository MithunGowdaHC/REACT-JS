import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);

  const [filteredRestaurant,setfilteredRestaurant] = useState([]);

  const [searchlist, setsearchlist] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurant(json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchlist}
          onChange={(e) => {
            setsearchlist(e.target.value);
          }}
        />

        <button onClick={()=>{
          console.log(searchlist);
        const filteredRestaurant = listofRestaurants.filter((res)=>
          res.info.name.toLowerCase().includes(searchlist.toLowerCase())
        );
        setfilteredRestaurant(filteredRestaurant);

        }}>Search</button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredlist = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurants(filteredlist);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurants) => (
            <RestaurantCard key={restaurants.info.id} resData={restaurants} />
          ))}
      </div>
    </div>
  );
};

export default Body;
