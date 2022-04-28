import {UPDATE_USER, GET_USER} from "./DATABASE/ACTIONS/AuthActions";

const UserReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_USER:
            return action.session_user;
        case GET_USER:
            return action.session_user;
        default:
            return state;
    }
}

export default UserReducer;