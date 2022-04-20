import React from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import CharOptions from "../CharOptions";
import WordOptions from "../WordOptions";

const spread = ["Butter", "Grape", "Strawberry", "Raspberry", "Orange"]
const PastryDetailPage = ({item}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <h4 className="c-large-bold mb-4 mt-4">Choose a Spread</h4>
            <div className="d-flex align-items-center justify-content-between" style={{"width": "500px"}}>
                {
                    spread.map(m => {
                        return <WordOptions option={m}/>
                    })
                }
            </div>
            <h4 className="c-large-bold mb-3 mt-5">Options</h4>
            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly">

                <select name="heated" id="heated" className="form-select mb-2">
                    <option value="">Heated</option>
                    <option value="heated">Heated</option>
                    <option value="toasted">Not Toasted</option>
                    <option value="none">Not Heated</option>
                </select>
                <h4 className="c-large-bold mb-3 mt-5">Special Instructions</h4>
                <textarea className="c-textarea" name="instructions" id="instructions" rows="5"/>

                <button type="submit" className="c-button c-medium-medium mt-3">Add To Cart</button>

            </form>
        </div>
    );
}

export default PastryDetailPage;