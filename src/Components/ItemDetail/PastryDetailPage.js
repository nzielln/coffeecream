import React, {useRef} from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import CharOptions from "../CharOptions";
import WordOptions from "../WordOptions";
import {useState} from "react";
import {getCart, getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const spreads = ["Butter", "Grape", "Strawberry", "Raspberry", "Orange"];
const PastryDetailPage = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        async function fetch() {
            getCart(dispatch)
        }
        fetch()
    }, [])
    useEffect(() => {
        async function fetch() {
            getUser(dispatch)
        }
        fetch()
    }, [])
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const [spread, setSpread] = useState("None");
    const temp = useRef();
    const instructions = useRef();

    const addToOrder = (e) => {
        e.preventDefault();
        let new_order = {
            item: item,
            count: 1,
            special_instructions: instructions.current.value,
            options: [
                {
                    option: temp.current.value,
                    type: "Temperature",
                    cost: "0"
                },
                {
                    option: spread,
                    type: "Spread",
                    cost: "0"
                }
            ],
            type: "Food"
        };

        const sub = new_order.options.reduce((a, b) => a + parseFloat(b.cost), 0);
        let updated_cart;
        if (Object.keys(cart).length < 2) {
            updated_cart = {
                ...cart,
                customer: user._id,
                total: (parseFloat(new_order.item.price) + sub + 0.75).toString(),
                tax: 0.75,
                completed: false,
                discount: 0,
                subtotal: (parseFloat(new_order.item.price) + 0.75).toString(),
                drink_items: [],
                food_items: [new_order],
                merch: []

            };
        } else {

            updated_cart = {
                ...cart,
                total: (parseFloat(cart.total) + parseFloat(new_order.item.price) + sub).toString(),
                subtotal: (parseFloat(cart.subtotal) + parseFloat(new_order.item.price)).toString(),
                food_items: [...cart.food_items, new_order]
            };

        }
        if(!cart.table) {
            navigate("/tables", {state: {new_cart: updated_cart}})
        } else {
            updateCart(dispatch, updated_cart)
            navigate("/cc/menu")
        }

    };


    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <h4 className="c-large-bold mb-4 mt-4">Choose a Spread</h4>
            <div className="d-flex align-items-center justify-content-between" style={{"width": "500px"}}>
                {
                    spreads.map(m => {
                        return <button className="c-button-noline" onClick={(e) => {
                            e.preventDefault();
                            setSpread(m);
                        }
                        }><WordOptions option={m}/></button>;
                    })
                }
            </div>
            <h4 className="c-large-bold mb-3 mt-5">Options</h4>
            <form action=""
                  className="c-form d-flex flex-column align-items-center justify-content-evenly"
                  onSubmit={(e) => addToOrder(e)}
            >

                <select name="heated" ref={temp} id="heated" className="form-select mb-2">
                    <option value="None">Heated</option>
                    <option value="Heated">Heated</option>
                    <option value="Toasted">Not Toasted</option>
                    <option value="None">Not Heated</option>
                </select>
                <h4 className="c-large-bold mb-3 mt-5">Special Instructions</h4>
                <textarea className="c-textarea" ref={instructions} name="instructions" id="instructions" rows="5"/>

                <button type="submit"
                        className="c-button c-medium-medium mt-3"
                        onClick={(e) => addToOrder(e)}
                >Add To Cart
                </button>

            </form>
        </div>
    );
};

export default PastryDetailPage;