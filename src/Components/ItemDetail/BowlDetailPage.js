import React, {useEffect, useState} from "react";
import FoodIconMediumNoLink from "../Icons/FoodIconMediumNoLink";
import WordOptions from "../WordOptions";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCart, getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useNavigate} from "react-router-dom";

const options = ["Rice", "Bowl"];
const BowlDetailPage = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    useEffect(  () => {
        async function fetch() {
            await getUser(dispatch);
        }
        fetch();
    }, [])

    const temp = useRef();
    const instructions = useRef("");
    const [base, setBase] = useState();

    const addToOder = (e) => {
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
                    option: base,
                    type: "Base",
                    cost: "0"
                }
            ],
            type: "Food"
        }

        const sub = new_order.options.reduce((a,b) => a + parseFloat(b.cost), 0)
        let updated_cart;
        if (Object.keys(cart).length === 0) {
            updated_cart = {
                customer: user._id,
                total: (parseFloat(new_order.item.price) + sub + 0.75).toString(),
                table: 2,
                tax: 0.75,
                completed: false,
                discount: 0,
                subtotal: (parseFloat(new_order.item.price )+ 0.75).toString(),
                drink_items: [],
                food_items: [new_order],
                merch: []
            }
        } else {
            updated_cart = {
                ...cart,
                total: (parseFloat(cart.total) + parseFloat(new_order.item.price) + sub).toString(),
                subtotal: (parseFloat(cart.subtotal) + parseFloat(new_order.item.price)).toString(),
                food_items: [...cart.food_items, new_order]
            }
        }
        updateCart(dispatch, updated_cart)
        navigate("/cc/menu")
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="c-large-bold">{item.name}</h4>
            <FoodIconMediumNoLink item={item}/>

            <h4 className="c-large-bold mb-4 mt-4">ChooseBase</h4>
            <div className="d-flex align-items-center justify-content-between" style={{"width": "25%"}}>
                {
                    options.map(m => {
                        return <button className="c-button-noline" onClick={(e) => {
                            e.preventDefault();
                            setBase(m);
                        }
                        }><WordOptions option={m}/></button>;
                    })
                }
            </div>
            <h4 className="c-large-bold mb-3 mt-5">Options</h4>
            <form action=""
                  onSubmit={(e) => addToOder(e)}
                  className="c-form d-flex flex-column align-items-center justify-content-evenly">

                <select name="temp" ref={temp} id="temp" className="form-select mb-2">
                    <option value="">Temperature</option>
                    <option value="Hot">Hot</option>
                    <option value="Cold">Cold</option>
                </select>
                <h4 className="c-large-bold mb-3 mt-5">Special Instructions</h4>
                <textarea className="c-textarea" ref={instructions} name="instructions" id="instructions" rows="5"/>

                <button type="submit"
                        onClick={(e) => addToOder(e)}
                        className="c-button c-medium-medium mt-3">Add To Cart</button>

            </form>
        </div>
    );
};

export default BowlDetailPage;