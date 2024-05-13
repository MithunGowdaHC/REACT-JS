import { CDN_URL } from "./components/utils/constants";

const RestaurantCard = (props) => {
    const { resData} = props;
  const{name,avgRating,deliveryTime,cuisines,locality} = resData?.info
  
    return (
      <div className="res-card">
        <img
          className="cardimg"
          src={CDN_URL + resData.info.cloudinaryImageId}
        ></img>
        <div className="rescard-details">
        <h4>{name}</h4>
  
        <div className="rating-time">
        <h4>{avgRating}</h4>
        <h5>{deliveryTime}</h5>
        </div>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{locality}</h4>
  
        </div>
      </div>
    )
  };

  export  default RestaurantCard;