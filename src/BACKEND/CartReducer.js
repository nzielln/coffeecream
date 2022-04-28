import React from "react";
import {UPDATE_CART, GET_CART} from "./DATABASE/ACTIONS/AuthActions";

const CartReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_CART:
            return action.session_cart;
        case GET_CART:
            return action.session_cart;
        default:
            return state;
    }
}

export default CartReducer;