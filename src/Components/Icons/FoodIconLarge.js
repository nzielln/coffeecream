import React from "react";
import {Link} from "react-router-dom";

//MainMenu
const FoodIconLarge = ({item}) => {
    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center">
            <Link to={`/cc/menu/${item.category.toLowerCase()}`}>
                <img className="c-f-large mb-4" src={`/Images/${item.image}`} alt=""/>
            </Link>
            <h3 className="c-medium-bold">{item.category}</h3>
        </div>
    );
}

export default FoodIconLarge;