import React from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import WordOptions from "../WordOptions";

const PlateDetailPage = ({item}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <h4 className="c-large-bold mb-3 mt-5">Options</h4>
            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly">

                <select name="temp" id="temp" className="form-select mb-2">
                    <option value="">Temperature</option>
                    <option value="hot">Hot</option>
                    <option value="cold">Cold</option>
                </select>
                <h4 className="c-large-bold mb-3 mt-5">Special Instructions</h4>
                <textarea className="c-textarea" name="instructions" id="instructions" rows="5"/>

                <button type="submit" className="c-button c-medium-medium mt-3">Add To Cart</button>

            </form>
        </div>
    );
}

export default PlateDetailPage;