import React from "react";
import {Link, useLocation} from "react-router-dom";

const FoodIconSmall = ({item}) => {
    let path = useLocation().pathname;
    console.log(path)
    console.log(item)
    let i = item.name.toLowerCase().replaceAll(" ", "");

    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center">
            <Link className="c-link" to={`${path}/${i}`}
            >
                <img className="c-f-small mb-4" src={`/Images/${item.image}`} alt=""/>
            </Link>
            <h3 className="c-medium-bold" style={{"width": "84px"}}>{item.name}</h3>

            <h3 className="c-small-medium mt-2" style={{"width": "84px"}}>${item.price.toString().split(".")[1].length === 1? item.price + "0" : item.price}</h3>
        </div>
    );
}

export default FoodIconSmall;