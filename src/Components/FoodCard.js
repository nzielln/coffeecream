import React from "react";
import FoodIconSmall from "./Icons/FoodIconSmall";

//CategoryMenu
const FoodCard = ({item}) => {
    console.log(item)
    return (
        <div className="c-food-card d-flex align-content-center justify-content-center">
            <FoodIconSmall item={item}/>
        </div>
    );
}

export default FoodCard;