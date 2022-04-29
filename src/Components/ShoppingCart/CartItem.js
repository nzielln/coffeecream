import React, {useEffect, useState} from "react";
import FoodIconSmallest from "../Icons/FoodIconSmallest";
import {getFoods} from "../../BACKEND/DATABASE/SERVICES/FoodServices";
import {getDrinks} from "../../BACKEND/DATABASE/SERVICES/DrinkServices";
import {getMerches} from "../../BACKEND/DATABASE/SERVICES/MerchServices";
import {getMenus} from "../../BACKEND/DATABASE/SERVICES/MenuServices";
import {getCart, getUser, updateCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useDispatch, useSelector} from "react-redux";

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetch() {
            getCart(dispatch)
        }
        fetch()
    }, [])

    const cart = useSelector(state => state.cart)

    const [m_item, setItem] = useState(item.item)

    const removeItem = (e) => {
        e.preventDefault();
       let new_cart;
       const sub = item.options.reduce((a,b) => a + parseFloat(b.cost), 0)
       if (item.type === "Food") {
           console.log("Hey")
           new_cart = {
               ...cart,
               total: (parseFloat(cart.total) - parseFloat(item.item.price) - sub).toString(),
               sub_total: (parseFloat(cart.subtotal) - parseFloat(item.item.price)).toString(),
               food_items: cart.food_items.filter(f => f.item.name !== m_item.name)
           }
       } else if (item.type === "Drinks") {
           new_cart = {
               ...cart,
               total: (parseFloat(cart.total) - parseFloat(item.item.price) - sub).toString(),
               sub_total: (parseFloat(cart.subtotal) - parseFloat(item.item.price)).toString(),
               drink_items: cart.drink_items.filter(f => f.item.name !== m_item.name)
           }
       } else {
           new_cart = {
               ...cart,
               total: (parseFloat(cart.total) - parseFloat(item.item.price) - sub).toString(),
               sub_total: (parseFloat(cart.subtotal) - parseFloat(item.item.price)).toString(),
               merch: cart.merch.filter(f => f.item.name !== m_item.name)
           }
       }
        console.log(new_cart)
       updateCart(dispatch, new_cart)
        setItem(null)
    }
    if(!m_item) {
        return null
    }

    return (
        <div className="c-cart-card d-flex align-items-center justify-content-between mb-3">
            <FoodIconSmallest item={m_item}/>
            <div className="c-cart-card-content">
                <div className="c-cart-line c-cart-item mb-2">
                    <h4 className="c-small-medium">{m_item.name}</h4>

                    {m_item.price.toString().split(".").length > 1 ? (
                            m_item.price.toString().split(".")[1].length === 1 ?
                                <h5 className="c-medium-bold">${m_item.price}0</h5> :
                                <h5 className="c-medium-bold">${m_item.price}</h5>) :
                        <h5 className="c-medium-bold">${m_item.price}</h5>}
                </div>
                <div className="c-options mb-3">
                    {item.type === "Drinks" ? <h4 className="c-xsmall-normal">{item.size}</h4> : null}
                    {item.type === "Merch" ? null :

                        item.options.filter(o => o.option !== "0" || o.option === "").map(opt => {

                            if (opt.cost === 0) {
                                return <div className="c-cart-line">
                                    <h5 className="c-xsmall-normal">{opt.option}</h5>
                                </div>;
                            } else {
                                return <div className="c-cart-line ">
                                    <h5 className="c-xsmall-normal"><span className="c-xsmall-medium">{opt.type}:</span>  {opt.option}</h5>
                                    {opt.cost === "0" ? null : (opt.cost.toString().split(".").length > 1 ?
                                        (opt.cost.toString().split(".")[1].length === 1 ?
                                            <h4 className="c-xsmall-medium">${opt.cost}0</h4> :
                                            <h4 className="c-xsmall-medium">${opt.cost}</h4>)
                                        : <h4 className="c-xsmall-medium">${opt.cost}</h4>)}

                                </div>;

                            }
                        })
                    }

                </div>
                {
                    item.type === "Food" ?
                        <div className="c-instructions">
                            <h3 className="c-xsmall-medium mb-1">Instructions</h3>
                            <h5 className="c-xsmall-normal">{item.special_instructions}</h5>
                        </div> : ""

                }
                <div className="c-cart-buttons d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex align-items-center justify-content-between"
                         style={{"width": "100px"}}
                    >
                        <button className="c-button-noline d-flex align-items-center justify-content-center">
                            <i className="fa-solid fa-pen"/>
                        </button>
                        <button className="c-button-noline d-flex align-items-center justify-content-center"
                        >
                            <i className="fa-solid fa-plus"/>
                        </button>
                        <button className="c-button-noline d-flex align-items-center justify-content-center"
                                onClick={(e) => removeItem(e)}
                        >
                            <i className="fa-solid fa-minus"/>
                        </button>
                    </div>
                    <button className="c-button-noline d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-info"/>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CartItem;