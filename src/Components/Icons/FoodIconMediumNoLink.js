import React from "react";
import {Link} from "react-router-dom";

const FoodIconMediumNoLink = ({item}) => {
    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center">
            <img className="c-f-medium mb-4 mt-5" src={`/Images/${item.image}`} alt=""/>
            <h3 className="c-medium-bold">{item.category}</h3>
        </div>
    );
};

export default FoodIconMediumNoLink;