import * as cafe_services from "../SERVICES/CafeServices";

export const GET_CAFE = "GET_CAFE";
export const UPDATE_CAFE = "UPDATE_CAFE";

export const getCafe = async (dispatch) => {
    const cafe = await cafe_services.getCafes();
    dispatch({
        type: GET_CAFE,
        current_cafe: cafe
    })

}

export const updateCafe = async (dispatch, cafe) => {
    const status = await cafe_services.updateCafe(cafe);
    dispatch({
        type: UPDATE_CAFE,
        new_cafe: cafe
    })

}
