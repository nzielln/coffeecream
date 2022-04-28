import * as order_services from "../SERVICES/OrderServices";

export const GET_ORDERS = "GET_ORDERS";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const GET_ORDER = "GET_ORDER";

export const getOrders = async (dispatch) => {
    const orders = await order_services.getOrders();
    dispatch({
        type: GET_ORDERS,
        all_orders: orders
    })

}

export const deleteOrder = async (dispatch, order) => {
    const res = await order_services.deleteOrder(order);
    dispatch({
        type: DELETE_ORDER,
        order: order
    })

}

export const updateOrder = async (dispatch, order) => {
    const res = await order_services.updateOrder(order);
    dispatch({
        type: UPDATE_ORDER,
        order: order
    })

}

export const getOrderById = async (dispatch, id) => {
    const orders = await order_services.getOrderById(id);
    dispatch({
        type: GET_ORDER,
       order: orders
    })

}