import {ADD_MENU, GET_MENUS, REMOVE_MENU, UPDATE_MENU } from "./DATABASE/ACTIONS/MenuActions";

const MenuReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_MENU:
            return [...state, action.item];
        case REMOVE_MENU:
            return state.filter(i => i._id !== action.id);
        case UPDATE_MENU:
            return state.map(i => i._id === action.item._id ? action.item : i);
        case GET_MENUS:
            return action.items;
        default:
            return state;
    }
}

export default MenuReducer;