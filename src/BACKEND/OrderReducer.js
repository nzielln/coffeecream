import {GET_ORDER, DELETE_ORDER, GET_ORDERS, UPDATE_ORDER} from "./DATABASE/ACTIONS/OrderActions";

const OrderReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_ORDER:
            return state.map(o => o._id === action.order._id ? action.order : o);
        case DELETE_ORDER:
            return state.filter(o => o._id !== action.order._id);
        case GET_ORDER:
            return action.order;
        case GET_ORDERS:
            return action.all_orders;
        default:
            return state;
    }
}

export default OrderReducer;