import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";

const FoodIconSmall = ({item}) => {
    let path = useLocation().pathname;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    useEffect(  () => {
        async function fetch() {
            await getUser(dispatch);
        }
        fetch();
    }, [])

    let i = item.name.toLowerCase().replaceAll(" ", "");
    const handleClick = (e) => {
        e.preventDefault()
        if (item.type !== "Merch") {
            navigate(`${path}/${i}`)
        } else {
            let new_order = {
                item: item,
                count: 1,
                type: "Merch"
            }
            let updated_cart;
            if (Object.keys(cart).length === 0) {
                updated_cart = {
                    customer: user._id,
                    total: (parseFloat(new_order.item.price) + 0.75).toString(),
                    tax: 0.75,
                    completed: false,
                    discount: 0,
                    subtotal: (parseFloat(new_order.item.price )+ 0.75).toString(),
                    drink_items: [],
                    merch: [new_order],
                    food_items: []
                }
            } else {
                updated_cart = {
                    ...cart,
                    total: (parseFloat(cart.total) + parseFloat(new_order.item.price)).toString(),
                    subtotal: cart.subtotal + new_order.item.price,
                    merch: [...cart.food_items, new_order]
                }

            }
            updateCart(dispatch, updated_cart)
            navigate("/cc/menu")
        }
    }

    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center">
            <button className="c-button-noline" onClick={(e) => handleClick(e)}
            >
                <img className="c-f-small mb-4" src={`/Images/${item.image}`} alt=""/>
            </button>
            <h3 className="c-medium-bold" style={{"width": "84px"}}>{item.name}</h3>

            <h3 className="c-small-medium mt-2" style={{"width": "84px"}}>${item.price.toString().split(".")[1].length === 1? item.price + "0" : item.price}</h3>
        </div>
    );
}

export default FoodIconSmall;