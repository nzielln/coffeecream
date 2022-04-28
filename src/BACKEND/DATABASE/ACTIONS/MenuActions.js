import * as menu_services from "../SERVICES/MenuServices";

export const ADD_MENU = "ADD_MENU";
export const GET_MENUS = "GET_MENUS";
export const UPDATE_MENU = "UPDATE_MENU";
export const REMOVE_MENU = "REMOVE_MENU";

export const deleteMenu = async (dispatch, id) => {
    const status = await menu_services.deleteMenu(id);
    dispatch({
        type: REMOVE_MENU,
        id: id
    })

}
export const getMenus = async (dispatch) => {
    const menus = await menu_services.getMenus();
    dispatch({
        type: GET_MENUS,
        items: menus
    })

}

export const updateMenu = async (dispatch, item) => {
    const status = await menu_services.updateMenu(item);
    dispatch({
        type: UPDATE_MENU,
        item: item
    })

}

export const createMenu = async (dispatch, item) => {
    const status = await menu_services.createMenu(item);
    dispatch({
        type: ADD_MENU,
        item: item
    })

}
