
const TypeReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_TYPE_EMPLOYEE":
            return state = action.role;
        case "SET_TYPE_CUSTOMER":
            return state = action.role;
        default:
            return state;
    }
}

export default TypeReducer;