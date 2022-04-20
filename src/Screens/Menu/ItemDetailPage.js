import React from "react";
import {useParams} from "react-router-dom";
import CharOptions from "../../Components/CharOptions";
import FoodIconMediumNoLink from "../../Components/Icons/FoodIconMediumNoLink";
import drink from "../../Data/drinks.json"
const size = [
    {
        size: "S",
        quant: "12 oz"
    },
    {
        size: "M",
        quant: "16 oz"
    },
    {
        size: "L",
        quant: "20 oz"
    }
]

const ItemDetailPage = () => {
    let params = useParams();
    let id = params.id;
    let item = drink.filter(f => f._id = id)[0]
    console.log(id)
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <h4 className="c-large-bold mb-4 mt-4">Choose a Size</h4>
            <div className="d-flex align-items-center justify-content-between" style={{"width": "120px"}}>
                {
                    size.map(m => {
                        return <CharOptions option={m}/>
                    })
                }
            </div>
            <h4 className="c-large-bold mb-5 mt-5">Options</h4>
            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly">

                <select name="caffeine" id="caffeine" className="form-select mb-2">
                    <option value="">Caffeine</option>
                    <option value="regular">Caffeine</option>
                    <option value="decaf">Decaf</option>
                </select>
                <div className="c-shots d-flex align-items-center justify-content-between mb-2">
                    <button><i className="fa-solid fa-plus"></i></button>
                    <input type="number" id="shots" placeholder="Shots"/>
                    <button><i className="fa-solid fa-minus"></i></button>
                </div>

                <select name="sweetner" id="sweetner" className="form-select mb-2">
                    <option value="">Sweetner</option>
                    <option value="sugar">Sugar</option>
                    <option value="brown_sugar">Brown Sugar</option>
                    <option value="splenda">Splenda</option>
                    <option value="honey">Honey</option>
                    <option value="syrup">Syrup</option>
                    <option value="cane_syrup">Cane Syrup</option>
                </select>

                <select name="dairy" id="dairy" className="form-select mb-2">
                    <option value="">Dairy</option>
                    <option value="wmilk">Whole Milk</option>
                    <option value="2milk">2% Milk</option>
                    <option value="1milk">1% Milk</option>
                    <option value="amilk">Almond Milk</option>
                    <option value="omilk">Oatmilk</option>
                    <option value="smilk">Soymilk</option>
                    <option value="cmilk">Coconutmilk</option>
                    <option value="half">Half & Half</option>
                </select>

                <select name="flavors" id="flavors" className="form-select mb-2">
                    <option value="">Flavor</option>
                    <option value="caramel">Caramel</option>
                    <option value="hazelnut">Hazelnut</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="mixedberry">Mixed Berry</option>
                    <option value="mocha">Mocha</option>
                    <option value="cinnamon">Cinnamon</option>
                    <option value="pecan">Pecan</option>
                </select>

                <select name="topping" id="topping" className="form-select mb-2">
                    <option value="">Topping</option>
                    <option value="caramel">Caramel</option>
                    <option value="cinnamon">Cinnamon</option>
                    <option value="mocha">Mocha</option>
                    <option value="whipped">Whipped Cream</option>
                    <option value="foam">Cold Foam</option>
                    <option value="sweetfoam">Vanilla Sweet Cream Cold Foam</option>
                </select>

                <button type="submit" className="c-button c-medium-medium mt-3">Add To Cart</button>

            </form>
        </div>
    );
}

export default ItemDetailPage;