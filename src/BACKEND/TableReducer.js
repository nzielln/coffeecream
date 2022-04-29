import {UPDATE_TABLE, CREATE_TABLE, GET_TABLES, DELETE_TABLE} from "./DATABASE/ACTIONS/TableActions"

const TableReducer = (state = [], action) => {
    switch(action.type) {
        case GET_TABLES:
            return state = [...action.tables]
        case CREATE_TABLE:
            return state = [...state, action.table]
        case DELETE_TABLE:
            return state.filter(t => t._id !== action.table_id)
        case UPDATE_TABLE:
            return state.map(t => t._id === action.table._id ? action.table : t)
        default:
            return state;
    }
}

export default TableReducer