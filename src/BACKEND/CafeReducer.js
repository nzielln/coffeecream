import {UPDATE_CAFE, GET_CAFE} from "./DATABASE/ACTIONS/CafeActions";

const CafeReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_CAFE:
            return {...state, ...action.new_cafe[0]};
        case GET_CAFE:
            return {...state, ...action.current_cafe[0]};
        default:
            return state;
    }
}

export default CafeReducer;