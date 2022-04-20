import React from "react";
import {Link, useLocation} from "react-router-dom";

const FoodIconMedium = ({item}) => {
    let path = useLocation().pathname;

    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center me-5">
            <Link to={`${path}/${item.category.toLowerCase().replace(" ","_")}`}>
                <img className="c-f-medium mb-4 mt-5" src={`/Images/${item.image}`} alt=""/>
            </Link>
            <h3 className="c-medium-bold">{item.category}</h3>
        </div>
    );
}

export default FoodIconMedium;