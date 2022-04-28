import {getCartSession, updateCartSession, getUserSession, updateUserSession} from "../SERVICES/AuthServices";

export const GET_CART = "GET_CART";
export const UPDATE_CART = "UPDATE_CART";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";

export const getCart = async (dispatch) => {
    const cart = await getCartSession();
    console.log(cart)
    dispatch({
        type: GET_CART,
        session_cart: cart
    })

}

export const getUser = async (dispatch) => {
    const user = await getUserSession();
    dispatch({
        type: GET_USER,
        session_user: user
    })

}

export const updateCart = async (dispatch, new_cart) => {
    const cart = await updateCartSession(new_cart);
    dispatch({
        type: UPDATE_CART,
        session_cart: new_cart
    })

}

export const updateUser = async (dispatch, new_user) => {
    const user = await updateUserSession(new_user);
    dispatch({
        type: UPDATE_USER,
       session_user: new_user
    })

}