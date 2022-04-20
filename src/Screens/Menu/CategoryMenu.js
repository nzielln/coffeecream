import React from "react";
import {useParams} from "react-router-dom";
import food from "../../Data/food.json";
import drinks from "../../Data/drinks.json";
import merch from "../../Data/merchmenu.json";
import FoodIconMedium from "../../Components/Icons/FoodIconMedium";
import FoodCard from "../../Components/FoodCard";

//SubMenu
const CategoryMenu = () => {
    let params = useParams();
    let category = params.category;

    let items = drinks.filter(e => e.type.toLowerCase() === category.replace("_", " "))
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-between"
             style={{"paddingLeft": "160px", "paddingRight": "160px", "paddingTop": "120px", "flexBasis": "33.333333%"}}>
            {
                items.map(m => {
                    return <FoodCard item={m} rest={{}}/>
                })
            }

        </div>
    );
}

export default CategoryMenu;